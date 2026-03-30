import Link from "next/link";

export function ServicesListContent() {
  return (
    <>
      <h1>Service list</h1>

      <h2>Initial consultation includes</h2>
      <ul>
        <li>Consultation</li>
        <li>Exam</li>
        <li>X-ray — patient by patient basis</li>
      </ul>

      <h2>Chiropractic modalities</h2>
      <ul>
        <li>Chiropractic adjustment</li>
        <li>Therapeutic exercise and strengthening</li>
        <li>Decompression — Triton/DTS advanced traction therapy</li>
        <li>Cold laser treatment</li>
        <li>Full-size hydro massage table</li>
        <li>DME — if needed</li>
        <li>MUA — manipulation under anesthesia</li>
      </ul>

      <h2>Medical services</h2>
      <ul>
        <li>Pain management</li>
        <li>Stem cell therapy</li>
        <li>Pain injections</li>
        <li>Prolotherapy or PRP</li>
        <li>General practice medicine</li>
        <li>EKG</li>
      </ul>

      <h2>Massage therapy</h2>
      <ul>
        <li>Massage club</li>
        <li>Swedish</li>
        <li>Deep tissue</li>
        <li>Neuromuscular</li>
        <li>Trigger point</li>
        <li>Myofascial</li>
        <li>Pregnancy</li>
        <li>Cranial experience</li>
        <li>TMJ relief</li>
        <li>Carpal tunnel syndrome relief</li>
        <li>Hot stones / aroma therapy</li>
      </ul>
      <p className="text-sm text-gw-muted">
        Details, local service area, and booking:{" "}
        <Link href="/massage-therapy/" className="font-medium text-gw-teal underline underline-offset-2">
          massage therapy in Land O&apos; Lakes &amp; Pasco County
        </Link>
        .
      </p>

      <h2>Physical therapy</h2>
      <ul>
        <li>Therapeutic exercise and strengthening</li>
        <li>Therapeutic exercise balls and bands</li>
        <li>Cold laser</li>
        <li>Ultrasound</li>
        <li>Electrical muscle stimulation</li>
        <li>Treadmill</li>
        <li>Free weights</li>
        <li>Wobble board</li>
        <li>Custom orthotics</li>
        <li>Accustism therapy</li>
        <li>KT Tape</li>
      </ul>
      <p className="text-sm text-gw-muted">
        Conditions we treat, modalities, and directions:{" "}
        <Link href="/physical-therapy/" className="font-medium text-gw-teal underline underline-offset-2">
          physical therapy on Land O&apos; Lakes Blvd
        </Link>
        .
      </p>

      <h2>Gateway Wellness &amp; Rehab also provides</h2>
      <ul>
        <li>Licensed chiropractic physicians</li>
        <li>Licensed medical director</li>
        <li>Compassionate use physician</li>
        <li>Licensed physical therapist</li>
        <li>Licensed massage therapist</li>
        <li>Patients are provided with Dr. Rob&apos;s cell phone number for emergencies</li>
        <li>No charge for phone consultation between doctor/attorney/physical therapist/case manager</li>
        <li>We work alongside the PCP to provide total neuromuscular skeletal care</li>
        <li>Personal injury treatment and case management</li>
        <li>Impairment rating on final exam</li>
        <li>Team approach in patient care</li>
        <li>Centralized billing, HIPAA compliance</li>
        <li>Bilingual staff</li>
        <li>Same-day appointments</li>
        <li>DME provider</li>
      </ul>
    </>
  );
}
