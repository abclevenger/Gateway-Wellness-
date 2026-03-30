import Link from "next/link";
import { localPageMeta } from "@/lib/page-meta";
import { site } from "@/lib/site";

const lastUpdated = "March 30, 2026";

export const metadata = localPageMeta({
  path: "/terms-and-conditions/",
  title: "Terms & conditions — Gateway Wellness Land O' Lakes",
  description:
    "Terms of use for the Gateway Wellness & Rehab website and services — Land O' Lakes, Florida.",
});

export default function TermsAndConditionsPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 text-sm leading-relaxed text-gw-muted sm:px-6">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
          Terms &amp; conditions
        </h1>
        <p className="mt-2 text-xs font-medium text-gw-ink">Last updated: {lastUpdated}</p>
      </header>

      <p>
        These Terms &amp; Conditions (“Terms”) govern your access to and use of the website
        located at {site.url} (the “Site”) operated by {site.name} (“we,” “us,” or “our”). By
        using the Site, you agree to these Terms. If you do not agree, please do not use the
        Site.
      </p>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          1. Not medical advice
        </h2>
        <p>
          Content on the Site is for general information only. It is{" "}
          <strong className="text-gw-ink">not</strong> medical advice, diagnosis, or treatment.
          Always seek the advice of a qualified health professional with questions about your
          condition. Never disregard professional advice or delay care because of something you
          read here. In an emergency, call 911.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          2. No guarantee of results
        </h2>
        <p>
          Individual outcomes vary. We do not guarantee specific results from any service
          described on the Site. Photos, testimonials, or examples are not promises of your
          experience.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          3. Appointments and communications
        </h2>
        <p>
          Scheduling requests submitted through the Site are not confirmed until we contact you
          or you receive explicit confirmation. Appointment times, providers, and services are
          subject to availability. Missed or late cancellations may be subject to office policies
          communicated at the time of booking.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          4. Insurance and fees
        </h2>
        <p>
          Insurance coverage, copays, deductibles, and prior authorization are determined by
          your plan. Information on the Site about “accepting” insurance is general; your benefits
          are not guaranteed until verified. You are responsible for amounts not covered by
          insurance unless otherwise agreed in writing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          5. Acceptable use
        </h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Use the Site unlawfully or in a way that could harm the practice, patients, or others.</li>
          <li>Attempt to gain unauthorized access to our systems, data, or accounts.</li>
          <li>Scrape, overload, or interfere with the Site’s operation.</li>
          <li>Upload malware or misleading or fraudulent content.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          6. Intellectual property
        </h2>
        <p>
          The Site’s text, graphics, logos, and layout are owned by {site.name} or its licensors
          and are protected by copyright and trademark laws. You may not copy, modify, or
          redistribute Site content for commercial use without our written permission.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          7. Third-party links
        </h2>
        <p>
          The Site may link to third-party websites (for example, social media or health
          resources). We are not responsible for their content or practices. Use of third-party
          sites is at your own risk.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          8. Disclaimer of warranties
        </h2>
        <p>
          THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW,
          WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR
          A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE
          UNINTERRUPTED OR ERROR-FREE.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          9. Limitation of liability
        </h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, {site.name} AND ITS OFFICERS,
          EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR DATA, ARISING FROM YOUR
          USE OF THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL
          LIABILITY FOR CLAIMS RELATING TO THE SITE SHALL NOT EXCEED THE GREATER OF (A) THE
          AMOUNT YOU PAID US FOR SERVICES IN THE TWELVE MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED
          DOLLARS ($100), EXCEPT WHERE PROHIBITED BY LAW.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          10. Governing law
        </h2>
        <p>
          These Terms are governed by the laws of the State of Florida, without regard to
          conflict-of-law rules. You agree that exclusive jurisdiction for disputes related to
          these Terms or the Site lies in the state or federal courts located in Florida, except
          where patient care disputes are governed by other applicable laws or agreements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          11. Changes
        </h2>
        <p>
          We may modify these Terms at any time. We will update the “Last updated” date above.
          Your continued use of the Site after changes constitutes acceptance of the revised
          Terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          12. Contact
        </h2>
        <p>
          Questions about these Terms:{" "}
          <a href={site.phoneTel} className="font-medium text-gw-teal underline">
            {site.phone}
          </a>
          ,{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-gw-teal underline">
            {site.email}
          </a>
          , or {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}.
        </p>
      </section>

      <p className="border-t border-gw-border pt-6 text-xs text-gw-muted">
        Related:{" "}
        <Link href="/privacy-policy/" className="font-medium text-gw-teal underline">
          Privacy policy
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
