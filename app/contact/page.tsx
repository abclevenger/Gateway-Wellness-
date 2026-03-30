import Link from "next/link";
import { AppointmentForm } from "@/components/AppointmentForm";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { localPageMeta } from "@/lib/page-meta";
import { googleMapsDirectionsUrl, site } from "@/lib/site";

export const metadata = localPageMeta({
  path: "/contact/",
  title: "Contact & appointments — Land O' Lakes Blvd",
  description: `Book an appointment or reach Gateway Wellness & Rehab in Land O' Lakes, FL. Phone ${site.phone}. Same-day visits often available.`,
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
        Contact us
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-gw-muted">
        To schedule an appointment, call our office, book online, or send a request using
        the form below. We usually respond to messages within one business day. For urgent
        needs, call{" "}
        <a href={site.phoneTel} className="font-medium text-gw-teal underline">
          {site.phone}
        </a>
        .
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <a
          href={site.phoneTel}
          className="flex flex-col items-center justify-center rounded-2xl border border-gw-border bg-gw-white px-4 py-4 text-center shadow-sm transition hover:border-gw-teal/40 hover:bg-gw-cream/50"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-gw-muted">
            Call us
          </span>
          <span className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-gw-teal-dark">
            {site.phone}
          </span>
        </a>
        <Link
          href="/online-scheduling/"
          className="flex flex-col items-center justify-center rounded-2xl border border-gw-teal/25 bg-gw-teal/5 px-4 py-4 text-center shadow-sm transition hover:bg-gw-teal/10"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-gw-muted">
            Self-serve
          </span>
          <span className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-gw-teal-dark">
            Book online
          </span>
        </Link>
        <a
          href={googleMapsDirectionsUrl()}
          className="flex flex-col items-center justify-center rounded-2xl border border-gw-border bg-gw-white px-4 py-4 text-center shadow-sm transition hover:border-gw-teal/40 hover:bg-gw-cream/50"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-gw-muted">
            Driving
          </span>
          <span className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-gw-teal-dark">
            Directions
          </span>
        </a>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-gw-border bg-gw-white p-6 shadow-sm">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-ink">
              Our address
            </h2>
            <p className="mt-2 text-sm text-gw-muted">
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-ink">
              Office hours
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-gw-muted">
              {site.hours.map((h) => (
                <li key={h.label}>
                  <span className="font-medium text-gw-ink">{h.label}:</span> {h.value}
                </li>
              ))}
            </ul>
          </div>
          <ul className="space-y-2 text-sm text-gw-muted">
            <li>
              Reception:{" "}
              <a href={site.phoneTel} className="font-medium text-gw-teal underline">
                {site.phone}
              </a>
            </li>
            <li>Emergencies: 911</li>
            <li>
              Email:{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-gw-teal underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <AppointmentForm
          variant="contact"
          heading="Request an appointment"
          intro="Fill in the form below and we will get back to you to confirm your visit — typically within one business day."
        />
      </div>

      <section className="mt-14 border-t border-gw-border pt-12" aria-labelledby="map-heading">
        <h2
          id="map-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark"
        >
          Map &amp; directions
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-gw-muted">
          We are on Land O&apos; Lakes Blvd in Pasco County. Parking is available at the clinic.
        </p>
        <div className="mt-6">
          <GoogleMapEmbed />
        </div>
      </section>
    </div>
  );
}
