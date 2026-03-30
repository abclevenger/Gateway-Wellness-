import { ChiropracticMedicineContent } from "@/content/ChiropracticMedicineContent";
import { ProseArticle } from "@/components/ProseArticle";
import { localPageMeta } from "@/lib/page-meta";

export const metadata = localPageMeta({
  path: "/chiropractic-medicine/",
  title: "Chiropractor & chiropractic care in Land O' Lakes, FL",
  description:
    "Non-invasive chiropractic care, spinal decompression, MUA, sports and auto injury treatment at Gateway Wellness & Rehab.",
});

export default function ChiropracticMedicinePage() {
  return (
    <ProseArticle>
      <ChiropracticMedicineContent />
    </ProseArticle>
  );
}
