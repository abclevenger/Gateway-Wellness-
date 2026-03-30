import { site } from "@/lib/site";

/** Geographic focus for titles, meta descriptions, and structured data */
export const localSeo = {
  city: "Land O' Lakes",
  state: "FL",
  cityState: "Land O' Lakes, FL",
  county: "Pasco County",
  countyState: "Pasco County, FL",
  /** Nearby cities patients often search from */
  nearbyCities:
    "Lutz, Wesley Chapel, Odessa, Trinity, New Port Richey, and the Tampa Bay area",
  /** Matches Google Maps embed for Gateway Wellness & Rehab */
  geo: {
    latitude: 28.2558165,
    longitude: -82.4734033,
  },
} as const;

export const defaultSiteDescription =
  `${site.name} in ${localSeo.cityState} — pain relief and injury recovery with chiropractic, ` +
  `physical therapy, massage, and rehab on Land O' Lakes Blvd. Serving ${localSeo.county} and ` +
  `${localSeo.nearbyCities}. Same-day appointments often available; most insurance accepted. Call ${site.phone}.`;

/** Natural suffix for service page meta descriptions */
export function localMetaSuffix(): string {
  return ` Located in ${localSeo.cityState} (${localSeo.county}). Serving ${localSeo.nearbyCities}.`;
}
