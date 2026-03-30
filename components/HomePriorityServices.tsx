import Link from "next/link";
import { homePriorityServices } from "@/lib/home-services";
import { localSeo } from "@/lib/local-seo";
import { site } from "@/lib/site";

export function HomePriorityServices() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="services-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl"
        >
          What we help with
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-gw-muted sm:mt-2 sm:text-base">
          <span className="md:hidden">
            Chiro, PT, massage &amp; injury care in {localSeo.cityState}.
            <span className="mt-1 block text-gw-muted">Tap a service or book a visit.</span>
          </span>
          <span className="hidden md:inline">
            {site.name}: chiropractic, PT, massage, injury care — {localSeo.cityState}. Pick a
            row, read more, or book straight in.
          </span>
        </p>
      </div>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {homePriorityServices.map((s) => (
          <li
            key={s.title}
            className="flex flex-col rounded-2xl border border-gw-border bg-gw-white p-6 shadow-sm transition hover:border-gw-teal/25 hover:shadow-md sm:p-7"
          >
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-ink">
              {s.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-gw-muted line-clamp-3 sm:mt-2 md:line-clamp-none">
              {s.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:flex-wrap">
              <Link
                href={s.learnHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gw-border px-5 py-3 text-sm font-semibold text-gw-teal-dark transition hover:bg-gw-cream active:bg-gw-cream sm:min-h-11 sm:justify-start sm:py-2.5"
              >
                How we treat this
              </Link>
              <Link
                href={s.bookHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gw-teal px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-gw-teal-dark active:bg-gw-teal-dark sm:min-h-11 sm:py-2.5"
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
