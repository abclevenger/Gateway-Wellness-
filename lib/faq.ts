import { localSeo } from "@/lib/local-seo";
import { site } from "@/lib/site";

export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "Where is your clinic located?",
    a: `We are at ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}. If you need directions or parking details, call us at ${site.phone}.`,
  },
  {
    q: "What are your hours?",
    a: `Monday & Wednesday: 5 AM – 12 PM and 2 PM – 6 PM. Tuesday & Thursday: 8 AM – 12 PM and 2 PM – 6 PM. Friday: 5 AM – 12 PM. We are closed Saturday and Sunday. When in doubt, call ${site.phone}.`,
  },
  {
    q: "Do you accept insurance?",
    a: "We accept most major health insurance plans. Coverage depends on your specific policy and benefits. Our team can help verify chiropractic, medical, physical therapy, and related benefits — and we always recommend you also confirm details with your insurance carrier.",
  },
  {
    q: "Do I need a referral to see a chiropractor?",
    a: "No. In Florida you can see a chiropractor without a referral from a medical doctor. Some insurance plans may have referral requirements for certain benefits — we can help you understand what applies to your plan.",
  },
  {
    q: "What is a chiropractor?",
    a: "Chiropractors are university-trained professionals focused on the neuro-musculoskeletal system. They diagnose and treat conditions affecting the spine, nerves, and related structures, and often work with exercise, rehabilitation, and other conservative care.",
  },
  {
    q: "What should I expect on my first visit?",
    a: "Your first visit usually includes a consultation, health history, and examination. Imaging or other tests may be recommended when appropriate. Your provider will explain findings and outline a care plan, including frequency of visits and goals.",
  },
  {
    q: "Do you offer same-day appointments?",
    a: `We often have same-day or next-day availability depending on provider schedules and your needs. Call ${site.phone} and our front desk will do their best to get you in.`,
  },
  {
    q: "How do I make an appointment?",
    a: `Call ${site.phone} or use the contact or form pages on this website. We will follow up to confirm a time that works for you.`,
  },
  {
    q: "How do I cancel or reschedule?",
    a: `Please call our office at ${site.phone} as soon as you know you need to change your visit. Keeping appointments helps you stay on track with your care plan.`,
  },
  {
    q: "What should I wear to my appointment?",
    a: "Wear loose, comfortable clothing when possible. For massage, you will undress to your comfort level with proper draping. For chiropractic or physical therapy, flexible clothing makes examination and treatment easier.",
  },
  {
    q: "What do I need to bring?",
    a: "Bring a photo ID, insurance card (if using insurance), a list of medications, and any recent imaging reports (MRI, X-ray, etc.) that relate to your condition.",
  },
  {
    q: "Do you have X-ray on site?",
    a: "Yes. Our services include consultation, exam, and X-ray when clinically appropriate, on a patient-by-patient basis. Your provider will explain if imaging is recommended.",
  },
  {
    q: "How many visits will I need?",
    a: "That depends on your condition, goals, and how you respond to care. After your evaluation, your provider will discuss a recommended plan. Some people need a short course of care; others benefit from ongoing support or wellness visits.",
  },
  {
    q: "Is chiropractic care safe? What is that popping sound?",
    a: "Chiropractic adjustments are generally very safe when performed by a licensed chiropractor after a proper evaluation. A popping or cracking sound can occur when gas is released from the joints — it is usually normal and not always present. Always tell your provider if you have concerns or health conditions.",
  },
  {
    q: "Do you treat auto accident or workers’ compensation injuries?",
    a: `We treat many patients after motor vehicle accidents and work-related injuries. Documentation and billing may differ by case. Call ${site.phone} to discuss your situation and whether we participate with your employer’s workers’ comp or auto claim process.`,
  },
  {
    q: "Do you offer pediatric chiropractic?",
    a: "Yes. Our team includes providers experienced with pediatric and pregnancy-related care. If you have questions about whether chiropractic is appropriate for your child, call to speak with our staff.",
  },
  {
    q: "What is the difference between chiropractic, physical therapy, and massage?",
    a: "Chiropractic care often focuses on spinal and joint function, alignment, and the nervous system. Physical therapy emphasizes movement, strength, balance, and functional recovery. Massage therapy addresses soft tissue, tension, and relaxation. Many patients use a combination based on their plan of care.",
  },
  {
    q: "How long does a physical therapy course take?",
    a: `Duration depends on your diagnosis, severity, past medical history, and how you progress. Your physical therapist will re-evaluate you over time and coordinate with your physician when appropriate. For outpatient PT in ${localSeo.cityState} and Pasco County, call ${site.phone} or request a visit through our contact page.`,
  },
  {
    q: "What conditions does physical therapy treat?",
    a: `Our ${localSeo.city} clinic treats spine and neck pain, shoulder, elbow, wrist, hip, knee, ankle, and foot issues, post-surgical rehabilitation, sports injuries, neurological and balance problems, vestibular dizziness, concussion recovery, chronic pain, and more. See our full physical therapy service overview for modalities like dry needling, laser therapy, and custom orthotics.`,
  },
  {
    q: "How do I know if my insurance covers physical therapy or chiropractic?",
    a: "We can help check benefits for chiropractic, medical, and outpatient physical therapy services when you provide your insurance information. You should also verify coverage, copays, and visit limits directly with your carrier.",
  },
  {
    q: "Are your massage therapists licensed?",
    a: `Yes. Massage therapy near ${localSeo.city} and ${localSeo.county} is provided by licensed professionals. We offer Swedish and deep tissue massage, neuromuscular and trigger point therapy, pregnancy massage, TMJ-focused work, hot stones, aromatherapy, and more — see our massage therapy page for details or call ${site.phone} to book.`,
  },
  {
    q: "Do you offer Spanish or bilingual assistance?",
    a: "We have bilingual staff to help patients who prefer Spanish. If you need language assistance, mention it when you call so we can accommodate you.",
  },
  {
    q: "What if I don’t have insurance or want to self-pay?",
    a: `Call ${site.phone} to discuss self-pay options and fees for the services you need. We can explain what to expect before you schedule.`,
  },
  {
    q: "Is my health information kept private?",
    a: "Yes. We follow HIPAA and applicable privacy rules. Our privacy policy explains how we use and protect your information. We do not sell patient information to third parties for marketing.",
  },
];
