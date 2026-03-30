import { localSeo } from "@/lib/local-seo";

const steps = [
  {
    title: "Book Your First Visit",
    body: "Call or book online. Same-day when we have openings.",
  },
  {
    title: "Get evaluated",
    body: "We connect your pain, movement, and history to what's likely causing it.",
  },
  {
    title: "Start your recovery plan",
    body: "Chiro, PT, rehab — adjusted as you improve. One team tracking progress.",
  },
] as const;

export function HomeWhatToExpect() {
  return (
    <section
      className="border-y border-gw-border bg-gw-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-[4.75rem] sm:px-6 sm:py-20">
        <h2
          id="how-it-works-heading"
          className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl"
        >
          What to Expect
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-snug text-gw-muted sm:mt-3 sm:text-base">
          <span className="md:hidden">Three steps. No mystery.</span>
          <span className="hidden md:inline">
            First contact to active recovery — {localSeo.cityState}.
          </span>
        </p>
        <ol className="mt-9 grid gap-5 md:mt-11 md:grid-cols-3 md:gap-7">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-gw-border bg-gw-cream/40 p-6 pb-6 pt-8 sm:p-6 sm:pt-8"
            >
              <span
                className="absolute left-6 top-0 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gw-teal text-sm font-bold text-white shadow-sm"
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gw-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-snug text-gw-muted sm:text-sm">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
