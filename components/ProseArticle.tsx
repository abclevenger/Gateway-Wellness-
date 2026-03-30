import type { ReactNode } from "react";

const articleClass =
  "prose-gw mx-auto max-w-3xl space-y-4 px-4 py-12 text-base leading-relaxed text-gw-muted sm:px-6 [&_h1]:font-[family-name:var(--font-display)] [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-gw-teal-dark [&_h1]:sm:text-4xl [&_h2]:mt-10 [&_h2]:font-[family-name:var(--font-display)] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gw-teal-dark [&_h3]:mt-6 [&_h3]:font-[family-name:var(--font-display)] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gw-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:font-medium [&_a]:text-gw-teal [&_a]:underline [&_a]:underline-offset-2";

export function ProseArticle({ children }: { children: ReactNode }) {
  return <article className={articleClass}>{children}</article>;
}
