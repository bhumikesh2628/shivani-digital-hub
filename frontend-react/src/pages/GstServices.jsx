import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Legal & Tax Compliance', desc: 'Completely eliminate tax penalties and avoid legal actions by maintaining compliant and proper filings.' },
  { icon: 'fa-coins', title: 'Input Tax Credit (ITC)', desc: 'Save massive amounts by claiming the credit of GST paid on your business purchases to offset sales tax.' },
  { icon: 'fa-globe', title: 'Interstate Trade Access', desc: 'Required to sell goods or services across state boundaries in India. Easily expand your trading footprint.' },
  { icon: 'fa-shopping-cart', title: 'E-commerce Readiness', desc: 'Compulsory for onboarding onto online selling platforms like Amazon, Flipkart, Swiggy, and Zomato.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'PAN and Aadhaar Card', desc: 'PAN Card and Aadhaar Card of the business proprietor, partners, or directors' },
  { icon: 'fa-building', title: 'Business Address Proof', desc: 'Latest utility bill (electricity, gas, water) or property tax receipt of the office address' },
  { icon: 'fa-handshake', title: 'Lease Agreement / NOC', desc: 'Rent agreement and No Objection Certificate (NOC) from the owner (if rented)' },
  { icon: 'fa-money-check', title: 'Bank Account Proof', desc: 'Cancelled cheque or latest bank statement showing bank details and IFSC code' },
  { icon: 'fa-user-circle', title: 'Photographs', desc: 'Passport size photographs of all the authorized partners or directors' },
  { icon: 'fa-stamp', title: 'Digital Signature (DSC)', desc: 'Mandatory for Private Limited, Public Limited, HUF, and LLPs' },
]

const nameRules = [
  { icon: 'fa-sort-amount-up', title: 'Turnover Thresholds', desc: 'Goods suppliers with turnover > ₹40 Lakhs, and service providers > ₹20 Lakhs must register.' },
  { icon: 'fa-map-marked-alt', title: 'Interstate Transactions', desc: 'Firms engaging in interstate trade are legally required to obtain a GSTIN, regardless of turnover.' },
  { icon: 'fa-handshake', title: 'Voluntary Registration', desc: 'Businesses can voluntarily register to pass on Input Tax Credit benefits to business clients.' }
]

const faqsList = [
  { q: 'What is GST Registration?', a: 'GST (Goods and Services Tax) registration is a tax registration process under which a unique 15-digit Goods and Services Tax Identification Number (GSTIN) is issued to a business by the tax authorities.' },
  { q: 'What are the mandatory turnover limits for GST registration?', a: 'GST registration is mandatory for goods suppliers with an annual turnover exceeding ₹40 Lakhs (₹20 Lakhs for North Eastern & hilly states) and service providers exceeding ₹20 Lakhs (₹10 Lakhs for special category states).' },
  { q: 'What is Input Tax Credit (ITC)?', a: 'Input Tax Credit means at the time of paying tax on sales, you can reduce the tax you have already paid on purchases. For example, if you pay GST on buying office laptops, you can use that amount to offset your sales tax liability.' },
  { q: 'What returns must be filed after GST registration?', a: 'Normally, businesses must file monthly or quarterly GSTR-1 (sales details) and GSTR-3B (tax payment summary), along with the GSTR-9 (annual return).' },
  { q: 'What are the penalties for late filing of GST returns?', a: 'Filing after the due date incurs a late fee of ₹50 per day (₹20 per day for Nil filings) up to a maximum limit, plus 18% per annum interest on the unpaid tax liability.' }
]

export default function GstServices() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Pick Plan & Share Documents",
    "bullets": [
      "Select your preferred GST service plan (Registration, quarterly filing, etc.)",
      "Submit your basic business parameters",
      "Upload digital copies of identity and premise proofs",
      "Complete the secure online payment"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Experts Draft & File",
    "bullets": [
      "Our senior CA/CS team reviews your business papers",
      "We draft and file the formal application on the official GST portal",
      "We generate the Application Reference Number (ARN) for tracking"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Official Allocation",
    "bullets": [
      "Tax authorities process the application and allocate the 15-digit GSTIN",
      "We deliver the official GST certificate and account details via email"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Document checking and portal profile creation",
      "Filing the formal GST registration application on the government portal",
      "Generation of ARN for tracking"
    ]
  },
  {
    "badge": "OK",
    "icon": null,
    "title": "Days 3 - 7",
    "bullets": [
      "Government verification by the jurisdiction GST officer",
      "Addressing any queries or clarifications",
      "Final allocation of 15-digit GSTIN and issuance of certificate"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online GST Registration & Return Filing Services")}
      serviceName="GST Services"
      heroBg={"/hero-gst-services.webp"}
      heroDesc={[
        t("Outsource your GST compliance to Shivani Digital Hub. Get expert help in fast GST Registration, ARN generation, GSTR-1, GSTR-3B, GSTR-9 annual return filings, and reconciliations with zero stress."),
        t("Complete your GST registration and ongoing compliances under one roof. We help you obtain your GSTIN, upload mandatory business details, and file your tax returns regularly with comprehensive ledger updates.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("GST Registration & Return Filing Services in India")}
      overviewParagraphs={[
        t("GST (Goods and Services Tax) is a comprehensive, multi-stage, destination-based tax system levied on every value addition in manufacture, sale, and consumption of goods and services in India. Compulsory registration is required for businesses exceeding specified turnover thresholds or engaging in interstate trading and e-commerce business."),
        t("Our professional CA/CS Assisted services take the complexity out of GST compliances. We assist in generating your 15-digit GSTIN, configuring accounts, conducting invoices reconciliation, optimized Input Tax Credit filings, GSTR-1, GSTR-3B filings, annual GSTR-9 tax filings, and resolving government notices or audits, allowing you to run your enterprise smoothly.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why Outsource Your GST Compliance?")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for Online GST Setup")}
      documents={documents}
      guidelinesBadge={t("Eligibility")}
      guidelinesTitle={t("Mandatory GST Registration Thresholds & Rules")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("GST Services in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
