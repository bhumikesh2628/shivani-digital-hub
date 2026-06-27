import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Consumer Trust & Goodwill', desc: 'An FSSAI logo on your menu or packaging increases brand value, assuring consumers of safety and quality.' },
  { icon: 'fa-gavel', title: 'Legal Protection & Standards', desc: 'Avoid steep penalties and legal actions by operating in complete compliance with food safety laws.' },
  { icon: 'fa-rocket', title: 'Expansion & Funding Ready', desc: 'FSSAI registration is required by investors, retail chains, and food aggregators like Zomato/Swiggy.' },
  { icon: 'fa-percentage', title: 'Business Credibility', desc: 'Required to qualify for government tenders, wholesale distributions, and food import-export operations.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'PAN and Aadhaar Card', desc: 'PAN Card and Aadhaar Card of the business proprietor, partners, or directors' },
  { icon: 'fa-building', title: 'Business Address Proof', desc: 'Copy of electricity bill, telephone bill, or property tax bill of the food premises' },
  { icon: 'fa-handshake', title: 'Lease Agreement / NOC', desc: 'Rent agreement and No Objection Certificate (NOC) from the landlord (if property is rented)' },
  { icon: 'fa-user-circle', title: 'Photographs', desc: 'Latest passport size photographs of all promoters/authorized signatories' },
  { icon: 'fa-clipboard-list', title: 'Food Safety Plan', desc: 'Detailed Food Safety Management System (FSMS) plan and layout diagram of the kitchen' },
  { icon: 'fa-file-alt', title: 'NOC from local body', desc: 'No Objection Certificate from the local municipality or panchayat' },
]

const nameRules = [
  { icon: 'fa-sort-numeric-up', title: 'Turnover Thresholds', desc: 'Ensure you apply for the correct license tier based on your projected annual turnover.' },
  { icon: 'fa-pizza-slice', title: 'Scope of Operation', desc: 'All food business operators (FBOs)—from manufacturers and wholesalers to small home kitchens—must register.' },
  { icon: 'fa-calendar-alt', title: 'Renewal Policy', desc: 'Apply for license renewal at least 30 days prior to the expiration date to avoid late fees.' }
]

const faqsList = [
  { q: 'What is FSSAI Food License?', a: 'FSSAI stands for Food Safety and Standards Authority of India. It is an autonomous body established under the Ministry of Health & Family Welfare. An FSSAI license is a mandatory 14-digit registration number issued to all food business operators in India.' },
  { q: 'Who needs to get an FSSAI License?', a: 'Anyone involved in food operations—including food manufacturing, packaging, storing, retailing, distributing, restaurants, home bakers, catering, and delivery platforms—must obtain a valid FSSAI registration.' },
  { q: 'What are the types of FSSAI Licenses?', a: 'There are three types: 1. FSSAI Basic Registration (for turnover < ₹12 Lakhs), 2. FSSAI State License (for turnover ₹12 Lakhs to ₹20 Crores), and 3. FSSAI Central License (for turnover > ₹20 Crores or multi-state operations).' },
  { q: 'What is the validity of an FSSAI License?', a: 'An FSSAI license is valid for a period of 1 to 5 years, as chosen by the FBO at the time of registration. You must apply for renewal at least 30 days before its expiry date.' },
  { q: 'What are the penalties for operating a food business without FSSAI?', a: 'Operating a food business without an FSSAI license can result in a fine of up to ₹5,000 to ₹5,00,000, along with imprisonment for up to 6 months depending on the severity of the offense.' }
]

export default function FssaiFoodLicense() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Answer Food Inquiry",
    "bullets": [
      "Pick the most suitable FSSAI package (Basic, State, Central)",
      "Submit your basic business parameters",
      "Upload digital copies of your premise address proofs",
      "Complete secure payment"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Drafting & Safety Declaration",
    "bullets": [
      "We assign an expert to review your food safety declaration",
      "We draft custom food safety management system (FSMS) documents",
      "We compile rent agreements and land permissions"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. FoSCoS Submission & Issuance",
    "bullets": [
      "We submit the Form A/B online on the official FoSCoS system",
      "We handle any inspection queries from safety officers",
      "Your 14-digit FSSAI registration is issued and delivered"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 3",
    "bullets": [
      "Expert document checking and category tier selection",
      "Drafting of FSMS layout and list of food products"
    ]
  },
  {
    "badge": "OK",
    "icon": null,
    "title": "Days 4 - 7",
    "bullets": [
      "Form submission on FoSCoS",
      "Government application fee payment"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Days 8 - 15",
    "bullets": [
      "FSSAI officer review and approval",
      "FSSAI registration code issued and delivered"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online FSSAI Food License Registration in India")}
      serviceName="FSSAI Food License"
      heroBg={"/hero-food-license.webp"}
      heroDesc={[
        t("Get FSSAI Food License Certificate for your food business. Register online today under expert guidance by Shivani Digital Hub. Safe, certified, and compliant with zero hidden charges and government processing support."),
        t("FSSAI registration is mandatory for all food businesses to operate legally. We help identify the correct category (Basic, State, or Central) based on your turnover, draft your application, compile documents, and coordinate with food safety officers.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("FSSAI Food License Services in India")}
      overviewParagraphs={[
        t("FSSAI (Food Safety and Standards Authority of India) registration is a mandatory compliance requirement for all food business operators in India. The FSSAI license ensures that food products undergo quality checks, reducing food adulteration and toxic elements. Our CS/CA-assisted services help you identify the correct FSSAI registration tier (Basic, State, or Central) based on your turnover and business capabilities, making the entire FoSCoS portal application seamless and secure."),
        t("Operating without FSSAI registration is a punishable legal offense and can cause severe business complications. Our team handles your food safety management plan, municipal NOC documentation, rent agreements, and portal filings to deliver your 14-digit FSSAI license quickly.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why Should You Register an FSSAI Food License?")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for Food License Registration")}
      documents={documents}
      guidelinesBadge={t("Rules")}
      guidelinesTitle={t("FSSAI Eligibility Criteria & Guidelines")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("FSSAI Food License in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
