import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  MARKS,
  type Document,
  type Node,
} from "@contentful/rich-text-types";

function isEmptyParagraph(node: Node): boolean {
  if (node.nodeType !== BLOCKS.PARAGRAPH) return false;
  const content = (node as { content?: Node[] }).content ?? [];
  if (content.length === 0) return true;
  return content.every((child) => {
    if (child.nodeType !== "text") return false;
    const value = (child as { value?: string }).value ?? "";
    return value.replace(/[\s​-‍﻿]/g, "") === "";
  });
}

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-accent">
        {text}
      </code>
    ),
    [MARKS.SUPERSCRIPT]: (text) => <sup>{text}</sup>,
    [MARKS.SUBSCRIPT]: (text) => <sub>{text}</sub>,
    [MARKS.STRIKETHROUGH]: (text) => <s>{text}</s>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (isEmptyParagraph(node)) return null;
      return (
        <p className="my-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {children}
        </p>
      );
    },
    [BLOCKS.HEADING_1]: (_node, children) => (
      <h1 className="mt-12 mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <h2 className="mt-10 mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node, children) => (
      <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-foreground">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (_node, children) => (
      <h4 className="mt-6 mb-3 text-xl font-bold text-foreground">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (_node, children) => (
      <h5 className="mt-6 mb-3 text-lg font-semibold text-foreground">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (_node, children) => (
      <h6 className="mt-6 mb-3 text-base font-semibold text-foreground">
        {children}
      </h6>
    ),
    [BLOCKS.UL_LIST]: (_node, children) => (
      <ul className="my-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-accent md:text-lg">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (_node, children) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 text-muted-foreground marker:text-accent md:text-lg">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node, children) => (
      <li className="[&>p]:my-0">{children}</li>
    ),
    [BLOCKS.QUOTE]: (_node, children) => (
      <blockquote className="my-8 border-l-2 border-accent pl-6 text-lg italic text-foreground/90 md:text-xl">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-10 border-border" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const fields = (node.data.target as any)?.fields;
      const file = fields?.file;
      if (!file?.url) return null;
      const url = file.url.startsWith("//") ? `https:${file.url}` : file.url;
      const isImage =
        typeof file.contentType === "string" &&
        file.contentType.startsWith("image/");
      if (!isImage) return null;
      return (
        <figure className="my-10">
          <img
            src={url}
            alt={fields.title || fields.description || ""}
            className="w-full rounded-2xl border border-border"
            loading="lazy"
          />
          {fields.description && (
            <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {fields.description}
            </figcaption>
          )}
        </figure>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target={node.data.uri.startsWith("http") ? "_blank" : undefined}
        rel={node.data.uri.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-accent underline-offset-4 hover:underline"
      >
        {children}
      </a>
    ),
  },
};

export default function RichText({ document }: { document: Document }) {
  return <>{documentToReactComponents(document, options)}</>;
}
