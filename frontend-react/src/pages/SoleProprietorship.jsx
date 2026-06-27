import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const plans = [
  {
    name: 'Basic MSME Plan', price: '₹2,999', featured: false,
    features: ['MSME / Udyam Registration', 'Official Udyam Certificate generation', 'Current Bank Account opening support', 'Expert advice by Professional CA/CS', '100% Online hassle-free process']
  },
  {
    name: 'GST Registration Plan', price: '₹4,499', featured: true,
    features: ['MSME / Udyam Registration', 'Official GST Registration', '15-digit GSTIN Allocation', 'ARN generation and tracking', 'Current Bank Account opening support', 'Dedicated CA/CS Relationship Manager']
  },
  {
    name: 'Professional Trade Plan', price: '₹6,999', featured: false,
    features: ['MSME / Udyam Registration', 'Official GST Registration', 'Shop & Establishment / Trade License', 'Commercial address proof processing', 'Dedicated CA/CS Relationship Manager', 'Priority fast-track processing']
  },
]

const advantages = [
  { icon: 'fa-seedling', title: 'Simplest Structure to Start', desc: 'Requires no complex board meetings, state approvals, or corporate resolutions. Start operating instantly.' },
  { icon: 'fa-user-cog', title: 'Complete Absolute Control', desc: 'As the sole owner, you have 100% authority over all business operations, cash flows, and management decisions.' },
  { icon: 'fa-percentage', title: 'Minimal Annual Compliances', desc: 'Extremely easy annual maintenance. Simply file your ITR under personal slabs and GST returns if registered.' },
  { icon: 'fa-coins', title: 'All Profits to the Owner', desc: 'No shareholders, directors, or partners to share gains with. All profits are owned directly by the proprietor.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'PAN and Aadhaar Card', desc: 'PAN Card and Aadhaar Card of the proprietor (mandatory for linking and Udyam)' },
  { icon: 'fa-building', title: 'Business Address Proof', desc: 'Copy of electricity bill, telephone bill, or property tax bill of the registered office location' },
  { icon: 'fa-handshake', title: 'Lease Agreement / NOC', desc: 'Rent agreement and No Objection Certificate (NOC) from the landlord (if property is rented)' },
  { icon: 'fa-money-check', title: 'Bank Account Details', desc: 'Proprietor\'s personal bank cancelled cheque or latest bank statement' },
  { icon: 'fa-user-circle', title: 'Photograph', desc: 'Latest passport size photograph of the proprietor' },
]

const nameRules = [
  { icon: 'fa-font', title: 'Select Business Name', desc: 'Choose any name you prefer, but ensure it does not infringe on registered trademarks or existing company names.' },
  { icon: 'fa-shield-alt', title: 'Unlimited Personal Liability', desc: 'As a single entity, the proprietor\'s personal assets can legally be claimed to settle outstanding business debts.' },
  { icon: 'fa-ban', title: 'No Separate Legal Identity', desc: 'The business and the owner are considered the same entity by tax and corporate departments in India.' }
]

const faqsList = [
  { q: 'What is a Sole Proprietorship?', a: 'A sole proprietorship is a simple, unincorporated business structure where a single individual owns, controls, manages, and operates all affairs of the business. The proprietor is solely responsible for all gains, losses, and debts.' },
  { q: 'Is there a single registration certificate for proprietorship?', a: 'No, there is no separate government registration certificate called a "Proprietorship Certificate". The business is legally established through standard tax and commercial registrations such as GST Registration, MSME Udyam, or a Shop & Establishment License.' },
  { q: 'What are the compliance requirements for a proprietorship?', a: 'Compliance is very low. You only need to file your annual personal Income Tax Return (ITR-3 or ITR-4) including business details, and file standard GST returns (monthly/quarterly) if you hold an active GSTIN.' },
  { q: 'Can a sole proprietorship be converted into a Private Limited Company?', a: 'Yes, as the scale of business operations, sales turnover, or investment funding requirements grows, a sole proprietorship can easily be converted into an LLP or a Private Limited Company.' },
  { q: 'What is Udyam MSME Registration?', a: 'Udyam Registration is a free government portal scheme that registers micro, small, and medium businesses. Obtaining an Udyam certificate gives proprietorships benefits like priority bank credits, lower interest rates, and trademark application fee discounts.' }
]

export default function SoleProprietorship() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Frame Brand Name & Upload",
    "bullets": [
      "Pick the most suitable registration package",
      "Submit your preferred business name and ID copies",
      "Complete the secure online payment"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. License Preparation & Filing",
    "bullets": [
      "Our legal team prepares the Udyam MSME application",
      "We submit the Udyam and GST portal filings",
      "We track government department processing and address any queries"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Account Opening Support",
    "bullets": [
      "Udyam and GST certificates issued",
      "We provide current bank account opening documentation support"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Filing the online Udyam MSME application",
      "Udyam MSME Registration Certificate issued"
    ]
  },
  {
    "badge": "GST",
    "icon": null,
    "title": "Days 3 - 5",
    "bullets": [
      "Preparing and filing the GST registration application (if opted)",
      "Monitoring ARN status on the GST system"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Days 6 - 7",
    "bullets": [
      "GST registration certificate issued",
      "All registrations compiled and delivered, ready for current bank account opening"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Sole Proprietorship Registration Services")}
      serviceName="Sole Proprietorship"
      heroBg={"/hero-proprietorship.webp"}
      heroDesc={[
        t("Register your business as a sole proprietor and be your own boss from today. Quickest MSME Udyam, GST, and Trade License setup handled online by the expert CA/CS team at Shivani Digital Hub."),
        t("Start a small business or retail store quickly. We set up your MSME Udyam registration, file your GST application if required, assist with Shop & Establishment licenses, and verify your bank account documentation.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Sole Proprietorship Firm Registration Services")}
      overviewParagraphs={[
        t("Sole Proprietorship is the simplest, most popular form of business entity in India, where a single individual owns, manages, controls, and carries out all commercial operations. Because the proprietor and the firm are considered the same legal entity, there are no complex directors, board meetings, or mandatory ROC filing compliances."),
        t("Although there is no single government-issued \"Proprietorship Certificate\", the firm is legally established by obtaining tax and municipal licenses under its business name. Our expert team at Shivani Digital Hub helps you easily obtain MSME Udyam Registration, GST Identification Number (GSTIN), and Shop & Establishment / Trade Licenses, letting you start your commercial current bank account and begin operations legally in under 3-7 working days.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why Should You Register as a Sole Proprietor?")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for Sole Proprietorship")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("Sole Proprietorship Guidelines & Liability Rules")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Sole Proprietorship in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      plans={plans}
    />
  )
}
