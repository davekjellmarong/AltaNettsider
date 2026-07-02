"use client";

interface Props {
  pageUrl: string;
  width?: number;
  height?: number;
  tabs?: "timeline" | "events" | "messages";
  hideCover?: boolean;
  showFacepile?: boolean;
  smallHeader?: boolean;
  className?: string;
}

export default function FacebookPagePlugin({
  pageUrl,
  width = 500,
  height = 700,
  tabs = "timeline",
  hideCover = false,
  showFacepile = false,
  smallHeader = true,
  className,
}: Props) {
  const params = new URLSearchParams({
    href: pageUrl,
    tabs,
    width: String(width),
    height: String(height),
    small_header: String(smallHeader),
    adapt_container_width: "true",
    hide_cover: String(hideCover),
    show_facepile: String(showFacepile),
  });

  const src = `https://www.facebook.com/plugins/page.php?${params.toString()}`;

  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
      allow="encrypted-media"
      loading="lazy"
      title="AltaNettsider på Facebook"
      className={className}
    />
  );
}
