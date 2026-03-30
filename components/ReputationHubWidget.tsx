import Script from "next/script";

const SCRIPT_SRC = "https://reputationhub.site/reputation/assets/review-widget.js";
const IFRAME_SRC =
  "https://reputationhub.site/reputation/widgets/review_widget/ZzljeIgVLoya0H6EuuWK";

type Props = {
  /** Taller embed on full testimonials page */
  variant?: "default" | "compact";
};

/**
 * Reputation Hub review widget (third-party). Script + iframe per vendor embed.
 */
export function ReputationHubWidget({ variant = "default" }: Props) {
  const minH = variant === "compact" ? "min-h-[360px]" : "min-h-[480px]";

  return (
    <div className={`w-full ${minH}`}>
      <Script id="reputationhub-review-widget" src={SCRIPT_SRC} strategy="lazyOnload" />
      <iframe
        title="Patient reviews — Reputation Hub"
        className="lc_reviews_widget w-full min-w-full border-0"
        src={IFRAME_SRC}
        scrolling="no"
        loading="lazy"
        style={{ minWidth: "100%", width: "100%" }}
      />
    </div>
  );
}
