import Link from "next/link";
import { homePriorityServices } from "@/lib/home-services";
import { localSeo } from "@/lib/local-seo";
import { site } from "@/lib/site";

export function HomePriorityServices() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-[4.75rem] sm:px-6 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="services-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl"
        >
          Relief for back, neck &amp; injury — fast to scan
        </h2>
        <div className="mx-auto mt-3 max-w-xl md:hidden">
          <ul className="list-none space-y-1.5 text-left text-sm leading-snug text-gw-muted">
            <li className="flex gap-2">
              <span className="font-bold text-gw-teal" aria-hidden>
                ·
              </span>
              Outcome-focused titles — pick what matches you
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-gw-teal" aria-hidden>
                ·
              </span>
              {site.name} · {localSeo.cityState}
            </li>
          </ul>
        </div>
        <p className="mx-auto mt-3 hidden max-w-2xl text-center text-base leading-snug text-gw-muted md:block">
          Chiropractic, physical therapy, massage, and injury recovery — one address in{" "}
          {localSeo.cityState}.
        </p>
      </div>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {homePriorityServices.map((s) => (
          <li
            key={s.title}
            className="flex flex-col rounded-2xl border border-gw-border bg-gw-white p-6 shadow-sm transition hover:border-gw-teal/25 hover:shadow-md sm:p-7"
          >
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gw-ink sm:text-xl">
              {s.title}
            </h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-gw-muted line-clamp-4 sm:mt-3 md:line-clamp-none">
              {s.description}
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                href={s.learnHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gw-border px-5 py-3 text-sm font-bold text-gw-teal-dark transition hover:bg-gw-cream active:bg-gw-cream sm:min-h-11 sm:justify-start sm:py-2.5"
              >
                Start Your Recovery
              </Link>
              <Link
                href={s.bookHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gw-teal px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-gw-teal-dark active:bg-gw-teal-dark sm:min-h-11 sm:py-2.5"
              >
                Book Your First Visit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
