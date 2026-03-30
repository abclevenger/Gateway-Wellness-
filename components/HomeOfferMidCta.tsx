import Link from "next/link";
import { homeOffer } from "@/lib/home-offer";
import { site } from "@/lib/site";

export function HomeOfferMidCta() {
  return (
    <section
      className="border-y border-gw-border bg-gw-cream/50"
      aria-labelledby="mid-offer-heading"
    >
      <div className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 sm:py-12">
        <p className="text-xs font-bold uppercase tracking-widest text-gw-teal">
          {homeOffer.headline}
        </p>
        <h2
          id="mid-offer-heading"
          className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-gw-teal-dark sm:text-2xl"
        >
          Know your coverage before you schedule
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-snug text-gw-muted sm:text-base">
          {homeOffer.ctaSupporting}
        </p>
        <p className="mx-auto mt-3 hidden max-w-lg text-xs text-gw-muted sm:block sm:text-sm">
          {homeOffer.reassurance[0]} {homeOffer.reassurance[1]}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:mx-auto sm:max-w-xl sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
          <a
            href={site.phoneTel}
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-gw-teal px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-gw-teal-dark active:bg-gw-teal-dark sm:min-w-[10rem] sm:flex-none"
          >
            Call Now
          </a>
          <Link
            href="/contact/"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border-2 border-gw-teal bg-gw-white px-6 py-3 text-base font-bold text-gw-teal-dark transition hover:bg-gw-cream active:bg-gw-cream sm:min-w-[10rem] sm:flex-none"
          >
            Check My Insurance
          </Link>
          <Link
            href="/contact/"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-gw-border bg-gw-white px-6 py-3 text-base font-bold text-gw-teal-dark transition hover:border-gw-teal/40 hover:bg-gw-cream/80 sm:min-w-[10rem] sm:flex-none"
          >
            Book Your First Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
