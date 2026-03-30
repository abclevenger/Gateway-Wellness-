import Link from "next/link";
import { localPageMeta } from "@/lib/page-meta";
import { site } from "@/lib/site";

const lastUpdated = "March 30, 2026";

export const metadata = localPageMeta({
  path: "/accessibility-policy/",
  title: "Accessibility policy — Gateway Wellness Land O' Lakes",
  description:
    "Digital accessibility commitment and how to request help for Gateway Wellness & Rehab’s website and services.",
});

export default function AccessibilityPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 px-4 py-12 text-sm leading-relaxed text-gw-muted sm:px-6">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
          Accessibility policy
        </h1>
        <p className="mt-2 text-xs font-medium text-gw-ink">Last updated: {lastUpdated}</p>
      </header>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Our commitment
        </h2>
        <p>
          {site.name} is committed to making our website and patient communications more
          accessible to people with disabilities. We aim to conform to the{" "}
          <strong className="text-gw-ink">Web Content Accessibility Guidelines (WCAG) 2.1</strong>{" "}
          at <strong className="text-gw-ink">Level AA</strong> where reasonably achievable, and
          we continue to improve structure, contrast, keyboard use, and form labels over time.
        </p>
        <p>
          Accessibility is an ongoing effort. New content or third-party tools may introduce
          issues we work to correct when identified.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Assistive technology
        </h2>
        <p>
          We design pages to work with common browser zoom, keyboard navigation, and many screen
          readers. For the best experience, use an up-to-date browser (for example, current
          versions of Chrome, Edge, Firefox, or Safari).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Third-party content
        </h2>
        <p>
          Some features (such as embedded maps, scheduling tools, or social links) are provided
          by third parties. We do not control their accessibility fully. If you have difficulty
          with embedded content, contact us and we will try to provide the same information
          another way (for example, by phone or email).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Clinic visits and reasonable accommodations
        </h2>
        <p>
          If you need a reasonable accommodation for an in-person visit (communication support,
          physical access, or other needs), please call{" "}
          <a href={site.phoneTel} className="font-medium text-gw-teal underline">
            {site.phone}
          </a>{" "}
          in advance when possible so we can assist you.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Feedback
        </h2>
        <p>
          If you encounter a barrier on our website or have a suggestion to improve
          accessibility, please contact us. Include the page address (URL) and a short
          description of the issue if you can.
        </p>
        <ul className="list-none space-y-2 pl-0">
          <li>
            Phone:{" "}
            <a href={site.phoneTel} className="font-medium text-gw-teal underline">
              {site.phone}
            </a>
          </li>
          <li>
            Email:{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-gw-teal underline">
              {site.email}
            </a>
          </li>
          <li>
            Mail: {site.address.street}, {site.address.city}, {site.address.state}{" "}
            {site.address.zip}
          </li>
        </ul>
        <p>
          You may also use our{" "}
          <Link href="/contact/" className="font-medium text-gw-teal underline">
            contact page
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
          Formal complaints
        </h2>
        <p>
          If you believe we have not adequately responded to an accessibility concern, you may
          contact the U.S. Department of Justice Civil Rights Division or other agencies that
          enforce applicable accessibility laws. We welcome the chance to resolve issues with you
          directly first.
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
        <Link href="/a2p-policy/" className="font-medium text-gw-teal underline">
          A2P &amp; SMS policy
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
