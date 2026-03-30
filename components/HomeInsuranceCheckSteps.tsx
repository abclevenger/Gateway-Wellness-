import { homeOffer } from "@/lib/home-offer";

const steps = [
  {
    title: "Tell us your insurance provider",
    body: "Call, book, or message — whichever you prefer.",
  },
  {
    title: "We check your coverage",
    body: "Our team runs your benefits for you.",
  },
  {
    title: "Know before your visit",
    body: "See what’s covered before you come in.",
  },
] as const;

export function HomeInsuranceCheckSteps() {
  return (
    <section
      className="border-b border-gw-border bg-gw-white"
      aria-labelledby="insurance-check-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gw-teal">
            {homeOffer.headline}
          </p>
          <h2
            id="insurance-check-heading"
            className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-gw-teal-dark sm:text-2xl md:text-3xl"
          >
            Verify Your Insurance in Minutes
          </h2>
        </div>
        <ol className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3 sm:gap-5">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-gw-border bg-gw-cream/40 px-5 py-5 text-center sm:text-left"
            >
              <span
                className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gw-teal text-sm font-bold text-white sm:mb-0"
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-base font-semibold text-gw-ink sm:mt-3">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-snug text-gw-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <ul className="mx-auto mt-8 max-w-2xl space-y-2 border-t border-gw-border pt-8 text-center text-sm leading-snug text-gw-muted sm:text-base">
          {homeOffer.reassurance.map((line) => (
            <li key={line} className="flex items-start justify-center gap-2">
              <span className="text-gw-teal" aria-hidden>
                ✓
              </span>
              <span className="max-w-md text-left">{line}</span>
            </li>
          ))}
        </ul>
        {/* TODO(business): Swap for vetted payer statement or link when ready */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-gw-muted/90 sm:px-4">
          {homeOffer.reassurancePayNote}
        </p>
      </div>
    </section>
  );
}
