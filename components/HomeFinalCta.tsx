import Link from "next/link";
import { site } from "@/lib/site";

export function HomeFinalCta() {
  return (
    <section
      className="border-y border-gw-border bg-gw-cream/60"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 sm:py-16">
        <h2
          id="final-cta-heading"
          className="font-[family-name:var(--font-display)] text-[1.375rem] font-semibold leading-tight text-gw-teal-dark sm:text-3xl"
        >
          Ready to Feel Better?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gw-muted sm:mt-4 sm:max-w-lg sm:text-lg sm:leading-snug">
          <span className="md:hidden">Book your first visit and start feeling better.</span>
          <span className="hidden md:inline">
            Book your first visit today and start your recovery.
          </span>
        </p>
        {/* Mobile: Call first + primary; sm+: Book left (primary), Call right */}
        <div className="mt-10 flex flex-col-reverse items-stretch justify-center gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/contact/"
            className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-gw-teal bg-gw-white px-8 py-4 text-base font-bold text-gw-teal-dark transition hover:bg-gw-cream active:bg-gw-cream sm:min-h-12 sm:border-0 sm:bg-gw-teal sm:py-3.5 sm:text-white sm:shadow-md sm:hover:bg-gw-teal-dark"
          >
            Book Appointment
          </Link>
          <a
            href={site.phoneTel}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-gw-teal px-8 py-4 text-base font-bold text-white shadow-md transition hover:bg-gw-teal-dark active:bg-gw-teal-dark sm:min-h-12 sm:border-2 sm:border-gw-teal sm:bg-white sm:py-3.5 sm:font-semibold sm:text-gw-teal-dark sm:shadow-none sm:hover:bg-gw-white/90"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
