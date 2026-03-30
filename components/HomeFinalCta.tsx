import Link from "next/link";
import { homeOffer } from "@/lib/home-offer";
import { site } from "@/lib/site";

export function HomeFinalCta() {
  return (
    <section
      className="border-y border-gw-border bg-gw-cream/60"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-4xl px-5 py-[4.75rem] text-center sm:px-6 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-gw-teal">
          {homeOffer.headline}
        </p>
        <h2
          id="final-cta-heading"
          className="mt-2 font-[family-name:var(--font-display)] text-[1.45rem] font-semibold leading-tight text-gw-teal-dark sm:text-3xl"
        >
          Don&apos;t lose another day to pain
        </h2>
        <p className="mx-auto mt-2.5 max-w-lg text-sm font-medium leading-snug text-gw-muted sm:mt-3 sm:max-w-xl sm:text-base">
          {homeOffer.ctaSupporting}
        </p>
        <p className="mx-auto mt-2 max-w-lg text-xs leading-snug text-gw-muted sm:text-sm">
          <span className="md:hidden">
            {homeOffer.reassurance[0]} {homeOffer.reassurance[1]}
          </span>
          <span className="hidden md:inline">
            {homeOffer.reassurance[0]} {homeOffer.reassurance[1]} Call {site.phone} or book — same-day
            when we can.
          </span>
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <a
            href={site.phoneTel}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gw-teal px-8 py-4 text-base font-bold text-white shadow-md transition hover:bg-gw-teal-dark active:bg-gw-teal-dark sm:w-auto"
          >
            Call Now
          </a>
          <Link
            href="/contact/"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-gw-teal bg-gw-white px-8 py-4 text-base font-bold text-gw-teal-dark transition hover:bg-gw-cream active:bg-gw-cream sm:w-auto"
          >
            Book Your First Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
