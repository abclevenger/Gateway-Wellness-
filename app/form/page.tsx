import { AppointmentForm } from "@/components/AppointmentForm";
import { localPageMeta } from "@/lib/page-meta";

export const metadata = localPageMeta({
  path: "/form/",
  title: "Contact form — Land O' Lakes wellness clinic",
  description: "Submit a general inquiry to Gateway Wellness & Rehab on Land O' Lakes Blvd, Pasco County.",
});

export default function FormPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
        Form
      </h1>
      <p className="mt-2 text-sm text-gw-muted">
        Send us a message and we will respond as soon as possible during business hours.
      </p>
      <div className="mt-8">
        <AppointmentForm variant="general" heading="Contact the office" />
      </div>
    </div>
  );
}
