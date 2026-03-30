import Link from "next/link";
import { localPageMeta } from "@/lib/page-meta";
import { site } from "@/lib/site";

const lastUpdated = "March 30, 2026";

export const metadata = localPageMeta({
  path: "/privacy-policy/",
  title: "Privacy policy — Gateway Wellness Land O' Lakes",
  description:
    "How Gateway Wellness & Rehab collects, uses, and protects your information — website, appointments, and patient care in Land O' Lakes, Florida.",
});

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 text-sm leading-relaxed text-gw-muted sm:px-6">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
          Privacy policy
        </h1>
        <p className="mt-2 text-xs font-medium text-gw-ink">Last updated: {lastUpdated}</p>
      </header>

      <p>
        {site.name} (“we,” “us,” or “our”) respects your privacy. This policy describes how we
        handle information when you use our website, contact us, or receive care at our clinic
        in {site.address.city}, {site.address.state}. For rights and protections related to
        health information we create or receive as a covered entity, our Notice of Privacy
        Practices (NPP) provided at the office governs those disclosures as required by HIPAA.
      </p>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Information we collect
        </h2>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-gw-ink">Contact and scheduling:</strong> name, phone, email,
            messages you send through forms, and appointment preferences.
          </li>
          <li>
            <strong className="text-gw-ink">Billing:</strong> billing address, insurance
            information, and payment-related details as needed to process claims or payments.
          </li>
          <li>
            <strong className="text-gw-ink">Health information:</strong> symptoms, history,
            examination findings, imaging, treatment notes, and other information necessary to
            provide care — collected and maintained under applicable health privacy laws.
          </li>
          <li>
            <strong className="text-gw-ink">Website technical data:</strong> IP address, browser
            type, device type, and similar data collected automatically by hosting or analytics
            tools, where used.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          How we use information
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>To provide, coordinate, and bill for medical and wellness services.</li>
          <li>To respond to inquiries submitted through the website, phone, or email.</li>
          <li>To verify insurance benefits and meet legal, regulatory, and payer requirements.</li>
          <li>
            To support operational needs such as appointment reminders, including SMS where you
            have opted in and where allowed by law and carrier rules.
          </li>
          <li>To improve our website and communications, using aggregated or de-identified data where possible.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Sharing and selling
        </h2>
        <p>
          Information you provide to {site.name} is{" "}
          <strong className="text-gw-ink">owned and controlled by the practice</strong> for
          treatment, payment, and health care operations as permitted by law. We do{" "}
          <strong className="text-gw-ink">not</strong> sell your personal information and do{" "}
          <strong className="text-gw-ink">not</strong> rent or share it with third parties for
          their independent marketing.
        </p>
        <p>
          We may share information with service providers who assist us (for example, electronic
          health records, billing, secure email, or website form delivery) only as needed and
          under appropriate safeguards. We may disclose information when required by law or to
          protect safety.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Website forms and messaging
        </h2>
        <p>
          Do not use website forms for urgent medical emergencies — call 911. Website
          submissions are not encrypted end-to-end beyond standard HTTPS; avoid sending highly
          sensitive details in free-text fields when possible. We use reasonable measures to
          protect information in transit and at rest.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Cookies and analytics
        </h2>
        <p>
          Our site may use cookies or similar technologies for basic functionality or analytics.
          You can control cookies through your browser settings. If we use third-party analytics,
          those providers process data under their own policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Children
        </h2>
        <p>
          Our website is not directed to children under 13 to collect their data online without
          parental consent. Pediatric care may be arranged through parents or guardians; contact
          us with questions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Your choices and contact
        </h2>
        <p>
          You may request access, amendment, or an accounting of certain disclosures as described
          in our Notice of Privacy Practices. For website privacy questions or to update contact
          preferences, reach us at{" "}
          <a href={site.phoneTel} className="font-medium text-gw-teal underline">
            {site.phone}
          </a>{" "}
          or{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-gw-teal underline">
            {site.email}
          </a>
          , or write to us at {site.address.street}, {site.address.city}, {site.address.state}{" "}
          {site.address.zip}.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Changes
        </h2>
        <p>
          We may update this policy from time to time. The “Last updated” date at the top will
          change when we do. Continued use of the website after changes constitutes acceptance of
          the updated policy where permitted by law.
        </p>
      </section>

      <p className="border-t border-gw-border pt-6 text-xs text-gw-muted">
        Related:{" "}
        <Link href="/terms-and-conditions/" className="font-medium text-gw-teal underline">
          Terms &amp; conditions
        </Link>
        {" · "}
        <Link href="/a2p-policy/" className="font-medium text-gw-teal underline">
          A2P &amp; SMS policy
        </Link>
        {" · "}
        <Link href="/accessibility-policy/" className="font-medium text-gw-teal underline">
          Accessibility policy
        </Link>
        .
      </p>

      <p>
        <Link href="/" className="font-medium text-gw-teal underline">
          Return home
        </Link>
      </p>
    </article>
  );
}
