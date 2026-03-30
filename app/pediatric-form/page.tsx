import { AppointmentForm } from "@/components/AppointmentForm";
import { localPageMeta } from "@/lib/page-meta";

export const metadata = localPageMeta({
  path: "/pediatric-form/",
  title: "Pediatric chiropractic & care — Land O' Lakes, FL",
  description:
    "Pediatric intake form for Gateway Wellness & Rehab — family and pediatric chiropractic and therapy in Pasco County.",
});

export default function PediatricFormPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
        Pediatric form
      </h1>
      <p className="mt-2 text-sm text-gw-muted">
        Tell us about your child and how we can help. A parent or guardian should complete
        this form.
      </p>
      <div className="mt-8">
        <AppointmentForm
          variant="pediatric"
          heading="Pediatric inquiry"
          intro="We will review your submission and contact you by the end of the next working day when possible."
        />
      </div>
    </div>
  );
}
