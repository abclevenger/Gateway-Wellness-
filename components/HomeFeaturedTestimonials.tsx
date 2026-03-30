import Link from "next/link";
import { ReputationHubWidget } from "@/components/ReputationHubWidget";
import { homeFeaturedTestimonials } from "@/lib/home-featured-testimonials";

export function HomeFeaturedTestimonials() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2
            id="testimonials-heading"
            className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl"
          >
            Reviews from Pasco patients
          </h2>
          <p className="mt-2 max-w-md text-sm leading-snug text-gw-muted sm:text-base">
            Pain, vertigo, post-accident care — unedited snippets. Results vary; your visit is
            yours.
          </p>
        </div>
        <Link
          href="/testimonials/"
          className="shrink-0 rounded-full border border-gw-teal/40 px-5 py-2.5 text-sm font-semibold text-gw-teal-dark transition hover:bg-gw-teal/10"
        >
          All reviews
        </Link>
      </div>
      <ul className="mt-10 grid gap-6 lg:grid-cols-3">
        {homeFeaturedTestimonials.map((t) => (
          <li
            key={t.author}
            className="flex flex-col rounded-2xl border border-gw-border bg-gw-white p-6 shadow-sm"
          >
            <blockquote className="flex-1 text-sm leading-relaxed text-gw-ink">
              <span className="text-3xl leading-none text-gw-teal/40" aria-hidden>
                &ldquo;
              </span>
              {t.excerpt}
              <span className="text-gw-teal/40" aria-hidden>
                &rdquo;
              </span>
            </blockquote>
            <footer className="mt-4 border-t border-gw-border pt-4 text-sm font-semibold text-gw-teal-dark">
              — {t.author}
            </footer>
          </li>
        ))}
      </ul>

      <div className="mt-12 border-t border-gw-border pt-12">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gw-teal-dark">
          Live review feed
        </h3>
        <p className="mt-1 text-xs text-gw-muted">
          Updated through our review partner; not a substitute for medical advice.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-gw-border bg-gw-white shadow-sm">
          <ReputationHubWidget variant="compact" />
        </div>
      </div>
    </section>
  );
}
