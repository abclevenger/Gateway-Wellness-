const steps = [
  {
    title: "Book",
    body: "Call, use online scheduling, or send a request. Ask about insurance — we will tell you what to bring.",
  },
  {
    title: "Get checked",
    body: "Exam, history, and plain-language options. Imaging or extra tests only when warranted.",
  },
  {
    title: "Start care",
    body: "Adjustments, PT exercises, massage, or a mix — written around your schedule and what you can do at home.",
  },
] as const;

export function HomeWhatToExpect() {
  return (
    <section
      className="border-y border-gw-border bg-gw-white"
      aria-labelledby="what-to-expect-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2
          id="what-to-expect-heading"
          className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl"
        >
          First visit → first steps
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm leading-snug text-gw-muted sm:text-base">
          Three simple beats. No fluff, no surprise bills without warning.
        </p>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-gw-border bg-gw-cream/40 p-6 pt-8">
              <span
                className="absolute left-6 top-0 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gw-teal text-sm font-bold text-white shadow-sm"
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gw-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-snug text-gw-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
