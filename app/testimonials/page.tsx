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
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
        Testimonials
      </h1>
      <p className="mt-3 text-sm text-gw-muted">
        Experiences shared by patients; individual results may vary.
      </p>
      <ul className="mt-10 space-y-8">
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
