import { localSeo } from "@/lib/local-seo";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

const clinicId = `${site.url.replace(/\/$/, "")}/#clinic`;
const websiteId = `${site.url.replace(/\/$/, "")}/#website`;

/**
 * WebPage + Service structured data for high-intent service URLs (local SEO).
 */
export function ServiceSeoJsonLd({
  path,
  name,
  description,
}: {
  path: "/physical-therapy/" | "/massage-therapy/";
  name: string;
  description: string;
}) {
  const url = absoluteUrl(path);
  const webpageId = `${url}#webpage`;
  const serviceId = `${url}#service`;

  const graph = [
    {
      "@type": "WebPage",
      "@id": webpageId,
      url,
      name,
      description,
      isPartOf: { "@id": websiteId },
      about: { "@id": serviceId },
      publisher: { "@id": clinicId },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name,
      description,
      url,
      provider: { "@id": clinicId },
      serviceType: name,
      areaServed: [
        { "@type": "City", name: localSeo.city, containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "AdministrativeArea", name: localSeo.county },
        { "@type": "City", name: "Lutz" },
        { "@type": "City", name: "Wesley Chapel" },
        { "@type": "City", name: "Odessa" },
        { "@type": "City", name: "Trinity" },
        { "@type": "City", name: "New Port Richey" },
      ],
    },
  ];

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
