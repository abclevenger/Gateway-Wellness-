import Link from "next/link";
import { localPageMeta } from "@/lib/page-meta";
import { site } from "@/lib/site";

const lastUpdated = "March 30, 2026";

export const metadata = localPageMeta({
  path: "/a2p-policy/",
  title: "A2P & SMS policy — Gateway Wellness Land O' Lakes",
  description:
    "Application-to-person (A2P) and 10DLC SMS terms: consent, opt-out, and messaging practices for Gateway Wellness & Rehab.",
});

export default function A2pPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 text-sm leading-relaxed text-gw-muted sm:px-6">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
          A2P &amp; SMS policy
        </h1>
        <p className="mt-2 text-xs font-medium text-gw-ink">Last updated: {lastUpdated}</p>
        <p className="mt-4 text-gw-muted">
          This policy describes how {site.name} uses{" "}
          <strong className="text-gw-ink">application-to-person (A2P)</strong> text messaging,
          including registration under U.S. carrier{" "}
          <strong className="text-gw-ink">10DLC</strong> frameworks, to communicate with
          patients and prospective patients who have agreed to receive SMS.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Who we are
        </h2>
        <p>
          {site.name}, {site.address.street}, {site.address.city}, {site.address.state}{" "}
          {site.address.zip}. Primary contact:{" "}
          <a href={site.phoneTel} className="font-medium text-gw-teal underline">
            {site.phone}
          </a>
          ,{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-gw-teal underline">
            {site.email}
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Consent (opt-in)
        </h2>
        <p>
          We send SMS only where you have provided{" "}
          <strong className="text-gw-ink">express consent</strong> to receive text messages from
          the practice, in line with applicable law and carrier rules. Consent may be collected
          through a signed form, our website, verbally with documentation, or another clear
          method we describe at the time you opt in.
        </p>
        <p>
          <strong className="text-gw-ink">We do not sell</strong> your phone number or use SMS
          lists for unrelated third-party marketing. See our{" "}
          <Link href="/privacy-policy/" className="font-medium text-gw-teal underline">
            privacy policy
          </Link>{" "}
          for how we handle personal information.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Message types and frequency
        </h2>
        <p>Messages may include, for example:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Appointment reminders, confirmations, or rescheduling notices</li>
          <li>Requests to complete intake or follow-up related to your care</li>
          <li>Important office updates that affect your visit (e.g., closures), when applicable</li>
        </ul>
        <p>
          <strong className="text-gw-ink">Frequency</strong> depends on your care and scheduling.
          Most patients receive only occasional messages tied to appointments.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Costs and delivery
        </h2>
        <p>
          <strong className="text-gw-ink">Message and data rates may apply</strong> according to
          your mobile carrier plan. Carriers are not liable for delayed or undelivered messages.
          Delivery is not guaranteed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Opt-out and help
        </h2>
        <p>
          You may <strong className="text-gw-ink">opt out</strong> of SMS at any time by replying{" "}
          <strong className="text-gw-ink">STOP</strong> to a message from us. After you opt out,
          you may receive a final confirmation text. To receive messages again, you will need to
          provide consent again through an approved process.
        </p>
        <p>
          For help with messaging, reply <strong className="text-gw-ink">HELP</strong> or call{" "}
          <a href={site.phoneTel} className="font-medium text-gw-teal underline">
            {site.phone}
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Age and authorized contacts
        </h2>
        <p>
          SMS programs are intended for users who are the patient or an authorized contact (for
          example, a parent or guardian). Do not enroll a number you are not authorized to use.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Changes
        </h2>
        <p>
          We may update this A2P policy to reflect carrier requirements or our practices. The
          “Last updated” date will change when we do. Your continued participation after updates
          may require renewed consent where required.
        </p>
      </section>

      <p className="border-t border-gw-border pt-6 text-xs text-gw-muted">
        Related:{" "}
        <Link href="/privacy-policy/" className="font-medium text-gw-teal underline">
          Privacy policy
        </Link>
        {" · "}
        <Link href="/terms-and-conditions/" className="font-medium text-gw-teal underline">
          Terms &amp; conditions
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
