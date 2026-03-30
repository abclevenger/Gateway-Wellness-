import { FaqJsonLd } from "@/components/FaqJsonLd";
import { faqItems } from "@/lib/faq";
import { localPageMeta } from "@/lib/page-meta";

export const metadata = localPageMeta({
  path: "/faq/",
  title: "FAQ — appointments, insurance & care in Land O' Lakes",
  description:
    "Frequently asked questions about chiropractic, physical therapy, massage, insurance, first visits, and our Land O' Lakes clinic.",
});

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <FaqJsonLd items={faqItems} />
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
        Frequently asked questions
      </h1>
      <p className="mt-3 text-sm text-gw-muted">
        Answers about our Land O&apos; Lakes office, insurance, chiropractic, physical therapy,
        massage, and more. Call us if you don&apos;t see your question listed.
      </p>
      <dl className="mt-10 space-y-8">
        {faqItems.map((item) => (
          <div
            key={item.q}
            className="scroll-mt-24 rounded-2xl border border-gw-border bg-gw-white p-6 shadow-sm"
          >
            <dt className="font-[family-name:var(--font-display)] text-lg font-semibold text-gw-ink">
              {item.q}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-gw-muted">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
