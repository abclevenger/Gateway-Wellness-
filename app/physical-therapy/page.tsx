import { PhysicalTherapyContent } from "@/content/PhysicalTherapyContent";
import { ProseArticle } from "@/components/ProseArticle";
import { ServiceSeoJsonLd } from "@/components/ServiceSeoJsonLd";
import { localMetaSuffix, localSeo } from "@/lib/local-seo";
import { localPageMeta } from "@/lib/page-meta";

const seoDescriptionBase =
  "Outpatient physical therapy on Land O' Lakes Blvd: spine & extremity rehab, post-surgical recovery, sports injuries, vestibular & concussion care, dry needling, neurological PT, and balance programs. Licensed therapists; most insurance accepted.";

export const metadata = localPageMeta({
  path: "/physical-therapy/",
  title: `Physical therapy in ${localSeo.cityState} — spine, sports & post-surgical rehab`,
  description: seoDescriptionBase,
  keywords: [
    `physical therapy ${localSeo.city}`,
    `physical therapist ${localSeo.cityState}`,
    `PT ${localSeo.county}`,
    "physical therapy Land O Lakes Blvd",
    "outpatient physical therapy Pasco County",
    "physical therapy Wesley Chapel",
    "physical therapy Lutz FL",
    "sports injury rehab Tampa Bay",
    "post surgical physical therapy Land O Lakes",
    "vestibular therapy Pasco County",
    "dry needling Land O Lakes",
    "balance and fall prevention physical therapy",
    "workers comp physical therapy Florida",
    "Gateway Wellness physical therapy",
  ],
});

export default function PhysicalTherapyPage() {
  const structuredDescription = `${seoDescriptionBase.trim()}${localMetaSuffix()}`;

  return (
    <>
      <ServiceSeoJsonLd
        path="/physical-therapy/"
        name={`Physical therapy — ${localSeo.cityState}`}
        description={structuredDescription}
      />
      <ProseArticle>
        <PhysicalTherapyContent />
      </ProseArticle>
    </>
  );
}
