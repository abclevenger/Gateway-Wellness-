import Link from "next/link";
import { ReputationHubWidget } from "@/components/ReputationHubWidget";
import { homeFeaturedTestimonials } from "@/lib/home-featured-testimonials";

export function HomeFeaturedTestimonials() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-[4.75rem] sm:px-6 sm:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-gw-teal">Locals say</p>
          <h2
            id="testimonials-heading"
            className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl"
          >
            <span className="md:hidden">Recent wins from our patients</span>
            <span className="hidden md:inline">Pasco &amp; Land O&apos; Lakes patients speak up</span>
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-snug text-gw-muted sm:text-base">
            <span className="md:hidden">Your results may differ — we tailor care.</span>
            <span className="hidden md:inline">
              Outcomes vary by person; we&apos;ll walk through what&apos;s realistic at your visit.
            </span>
          </p>
        </div>
        <Link
          href="/testimonials/"
          className="inline-flex min-h-[3.25rem] w-full shrink-0 items-center justify-center rounded-full border-2 border-gw-teal/50 px-6 text-base font-bold text-gw-teal-dark transition hover:bg-gw-teal/10 active:bg-gw-teal/15 sm:min-h-0 sm:w-auto sm:py-2.5 sm:text-sm"
        >
          See why locals trust us
        </Link>
      </div>
      <ul className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-5">
        {homeFeaturedTestimonials.map((t) => (
          <li
            key={t.author}
            className="flex flex-col rounded-2xl border border-gw-border border-l-4 border-l-gw-teal bg-gw-white p-6 shadow-sm sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-gw-muted">{t.outcome}</p>
            <blockquote className="mt-2 flex-1 text-base leading-relaxed text-gw-ink sm:text-sm">
              <span className="text-2xl leading-none text-gw-teal/35" aria-hidden>
                &ldquo;
              </span>
              {t.excerpt}
              <span className="text-gw-teal/35" aria-hidden>
                &rdquo;
              </span>
            </blockquote>
            <footer className="mt-4 border-t border-gw-border pt-4 text-sm font-semibold text-gw-teal-dark">
              — {t.author}
            </footer>
          </li>
        ))}
      </ul>

      <div className="mt-12 hidden border-t border-gw-border pt-12 md:mt-14 md:block md:pt-14">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gw-teal-dark">
          More reviews (live feed)
        </h3>
        <p className="mt-1.5 text-xs text-gw-muted">From our review partner — not medical advice.</p>
        <div className="mt-3 overflow-hidden rounded-2xl border border-gw-border bg-gw-white shadow-sm">
          <ReputationHubWidget variant="compact" />
        </div>
      </div>
    </section>
  );
}
