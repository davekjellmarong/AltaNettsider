#!/usr/bin/env node
// Publish an article to Contentful via the Management API.
// Usage: node scripts/publish-article.mjs '<json>'
// Reads CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN, CONTENTFUL_ENVIRONMENT from env or .env.local.

import { readFileSync, existsSync } from "node:fs";

function loadDotEnv(path) {
  if (!existsSync(path)) return;
  const lines = readFileSync(path, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^"(.*)"$/, "$1");
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadDotEnv(new URL("../.env.local", import.meta.url).pathname);

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENV = process.env.CONTENTFUL_ENVIRONMENT || "master";

if (!SPACE || !TOKEN) {
  console.error("Missing CONTENTFUL_SPACE_ID or CONTENTFUL_MANAGEMENT_TOKEN");
  process.exit(1);
}

const BASE = `https://api.contentful.com/spaces/${SPACE}/environments/${ENV}`;

async function api(path, opts = {}) {
  const res = await fetch(BASE + path, {
    ...opts,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      ...(opts.body
        ? { "Content-Type": "application/vnd.contentful.management.v1+json" }
        : {}),
      ...opts.headers,
    },
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}\n${text}`);
  }
  return text ? JSON.parse(text) : null;
}

// Minimal markdown → Contentful Rich Text converter.
// Supports: # headings (1-6), blank-line separated paragraphs, **bold**, *italic*, `code`, [text](url) links.
function inlineToNodes(text) {
  const nodes = [];
  const pattern =
    /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(`([^`]+)`)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let m;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(textNode(text.slice(last, m.index), []));
    }
    if (m[1]) {
      nodes.push(textNode(m[2], [{ type: "bold" }]));
    } else if (m[3]) {
      nodes.push(textNode(m[4], [{ type: "italic" }]));
    } else if (m[5]) {
      nodes.push(textNode(m[6], [{ type: "code" }]));
    } else if (m[7]) {
      nodes.push({
        nodeType: "hyperlink",
        data: { uri: m[9] },
        content: [textNode(m[8], [])],
      });
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(textNode(text.slice(last), []));
  return nodes.length ? nodes : [textNode(text, [])];
}

function textNode(value, marks) {
  return { nodeType: "text", value, marks, data: {} };
}

function mdToRichText(md) {
  const content = [];
  const blocks = md.trim().split(/\n{2,}/);
  for (const raw of blocks) {
    const block = raw.trim();
    if (!block) continue;
    const heading = block.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      content.push({
        nodeType: `heading-${heading[1].length}`,
        data: {},
        content: inlineToNodes(heading[2].trim()),
      });
      continue;
    }
    // Treat single newlines inside a paragraph as spaces.
    const flat = block.replace(/\n/g, " ");
    content.push({
      nodeType: "paragraph",
      data: {},
      content: inlineToNodes(flat),
    });
  }
  return { nodeType: "document", data: {}, content };
}

async function main(input) {
  const locales = await api("/locales");
  const defaultLocale =
    locales.items.find((l) => l.default)?.code || "en-US";

  const richText = mdToRichText(input.body);
  const today = new Date().toISOString().slice(0, 10);

  const fields = {
    title: { [defaultLocale]: input.title },
    slug: { [defaultLocale]: input.slug },
    publishedDate: { [defaultLocale]: input.publishedDate || today },
    content: { [defaultLocale]: richText },
  };
  if (input.excerpt) fields.excerpt = { [defaultLocale]: input.excerpt };
  if (input.seoTitle) fields.seoTitle = { [defaultLocale]: input.seoTitle };
  if (input.seoDescription)
    fields.seoDescription = { [defaultLocale]: input.seoDescription };

  const entry = await api("/entries", {
    method: "POST",
    headers: { "X-Contentful-Content-Type": "article" },
    body: JSON.stringify({ fields }),
  });

  await api(`/entries/${entry.sys.id}/published`, {
    method: "PUT",
    headers: { "X-Contentful-Version": String(entry.sys.version) },
  });

  console.log(`Published.`);
  console.log(`  id:     ${entry.sys.id}`);
  console.log(`  locale: ${defaultLocale}`);
  console.log(`  slug:   ${input.slug}`);
  console.log(
    `  edit:   https://app.contentful.com/spaces/${SPACE}/entries/${entry.sys.id}`,
  );
}

const arg = process.argv[2];
if (!arg) {
  console.error("Usage: node scripts/publish-article.mjs '<json>'");
  process.exit(1);
}
const inputJson = arg.startsWith("@")
  ? readFileSync(arg.slice(1), "utf8")
  : arg;
main(JSON.parse(inputJson)).catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
