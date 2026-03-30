/**
 * Trust strip — replace placeholder values with real data from Google Business Profile,
 * practice history, and marketing when available.
 */
export const homeTrust = {
  /** TODO(business): Link to your Google review page; update rating + count from GBP. */
  google: {
    label: "Reviews",
    value: "4.9 ★ · 120+ on Google",
    href: "https://www.google.com/maps/search/?api=1&query=Gateway+Wellness+%26+Rehab+Land+O+Lakes+FL",
  },
  /** TODO(business): Replace with accurate years or founding date. */
  years: {
    label: "Local",
    value: "15+ years · Land O' Lakes & Pasco",
  },
  insurance: {
    label: "Coverage",
    value: "Most major plans — we help verify",
  },
  team: {
    label: "One stop",
    value: "Chiro · medical · PT · massage",
  },
} as const;
