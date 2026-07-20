#!/usr/bin/env node
// Update an existing Contentful article's title/slug/excerpt/seo fields and add tags.
// Usage: node scripts/update-article.mjs '{"id":"...","fields":{...},"tags":["prod"]}'
import { readFileSync, existsSync } from "node:fs";

function loadDotEnv(path) {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    const v = t.slice(eq + 1).trim().replace(/^"(.*)"$/, "$1");
    if (!(k in process.env)) process.env[k] = v;
  }
}
loadDotEnv(new URL("../.env.local", import.meta.url).pathname);

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENV = process.env.CONTENTFUL_ENVIRONMENT || "master";
if (!SPACE || !TOKEN) {
  console.error("Missing CONTENTFUL_SPACE_ID / CONTENTFUL_MANAGEMENT_TOKEN");
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
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}\n${text}`);
  return text ? JSON.parse(text) : null;
}

async function main(input) {
  const { id, fields = {}, tags = [] } = input;
  if (!id) throw new Error("Missing id");

  // Fetch current entry
  const entry = await api(`/entries/${id}`);
  const locales = await api("/locales");
  const locale = locales.items.find((l) => l.default)?.code || "en-US";

  // Merge fields
  for (const [k, v] of Object.entries(fields)) {
    entry.fields[k] = { [locale]: v };
  }

  // Merge tags into metadata
  if (tags.length) {
    const existing = entry.metadata?.tags ?? [];
    const merged = [...existing];
    for (const t of tags) {
      if (!merged.find((x) => x.sys?.id === t)) {
        merged.push({ sys: { type: "Link", linkType: "Tag", id: t } });
      }
    }
    entry.metadata = { ...entry.metadata, tags: merged };
  }

  // PUT update
  const updated = await api(`/entries/${id}`, {
    method: "PUT",
    headers: { "X-Contentful-Version": String(entry.sys.version) },
    body: JSON.stringify({
      fields: entry.fields,
      metadata: entry.metadata,
    }),
  });

  // Publish
  await api(`/entries/${id}/published`, {
    method: "PUT",
    headers: { "X-Contentful-Version": String(updated.sys.version) },
  });

  console.log(`Updated & published.`);
  console.log(`  id:      ${id}`);
  console.log(`  version: ${updated.sys.version}`);
  console.log(`  tags:    ${(updated.metadata?.tags || []).map((t) => t.sys.id).join(", ") || "(none)"}`);
}

const arg = process.argv[2];
if (!arg) {
  console.error("Usage: node scripts/update-article.mjs '<json>' | @file.json");
  process.exit(1);
}
const input = arg.startsWith("@")
  ? JSON.parse(readFileSync(arg.slice(1), "utf8"))
  : JSON.parse(arg);
main(input).catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
