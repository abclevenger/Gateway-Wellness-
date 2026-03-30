import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gw-border bg-gw-teal-dark pb-24 pt-12 text-gw-cream md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-white">
            Contact Info
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </li>
            <li>
              <span className="text-gw-cream/80">Phone: </span>
              <a href={site.phoneTel} className="underline underline-offset-2">
                {site.phone}
              </a>
            </li>
            <li>
              <span className="text-gw-cream/80">Emergency: </span>911
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-white">
            Clinic Hours
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <li key={h.label}>
                <span className="font-medium text-gw-white">{h.label}:</span>{" "}
                {h.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm leading-relaxed text-gw-cream/90">
            To ensure texting registration can be completed, phone providers require a
            compliant Privacy Policy on this site. Our policy explains what we collect,
            how we use it, and how it is shared. Information you provide to {site.name}{" "}
            is owned by the practice and is not sold, rented, or shared with third parties
            for their marketing.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
            <Link
              href="/privacy-policy/"
              className="text-gw-accent underline underline-offset-2"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms-and-conditions/"
              className="text-gw-accent underline underline-offset-2"
            >
              Terms &amp; conditions
            </Link>
            <Link
              href="/a2p-policy/"
              className="text-gw-accent underline underline-offset-2"
            >
              A2P &amp; SMS
            </Link>
            <Link
              href="/accessibility-policy/"
              className="text-gw-accent underline underline-offset-2"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-wider text-gw-cream/70">
            Follow us
          </p>
          <SocialLinks />
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gw-cream/70">
        © {year} gateway wellness &amp; rehab. All rights reserved.
        <span className="mx-2">·</span>
        <span>Made with care for patients in Pasco County and beyond.</span>
      </div>
    </footer>
  );
}
