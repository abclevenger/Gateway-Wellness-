import Link from "next/link";
import { site } from "@/lib/site";

export function HomeFinalCta() {
  return (
    <section
      className="border-y border-gw-border bg-gw-cream/60"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-14">
        <h2
          id="final-cta-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-gw-teal-dark sm:text-3xl"
        >
          Same-day visits when we can — book or call
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-snug text-gw-muted sm:text-base">
          {site.name} on Land O&apos; Lakes Blvd: chiropractic, physical therapy, massage, and
          injury care without driving all over Pasco.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/contact/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gw-teal px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-gw-teal-dark"
          >
            Get on the schedule
          </Link>
          <a
            href={site.phoneTel}
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-gw-teal bg-gw-white px-8 py-3.5 text-base font-semibold text-gw-teal-dark transition hover:bg-gw-white/90"
          >
            Call {site.phone}
          </a>
          <Link
            href="/online-scheduling/"
            className="inline-flex min-h-12 items-center justify-center text-sm font-semibold text-gw-teal underline-offset-2 hover:underline sm:ml-1"
          >
            Use online scheduling
          </Link>
        </div>
      </div>
    </section>
  );
}
