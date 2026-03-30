import type { Metadata } from "next";
import { localMetaSuffix } from "@/lib/local-seo";
import { defaultOgImage } from "@/lib/seo";
import { site } from "@/lib/site";

/** Standard metadata for internal pages — adds Land O' Lakes / Pasco context and canonical URL. */
export function localPageMeta(input: {
  path: `/${string}`;
  title: string;
  description: string;
  /** Page-specific keywords (merged for `<meta name="keywords">` where supported). */
  keywords?: string[];
}): Metadata {
  const description = `${input.description.trim()}${localMetaSuffix()}`;
  const ogTitle = `${input.title} | ${site.name}`;
  return {
    title: input.title,
    description,
    ...(input.keywords?.length ? { keywords: input.keywords } : {}),
    alternates: { canonical: input.path },
    openGraph: {
      title: ogTitle,
      description,
      url: input.path,
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [defaultOgImage.url],
    },
  };
}
