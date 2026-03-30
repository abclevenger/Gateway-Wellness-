export const site = {
  name: "Gateway Wellness & Rehab",
  tagline: "Comprehensive Health Care",
  description:
    "Chiropractic, medical, physical therapy & massage on Land O' Lakes Blvd — serving Pasco County & Tampa Bay.",
  url: "https://gateway4wellness.com",
  phone: "813.929.8885",
  phoneTel: "tel:+18139298885",
  email: "gateway.wellness@yahoo.com",
  address: {
    street: "6761 Land O' Lakes Blvd",
    city: "Land O' Lakes",
    state: "FL",
    zip: "34638",
  },
  hours: [
    { label: "Monday & Wednesday", value: "5 AM – 12 PM & 2 PM – 6 PM" },
    { label: "Tuesday & Thursday", value: "8 AM – 12 PM & 2 PM – 6 PM" },
    { label: "Friday", value: "5 AM – 12 PM" },
    { label: "Saturday & Sunday", value: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/gateway4wellnessandrehab",
    instagram: "https://www.instagram.com/gatewaywellnessandrehab",
    x: "https://x.com/gwellnessrehab",
    tiktok: "https://www.tiktok.com/@gateway4wellnessandrehab?lang=en",
    youtube: "https://www.youtube.com/@robertmalhoit2217",
  },
  /** White artwork on transparent — show on dark header band (see SiteHeader). */
  logoSrc: "/logo.png",
  /** Google Maps embed (share → embed a map). */
  googleMapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7028.804553036353!2d-82.4734033!3d28.255816499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2bb5fd1074841%3A0x9f3da3ace926fc18!2sGateway%20Wellness%20%26%20Rehab!5e0!3m2!1sen!2sus!4v1774899801341!5m2!1sen!2sus",
} as const;

/** Opens driving directions in Google Maps (search by address). */
export function googleMapsDirectionsUrl(): string {
  const q = encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
  );
  return `https://www.google.com/maps/dir/?api=1&destination=${q}`;
}

export type NavItem = { label: string; href: string };

export type NavGroup = { label: string; items: NavItem[] };


export const navGroups: NavGroup[] = [
  {
    label: "Services",
    items: [
      { label: "Chiropractic Medicine", href: "/chiropractic-medicine/" },
      { label: "Medical Services", href: "/medical-services/" },
      { label: "Physical Therapy", href: "/physical-therapy/" },
      { label: "Massage Therapy", href: "/massage-therapy/" },
      { label: "Services List", href: "/services-list/" },
    ],
  },
  {
    label: "About Us",
    items: [
      { label: "Get To Know Us", href: "/get-to-know-us/" },
      { label: "Testimonials", href: "/testimonials/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms-and-conditions/" },
      { label: "A2P & SMS Policy", href: "/a2p-policy/" },
      { label: "Accessibility Policy", href: "/accessibility-policy/" },
    ],
  },
  {
    label: "Forms",
    items: [
      { label: "Form", href: "/form/" },
      { label: "Pediatric Form", href: "/pediatric-form/" },
    ],
  },
];
