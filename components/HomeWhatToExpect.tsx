const steps = [
  {
    title: "Schedule Your Visit",
    body: "Pick a time — same-day when we can.",
  },
  {
    title: "Get Evaluated",
    body: "We find what's driving your pain.",
  },
  {
    title: "Start Your Recovery Plan",
    body: "A care plan built around you.",
  },
] as const;

export function HomeWhatToExpect() {
  return (
    <section
      className="border-y border-gw-border bg-gw-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="how-it-works-heading"
          className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl"
        >
          How It Works
        </h2>
        <ol className="mt-12 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-gw-border bg-gw-cream/40 p-6 pb-7 pt-9 sm:p-6 sm:pt-8"
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
              <p className="mt-3 text-base leading-snug text-gw-muted sm:mt-2 sm:text-sm">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
