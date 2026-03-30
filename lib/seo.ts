import { site } from "@/lib/site";

export function absoluteUrl(path: string): string {
  const base = site.url.replace(/\/$/, "");
  if (path === "/" || path === "") return `${base}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** Default share image (clinic logo). Prefer a 1200×630 branded image later for best social previews. */
export const defaultOgImage = {
  url: absoluteUrl(site.logoSrc),
  width: 800,
  height: 300,
  alt: `${site.name} — ${site.tagline}`,
} as const;
