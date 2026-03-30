/**
 * HOMEPAGE OFFER — TODO(business): Confirm benefits-check workflow, timelines, and
 * compliance with billing before going live. Update `reassurancePayNote` when marketing
 * has a vetted payer/network statement.
 */
export const homeOffer = {
  headline: "Free Insurance Check",

  /** Single line under hero CTAs — benefit: easy, fast, no hassle */
  heroNearCtaLine:
    "Free Insurance Check in Minutes — easy, fast, no surprises.",

  heroNearCtaLineShort: "Free Insurance Check in Minutes",

  /** Hero checklist — keep in sync with front desk / intake */
  heroBullets: [
    "Free Insurance Check in Minutes",
    "Same-day appointments available",
    "No referral needed",
  ] as const,

  /** Supporting sentence for prose blocks */
  detail:
    "Share your plan — we run your benefits so you’re not guessing at check-in.",

  /** Mid + final CTA reinforcement */
  ctaSupporting:
    "Book your first visit — we’ll verify your insurance before you come in.",

  reassurance: [
    "We work with most major insurance plans.",
    "No surprises — know your coverage upfront.",
  ] as const,

  /**
   * TODO(business): Replace with exact networks / disclaimers when available.
   * e.g. “We participate with …” or link to payer list PDF.
   */
  reassurancePayNote:
    "Coverage always depends on your specific plan — we’ll confirm what applies to you.",
} as const;
