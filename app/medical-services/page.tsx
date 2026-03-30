import { MedicalServicesContent } from "@/content/MedicalServicesContent";
import { ProseArticle } from "@/components/ProseArticle";
import { localPageMeta } from "@/lib/page-meta";

export const metadata = localPageMeta({
  path: "/medical-services/",
  title: "Medical services & pain management — Land O' Lakes, FL",
  description:
    "Family medicine, pain management, stem cell therapy, injections, and more at Gateway Wellness & Rehab.",
});

export default function MedicalServicesPage() {
  return (
    <ProseArticle>
      <MedicalServicesContent />
    </ProseArticle>
  );
}
