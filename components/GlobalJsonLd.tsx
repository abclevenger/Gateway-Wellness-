import { defaultSiteDescription, localSeo } from "@/lib/local-seo";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

function medicalClinic() {
  const openingHoursSpecification = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday"],
      opens: "05:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday"],
      opens: "14:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Thursday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Thursday"],
      opens: "14:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "05:00",
      closes: "12:00",
    },
  ];

  return {
    "@type": "MedicalClinic",
    "@id": `${site.url}/#clinic`,
    name: site.name,
    description: defaultSiteDescription,
    url: site.url,
    telephone: site.phoneTel.replace("tel:", ""),
    email: site.email,
    image: absoluteUrl(site.logoSrc),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: localSeo.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: localSeo.geo.latitude,
      longitude: localSeo.geo.longitude,
    },
    openingHoursSpecification,
    medicalSpecialty: [
      "Chiropractic",
      "PhysicalTherapy",
      "MassageTherapy",
      "PainManagement",
      "FamilyMedicine",
    ],
    areaServed: [
      { "@type": "City", name: localSeo.city, containedInPlace: { "@type": "State", name: "Florida" } },
      { "@type": "AdministrativeArea", name: localSeo.county },
      { "@type": "City", name: "Lutz" },
      { "@type": "City", name: "Wesley Chapel" },
      { "@type": "City", name: "Odessa" },
    ],
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.x,
      site.social.youtube,
      site.social.tiktok,
    ],
    priceRange: "$$",
  };
}

function webSite() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: defaultSiteDescription,
    inLanguage: "en-US",
    publisher: { "@id": `${site.url}/#clinic` },
  };
}

export function GlobalJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [medicalClinic(), webSite()],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
