import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-balance-scale', title: 'Consumer Protection Act rights', desc: 'Avail your lawful consumer rights to fight corporate malpractice, fake products, or terrible services.' },
  { icon: 'fa-coins', title: 'Claim Compensation & Refunds', desc: 'Receive complete product refunds, item replacements, and financial compensations for mental harassment.' },
  { icon: 'fa-gavel', title: 'No Costly Lawyer Fees', desc: 'The consumer court operates under simplified rules. You can present your own case without expensive lawyers.' },
  { icon: 'fa-clock', title: 'Fast-Track Court Forums', desc: 'Consumer commissions are designated fast-track arbitration tribunals, resolving disputes faster than civil courts.' },
]

const documents = [
  { icon: 'fa-file-invoice', title: 'Product Invoice / Bill', desc: 'Official bill or tax invoice proving the purchase of the product or hiring of the service' },
  { icon: 'fa-receipt', title: 'Proof of Payment', desc: 'Receipts, bank transfer records, credit card slips, or transaction screenshots' },
  { icon: 'fa-envelope-open-text', title: 'Vendor Communications', desc: 'Copies of emails, letters, SMS, WhatsApp chats, or records of phone calls sent to the company' },
  { icon: 'fa-camera', title: 'Evidence of Defect', desc: 'Photographs, videos, technician reports, or lab testing records proving the product defect' },
  { icon: 'fa-id-card', title: 'Identity Proof', desc: 'PAN Card, Aadhaar Card, or passport of the complainant' },
  { icon: 'fa-file-alt', title: 'Complainant Affidavit', desc: 'A signed affidavit supporting the petition facts (prepared by our legal team)' },
]

const nameRules = [
  { icon: 'fa-map-marker-alt', title: 'District Commission', desc: 'Handles complaints where the total value of goods, services, and claims is up to ₹50 Lakhs.' },
  { icon: 'fa-landmark', title: 'State Commission', desc: 'Handles complaints where the claim value is between ₹50 Lakhs and ₹2 Crores.' },
  { icon: 'fa-hotel', title: 'National Commission', desc: 'Handles complaints where the total value of goods, services, and claims exceeds ₹2 Crores.' }
]

const faqsList = [
  { q: 'What is a Consumer Complaint?', a: 'A consumer complaint is a formal complaint filed in a consumer commission under the Consumer Protection Act, 2019, against a seller, manufacturer, or service provider for defective products, deficient services, or unfair trade practices.' },
  { q: 'Who is considered a "Consumer"?', a: 'A consumer is defined as any individual who purchases goods or hires services for personal use in exchange for consideration. It does not include someone who buys goods for commercial resale purposes.' },
  { q: 'Is it mandatory to send a legal notice first?', a: 'While not mandatory by strict law, sending a formal legal notice gives the vendor a final 15-day window to settle the dispute. Most companies resolve the issue at this stage to avoid court proceedings.' },
  { q: 'Do I need an expensive lawyer to file a case?', a: 'No, the Consumer Protection Act allows consumers to draft, file, and argue their own cases directly. Our experts handle the complex drafting of the petition, and you can easily present it in court.' },
  { q: 'Is there a time limit to file a consumer complaint?', a: 'Yes, a complaint must be filed in the consumer forum within 2 years from the date the defect or deficiency was first discovered (the cause of action).' }
]

export default function ConsumerComplaint() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Send Legal Notice First",
    "bullets": [
      "Select your preferred legal notice or filing package",
      "Submit purchase invoice, payment proof, and photos",
      "Our legal team drafts and mails a formal legal notice to the vendor"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Petition Drafting",
    "bullets": [
      "If the vendor ignores our notice after 15 days, we begin court prep",
      "Our experts draft the complete court petition, affidavits, and index"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Court Filing & Hearing",
    "bullets": [
      "We file the petition online or offline in the appropriate commission",
      "The commission issues summons/notices to the company",
      "Awaiting the final arbitration and compensation orders"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 3",
    "bullets": [
      "Drafting and sending the formal Legal Notice to the opponent company",
      "Awaiting response for 15 working days"
    ]
  },
  {
    "badge": "OK",
    "icon": null,
    "title": "Days 18 - 22",
    "bullets": [
      "Drafting the consumer court petition, statement of facts, and lists of evidence",
      "Filing the formal complaint in the respective Consumer Forum"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Months 6 - 12",
    "bullets": [
      "Court summons issued, pleadings, evidence, and argument hearings",
      "Final judgment, refund orders, and award of damages"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Consumer Complaint & Legal Notice Filing")}
      serviceName="Consumer Complaint"
      heroBg={"/hero-consumer-complaint.webp"}
      heroDesc={[
        t("Submit your consumer complaint online. File your case in district, state, or national consumer forums. Resolve issues with defective products, poor services, and corporate fraud with Shivani Digital Hub."),
        t("Our legal team drafts formal legal notices and files petitions on the e-Daakhil portal. We track your case progression, handle hearing notices, and ensure that your consumer rights are strongly represented.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Online Consumer Forum & Court Filing Services")}
      overviewParagraphs={[
        t("Consumer Court is a special government tribunal established under the Consumer Protection Act, 2019, to protect the rights of consumers and settle disputes between sellers, manufacturers, and buyers. It acts as an online fast-track system for resolving claims relating to defective products (electronics, vehicles, homes), deficient services (banking, telecommunication, builders), or unfair trade practices (false advertisements, overcharging)."),
        t("Our professional CA/CS and legal associate team manages your complete legal dispute process. We draft high-quality formal legal notices to warn vendors, compile proof of purchase and payment, draft the consumer petition and affidavits, and file the case in the appropriate district, state, or national consumer commission.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why Should You File a Consumer Complaint?")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for Consumer Court Filing")}
      documents={documents}
      guidelinesBadge={t("Jurisdiction")}
      guidelinesTitle={t("Pecuniary Jurisdiction Guidelines (Act of 2019)")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Consumer Complaint in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
