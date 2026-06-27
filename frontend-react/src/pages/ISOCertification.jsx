import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Enhanced Credibility', desc: 'ISO certification demonstrates your commitment to quality, enhancing trust with customers, suppliers, and stakeholders.' },
  { icon: 'fa-chart-line', title: 'Improved Efficiency', desc: 'ISO standards help streamline processes, reduce waste, and improve overall operational efficiency.' },
  { icon: 'fa-globe', title: 'Global Recognition', desc: 'ISO certification is recognized worldwide, opening doors to international markets and business opportunities.' },
  { icon: 'fa-trophy', title: 'Competitive Advantage', desc: 'Certified businesses often win more contracts and tenders, giving them a competitive edge in the marketplace.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'PAN and Aadhaar Card', desc: 'Both PAN and Aadhaar Card of the business owner or authorized signatory' },
  { icon: 'fa-id-card', title: 'Identity Proof', desc: 'Either Voter ID, Passport, or Driving License of the business owner or authorized signatory.' },
  { icon: 'fa-file-invoice', title: 'Proof of Address', desc: 'Copy of the latest Telephone Bill, Electricity Bill, or Bank Account Statement of the registered office.' },
  { icon: 'fa-building', title: 'Business Address Proof', desc: 'Either of the latest Utility Bill (Electricity, Telephone, Gas, Water) or Property Tax Bill of the registered office address.' },
  { icon: 'fa-file-alt', title: 'Business Registration Proof', desc: 'Company Registration Certificate, Partnership Deed, or GST Registration Certificate.' },
]

const faqsList = [
  { q: 'What is ISO Certification?', a: 'ISO (International Organization for Standardization) certification is a globally recognized standard that ensures your products, services, and processes meet quality and safety requirements. It enhances credibility and opens doors to new business opportunities.' },
  { q: 'How long does ISO certification take?', a: 'The ISO certification process typically takes 3-6 months depending on the size of your organization, complexity of operations, and readiness level. Our experts work efficiently to minimize timeline.' },
  { q: 'Which ISO certification should I get?', a: 'ISO 9001:2015 (Quality Management) is the most common and suitable for most businesses. Other standards like ISO 14001 (Environment), ISO 45001 (Safety), or ISO 27001 (Information Security) may be relevant based on your industry.' },
  { q: 'Is ISO certification mandatory?', a: 'ISO certification is voluntary but highly recommended. Many government tenders, large corporations, and international clients require ISO certification as a prerequisite for doing business.' },
  { q: 'What is the validity of ISO certificate?', a: 'ISO certificates are typically valid for 3 years. Surveillance audits are conducted annually to ensure continued compliance. After 3 years, re-certification is required.' }
]

export default function ISOCertification() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Answer Quick Questions",
    "bullets": [
      "Pick the most suitable ISO certification package",
      "Take 5-10 minutes to answer simple questions",
      "Provide documents as per the checklist",
      "Make payment through a secured payment gateway"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Experts at Your Service",
    "bullets": [
      "We will assign a dedicated Relationship Manager",
      "Relax while experts draft and file your documents",
      "We commit to addressing any queries within 24 business hours"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. You are All Set to Roll",
    "bullets": [
      "All it takes is 7-10 working days*",
      "Get your ISO certificate and enhance your business credibility"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Experts review your documents and information",
      "Application submission to certification body"
    ]
  },
  {
    "badge": "AB",
    "icon": null,
    "title": "Days 3 - 5",
    "bullets": [
      "Documentation and quality manual preparation",
      "Internal audit planning"
    ]
  },
  {
    "badge": null,
    "icon": "fa-list-ul",
    "title": "Days 6 - 8",
    "bullets": [
      "Stage 1 and Stage 2 audit scheduling",
      "On-site audit by certification body"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Days 9 - 10",
    "bullets": [
      "Awaiting certification body approval",
      "ISO certificate issuance"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("ISO Certification Services in India")}
      serviceName="I S O Certification"
      heroBg={"/hero-iso-cert.webp"}
      heroDesc={[
        t("Get ISO certified and enhance your business credibility! Our expert auditors provide end-to-end ISO certification support with transparent pricing and fast turnaround times. 5,000+ businesses trust Shivani Digital Hub for their ISO certification needs."),
        t("Enhance your business standards and build credibility in tenders and contracts. We assist in auditing, preparing Quality Manuals, implementing standards (ISO 9001, 14001, 27001), and securing the final certificate.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("ISO Certification Services in India")}
      overviewParagraphs={[
        t("ISO certification is a globally recognized standard that demonstrates your commitment to quality, efficiency, and continuous improvement. Whether you need ISO 9001 for quality management, ISO 14001 for environmental management, or any other ISO standard, our expert auditors provide comprehensive support throughout the certification process."),
        t("With ISO certification, your business gains enhanced credibility, improved operational efficiency, and access to new markets. Our streamlined process ensures you get certified quickly and efficiently, with minimal disruption to your daily operations.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why Get ISO Certified?")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for ISO Certification")}
      documents={documents}
      
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("I S O Certification in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
