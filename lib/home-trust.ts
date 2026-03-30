/**
 * Trust strip — hero band below CTAs.
 * TODO(business): Replace X in years line with your verified number (e.g. 15).
 * TODO(business): Confirm 4.8+ rating with current Google Business Profile average.
 */
export const homeTrust = {
  google: {
    label: "",
    value: "⭐ 4.8+ Rated by Local Patients",
    href: "https://www.google.com/maps/place/Gateway+Wellness+%26+Rehab/@28.2558165,-82.4734033,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2bb5fd1074841:0x9f3da3ace926fc18!8m2!3d28.2558165!4d-82.4734033!16s%2Fg%2F1tfjx1ps",
  },
  years: {
    label: "",
    /** Replace X with your real tenure (e.g. "15+ years"). */
    value: "✔ Trusted in Land O' Lakes for X+ Years",
  },
  insurance: {
    label: "",
    value: "✔ Most Major Insurance Accepted",
  },
  team: {
    label: "",
    value: "✔ Experienced Rehab + Chiropractic Team",
  },
} as const;
