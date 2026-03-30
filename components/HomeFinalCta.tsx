import Link from "next/link";
import { site } from "@/lib/site";

export function HomeFinalCta() {
  return (
    <section
      className="border-y border-gw-border bg-gw-cream/60"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-4xl px-5 py-[4.75rem] text-center sm:px-6 sm:py-16">
        <h2
          id="final-cta-heading"
          className="font-[family-name:var(--font-display)] text-[1.4rem] font-semibold leading-tight text-gw-teal-dark sm:text-3xl"
        >
          Tomorrow doesn&apos;t have to feel like today
        </h2>
        <p className="mx-auto mt-2.5 max-w-lg text-sm leading-snug text-gw-muted sm:mt-3 sm:max-w-xl sm:text-base">
          <span className="md:hidden">
            Book your first visit or call {site.phone} — same-day often open.
          </span>
          <span className="hidden md:inline">
            {site.name}: book your first visit or call now. Integrated chiro, PT, and injury
            recovery in Land O&apos; Lakes — same-day when we can.
          </span>
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <Link
            href="/contact/"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gw-teal px-8 py-4 text-base font-bold text-white shadow-md transition hover:bg-gw-teal-dark active:bg-gw-teal-dark sm:w-auto"
          >
            Book Your First Visit
          </Link>
          <a
            href={site.phoneTel}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-gw-teal bg-gw-white px-8 py-4 text-base font-bold text-gw-teal-dark transition hover:bg-gw-cream active:bg-gw-cream sm:w-auto"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
