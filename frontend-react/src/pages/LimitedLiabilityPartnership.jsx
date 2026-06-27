import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Limited Liability of Partners', desc: 'Partner liability is strictly restricted to their agreed capital contribution. Personal assets remain completely protected.' },
  { icon: 'fa-landmark', title: 'Separate Legal Identity', desc: 'An LLP is recognized as a separate juristic entity under law. It can own property, sign contracts, and sue in its own name.' },
  { icon: 'fa-exchange-alt', title: 'Perpetual Succession', desc: 'The legal existence of an LLP continues uninterrupted by changes in partnership, retirements, insolvency, or death.' },
  { icon: 'fa-coins', title: 'No Minimum Capital Required', desc: 'Start your LLP with any capital contribution. There is no statutory minimum paid-up capital mandated by the MCA.' },
]

const documents = [
  { icon: 'fa-id-card', title: 'PAN Card of Partners', desc: 'Copy of PAN Card of all designated partners (mandatory for signing and income tax verification).' },
  { icon: 'fa-id-card-alt', title: 'Identity Proof of Partners', desc: 'Copy of Aadhaar Card, Passport, Voter ID, or Driving License of each partner.' },
  { icon: 'fa-file-invoice-dollar', title: 'Address Proof of Partners', desc: 'Latest bank statement, electricity bill, or mobile bill showing partner\'s name and address.' },
  { icon: 'fa-building', title: 'Office Address Proof', desc: 'Copy of utility bill (electricity, water, or gas) of the registered office location.' },
  { icon: 'fa-handshake', title: 'Rent Deed & NOC', desc: 'Registered rent agreement along with No Objection Certificate (NOC) from the landlord.' },
  { icon: 'fa-user-circle', title: 'Passport Photograph', desc: 'Latest passport size photograph of all proposed partners.' },
]

const nameRules = [
  { icon: 'fa-font', title: 'Select LLP Name', desc: 'Choose a unique name that does not infringe on existing trademarks or company registrations in India.' },
  { icon: 'fa-percentage', title: 'No Minimum Capital Contribution', desc: 'Partners can contribute capital in any ratio or form, making setting up extremely flexible.' },
  { icon: 'fa-users', title: 'Partner Requirements', desc: 'A minimum of 2 partners is required. At least one designated partner must be a resident of India.' }
]

const faqsList = [
  { q: 'What is a Limited Liability Partnership (LLP)?', a: 'An LLP is a modern, highly compliant corporate business structure that combines the flexibility of a traditional partnership firm with the limited liability benefits of a Private Limited Company.' },
  { q: 'How many partners are required to incorporate an LLP?', a: 'A minimum of 2 partners is required to start an LLP. There is no upper limit on the maximum number of partners. At least two designated partners must be individuals, and one must be a resident of India.' },
  { q: 'What is the LLP Agreement?', a: 'The LLP Agreement is a formal, stamped contract signed by all partners that outlines the mutual rights, duties, profit-sharing ratio, capital contribution, and internal governance of the LLP.' },
  { q: 'Is a physical presence required to register an LLP?', a: 'No, the entire LLP incorporation process is managed 100% online by our team at Shivani Digital Hub. You only need to upload scanned copies of documents, and we will handle all filings with the MCA.' },
  { q: 'What are the annual compliance requirements for an LLP?', a: 'LLPs must file two mandatory annual returns: Form-11 (Annual Return) within 60 days of the end of the financial year, and Form-8 (Statement of Accounts & Solvency) within 30 days from the end of six months of the financial year, along with ITR filing.' }
]

export default function LimitedLiabilityPartnership() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Frame Brand Name & Upload",
    "bullets": [
      "Consult with CA/CS to select unique business name options",
      "Submit partner documents online via our encrypted channel",
      "Initialize secure registration"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. DSC Allocation & Deed Drafting",
    "bullets": [
      "We secure DPIN numbers and DSC (Digital Signature Certificates) for designated partners",
      "Draft standard partnership deed including customized covenants",
      "File RUN-LLP name reservation applications on the MCA portal"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Filing & COI Delivery",
    "bullets": [
      "We submit the incorporation form (FiLLiP) with state ROC fees",
      "Obtain Certificate of Incorporation (COI), PAN, and TAN",
      "Submit the finalized stamped LLP agreement in Form-3 within 30 days"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Filing name approvals and acquiring Digital Signature Certificates (DSC)",
      "Acquiring designated partner DPIN numbers"
    ]
  },
  {
    "badge": "MCA",
    "icon": null,
    "title": "Days 3 - 5",
    "bullets": [
      "Drafting specialized partnership covenants and agreement deeds",
      "Filing the MCA FiLLiP integration forms for incorporation approval"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Days 6 - 8",
    "bullets": [
      "Central Registration approval & receipt of Incorporation Certificate (COI)",
      "Delivery of official PAN and TAN, stamping and filing of the final agreement"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online LLP Registration & Incorporation Services")}
      serviceName="LLP Registration"
      heroBg={"/llp_hero_bg.webp"}
      heroDesc={[
        t("Register your Limited Liability Partnership (LLP) online under professional expert assistance. Get legally compliant drafting of your LLP Agreement, name approval, DSC, DPIN, and Incorporation Certificate under expert CA/CS guidance."),
        t("Incorporate a business with the combined benefits of a company and partnership. We assist in name reservation, DSC & DPIN creation, drafting a compliant LLP Agreement, and getting your certificate of incorporation.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding Limited Liability Partnership (LLP)")}
      overviewParagraphs={[
        t("A Limited Liability Partnership (LLP) is an advanced and robust corporate business structure that successfully merges the operational flexibility of traditional partnership firms with the limited liability protection and corporate credibility of a Private Limited Company. Governed under the Limited Liability Partnership Act of 2008, it has become one of the highly recommended legal frameworks for small-to-medium enterprises, consultants, service agencies, and professional firms."),
        t("Unlike traditional partnership firms where partners are personally responsible for business liabilities, LLP partners are insulated from the debts, losses, or legal liabilities of the firm. One partner is not responsible for another partner's independent actions, negligence, or misconduct. With perpetual succession, low statutory requirements, and separate property ownership, starting an LLP represents a safe and sound corporate choice.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Key Advantages of Registering an LLP")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for LLP Registration")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("LLP Guidelines & Name Rules")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("LLP Registration in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
