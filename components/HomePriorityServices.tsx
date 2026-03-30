import Link from "next/link";
import { homePriorityServices } from "@/lib/home-services";
import { localSeo } from "@/lib/local-seo";
import { site } from "@/lib/site";

export function HomePriorityServices() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="services-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl"
        >
          What we help with
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-snug text-gw-muted sm:text-base">
          {site.name}: chiropractic, PT, massage, injury care — {localSeo.cityState}. Pick a
          row, read more, or book straight in.
        </p>
      </div>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {homePriorityServices.map((s) => (
          <li
            key={s.title}
            className="flex flex-col rounded-2xl border border-gw-border bg-gw-white p-6 shadow-sm transition hover:border-gw-teal/25 hover:shadow-md"
          >
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-ink">
              {s.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-gw-muted">{s.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href={s.learnHref}
                className="inline-flex min-h-11 items-center rounded-full border border-gw-border px-4 py-2 text-sm font-semibold text-gw-teal-dark transition hover:bg-gw-cream"
              >
                How we treat this
              </Link>
              <Link
                href={s.bookHref}
                className="inline-flex min-h-11 items-center rounded-full bg-gw-teal px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gw-teal-dark"
              >
                Book a visit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
