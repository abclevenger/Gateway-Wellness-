import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-gw-teal">
        Page not found
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-gw-teal-dark sm:text-4xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-gw-muted">
        The link may be outdated, or the page may have moved. Use the menu above or try one
        of these links.
      </p>
      <ul className="mt-8 flex flex-col gap-3 text-sm font-semibold">
        <li>
          <Link
            href="/"
            className="inline-flex w-full justify-center rounded-full bg-gw-teal px-6 py-3 text-white shadow-sm transition hover:bg-gw-teal-dark"
          >
            Back to home
          </Link>
        </li>
        <li>
          <Link
            href="/contact/"
            className="inline-flex w-full justify-center rounded-full border border-gw-border bg-gw-white px-6 py-3 text-gw-ink shadow-sm transition hover:bg-gw-cream"
          >
            Contact &amp; appointments
          </Link>
        </li>
        <li>
          <Link
            href="/online-scheduling/"
            className="inline-flex w-full justify-center rounded-full border border-gw-border bg-gw-white px-6 py-3 text-gw-ink shadow-sm transition hover:bg-gw-cream"
          >
            Online scheduling
          </Link>
        </li>
        <li>
          <a
            href={site.phoneTel}
            className="inline-flex w-full justify-center rounded-full border border-gw-teal/40 px-6 py-3 text-gw-teal-dark transition hover:bg-gw-teal/5"
          >
            Call {site.phone}
          </a>
        </li>
      </ul>
    </div>
  );
}
