import { MassageTherapyContent } from "@/content/MassageTherapyContent";
import { ProseArticle } from "@/components/ProseArticle";
import { ServiceSeoJsonLd } from "@/components/ServiceSeoJsonLd";
import { localMetaSuffix, localSeo } from "@/lib/local-seo";
import { localPageMeta } from "@/lib/page-meta";

const seoDescriptionBase =
  "Licensed massage therapy on Land O' Lakes Blvd: Swedish, deep tissue, neuromuscular & trigger point work, pregnancy massage, TMJ relief, hot stone, and stress-focused care. Same-day visits often available; serving Pasco County & Tampa Bay.";

export const metadata = localPageMeta({
  path: "/massage-therapy/",
  title: `Massage therapy in ${localSeo.cityState} — deep tissue, Swedish & medical massage`,
  description: seoDescriptionBase,
  keywords: [
    `massage therapy ${localSeo.city}`,
    `massage therapist ${localSeo.cityState}`,
    `deep tissue massage ${localSeo.county}`,
    "Swedish massage Land O Lakes FL",
    "pregnancy massage Pasco County",
    "neuromuscular massage Tampa Bay",
    "TMJ massage Land O Lakes",
    "medical massage Wesley Chapel",
    "massage therapy Lutz FL",
    "hot stone massage Land O Lakes",
    "sports massage Pasco County",
    "Gateway Wellness massage",
  ],
});

export default function MassageTherapyPage() {
  const structuredDescription = `${seoDescriptionBase.trim()}${localMetaSuffix()}`;

  return (
    <>
      <ServiceSeoJsonLd
        path="/massage-therapy/"
        name={`Massage therapy — ${localSeo.cityState}`}
        description={structuredDescription}
      />
      <ProseArticle>
        <MassageTherapyContent />
      </ProseArticle>
    </>
  );
}
