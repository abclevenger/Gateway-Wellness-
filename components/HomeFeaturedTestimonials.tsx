import Link from "next/link";
import { ReputationHubWidget } from "@/components/ReputationHubWidget";
import { homeFeaturedTestimonials } from "@/lib/home-featured-testimonials";

export function HomeFeaturedTestimonials() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h2
            id="testimonials-heading"
            className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl"
          >
            Reviews from Pasco patients
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-gw-muted sm:mt-2 sm:text-base">
            <span className="md:hidden">Real patient feedback. Results vary.</span>
            <span className="hidden md:inline">
              Pain, vertigo, post-accident care — unedited snippets. Results vary; your visit is
              yours.
            </span>
          </p>
        </div>
        <Link
          href="/testimonials/"
          className="inline-flex min-h-[3.25rem] w-full shrink-0 items-center justify-center rounded-full border-2 border-gw-teal/50 px-6 text-base font-bold text-gw-teal-dark transition hover:bg-gw-teal/10 active:bg-gw-teal/15 sm:min-h-0 sm:w-auto sm:py-2.5 sm:text-sm"
        >
          All reviews
        </Link>
      </div>
      <ul className="mt-12 grid gap-7 lg:grid-cols-3 lg:gap-6">
        {homeFeaturedTestimonials.map((t) => (
          <li
            key={t.author}
            className="flex flex-col rounded-2xl border border-gw-border bg-gw-white p-6 pb-7 shadow-sm sm:p-7"
          >
            <blockquote className="flex-1 text-base leading-relaxed text-gw-ink sm:text-sm">
              <span className="text-3xl leading-none text-gw-teal/40" aria-hidden>
                &ldquo;
              </span>
              {t.excerpt}
              <span className="text-gw-teal/40" aria-hidden>
                &rdquo;
              </span>
            </blockquote>
            <footer className="mt-5 border-t border-gw-border pt-5 text-sm font-semibold text-gw-teal-dark sm:mt-4 sm:pt-4">
              — {t.author}
            </footer>
          </li>
        ))}
      </ul>

      <div className="mt-14 border-t border-gw-border pt-14 sm:mt-12 sm:pt-12">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gw-teal-dark">
          Live review feed
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-gw-muted sm:mt-1">
          <span className="md:hidden">From our review partner. Not medical advice.</span>
          <span className="hidden md:inline">
            Updated through our review partner; not a substitute for medical advice.
          </span>
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-gw-border bg-gw-white shadow-sm">
          <ReputationHubWidget variant="compact" />
        </div>
      </div>
    </section>
  );
}
