import { ReputationHubWidget } from "@/components/ReputationHubWidget";
import { testimonials } from "@/lib/testimonials";
import { localPageMeta } from "@/lib/page-meta";

export const metadata = localPageMeta({
  path: "/testimonials/",
  title: "Patient reviews — Land O' Lakes chiropractor & PT",
  description:
    "Patient testimonials for Gateway Wellness & Rehab: chiropractic, physical therapy, massage, and medical care on Land O' Lakes Blvd.",
});

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:max-w-4xl">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
        Testimonials
      </h1>
      <p className="mt-3 text-sm text-gw-muted">
        Experiences shared by patients; individual results may vary.
      </p>

      <section className="mt-10" aria-labelledby="reputation-widget-heading">
        <h2
          id="reputation-widget-heading"
          className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-teal-dark"
        >
          Recent reviews
        </h2>
        <p className="mt-2 text-xs text-gw-muted">
          Pulled from our review partners; may differ from handwritten notes below.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-gw-border bg-gw-white shadow-sm">
          <ReputationHubWidget />
        </div>
      </section>

      <ul className="mt-14 space-y-8">
        {testimonials.map((t) => (
          <li
            key={t.author}
            className="rounded-2xl border border-gw-border bg-gw-white p-6 shadow-sm"
          >
            <blockquote className="text-sm leading-relaxed text-gw-muted">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-gw-teal-dark">— {t.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
