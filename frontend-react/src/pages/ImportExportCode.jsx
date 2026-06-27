import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-globe', title: 'Global Business Expansion', desc: 'IEC is your passport to trade globally. It opens up international markets for your products and services.' },
  { icon: 'fa-infinity', title: 'Lifetime Validity', desc: 'Once obtained, the Import Export Code has lifetime validity and requires absolutely no renewals.' },
  { icon: 'fa-shield-alt', title: 'Legal & Customs Compliance', desc: 'Mandatory for clearing custom shipments at all Indian ports. Helps you operate fully legally.' },
  { icon: 'fa-percentage', title: 'Govt Benefits & Subsidies', desc: 'Import export firms can claim various incentives, duty drawbacks, and subsidies from the DGFT and Customs.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'PAN Card', desc: 'PAN Card of the business proprietor, partnership firm, or corporate entity' },
  { icon: 'fa-id-card', title: 'Identity Proof', desc: 'Aadhaar Card, Passport, or Voter ID of the applicant or designated partner' },
  { icon: 'fa-file-invoice', title: 'Proof of Address', desc: 'Copy of the latest electricity bill, telephone bill, or property tax bill of the registered office' },
  { icon: 'fa-money-check', title: 'Cancelled Cheque', desc: 'Cancelled bank cheque or copy of bank statement showing account number and IFSC details' },
  { icon: 'fa-stamp', title: 'Bank Certificate', desc: 'A bank certificate issued in the prescribed DGFT format (if required)' },
  { icon: 'fa-user-circle', title: 'Photograph', desc: 'Latest passport size photograph of the applicant' },
]

const nameRules = [
  { icon: 'fa-id-card', title: 'One PAN One IEC', desc: 'Only one IEC registration can be issued per PAN card. Duplicate applications will be rejected.' },
  { icon: 'fa-briefcase', title: 'Eligible Entities', desc: 'Proprietorships, Partnerships, LLPs, Private Limited Companies, HUFs, and Trusts are all eligible.' },
  { icon: 'fa-globe-asia', title: 'Annual Update', desc: 'IEC holders must update their details annually on the DGFT portal between April and June to keep it active.' }
]

const faqsList = [
  { q: 'What is an Import Export Code (IEC)?', a: 'Import Export Code (IEC) is a 10-digit identification number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce, Government of India. It is mandatory for importing or exporting goods and services from India.' },
  { q: 'Is IEC required for service exporters?', a: 'Yes, although not mandatory for all service providers, IEC is required if you want to claim fiscal benefits and incentives offered under the Foreign Trade Policy (FTP).' },
  { q: 'What is the validity of the IEC?', a: 'IEC registration has lifetime validity. You do not need to renew it. However, it is mandatory to update your IEC details on the DGFT portal once a year (between April and June).' },
  { q: 'Can a salaried person obtain an IEC?', a: 'Yes, any individual holding a valid PAN card and a current bank account can register for an Import Export Code, regardless of employment status.' },
  { q: 'What are the consequences of not updating IEC details annually?', a: 'If an IEC is not updated within the prescribed annual window, it will be deactivated by the DGFT. Once deactivated, the firm cannot engage in any import/export activity until it is updated and re-activated.' }
]

export default function ImportExportCode() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Pick Package & Details",
    "bullets": [
      "Select your preferred Import Export registration package",
      "Complete our short online inquiry form",
      "Provide digital copies of the checklist documents",
      "Complete the secure online payment"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Application Prep & Filing",
    "bullets": [
      "Our CA/CS team reviews your business papers",
      "We draft and prep the bank certificates",
      "We file the application on the official DGFT government portal"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Code Generation",
    "bullets": [
      "DGFT processes the application and issues your unique 10-digit IEC",
      "We deliver the digital IEC Certificate via email and WhatsApp"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Day 1",
    "bullets": [
      "Expert document analysis and validation",
      "Preparation of bank certificate drafts and authorizations",
      "Filing the formal online application on the DGFT system"
    ]
  },
  {
    "badge": "OK",
    "icon": null,
    "title": "Days 2 - 3",
    "bullets": [
      "Awaiting system clearance and government allocation",
      "IEC code issued, certified, and digitally delivered"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Import Export Code (IEC) Registration in India")}
      serviceName="Import Export Code"
      heroBg={"/hero-import-export.webp"}
      heroDesc={[
        t("Apply for IEC Registration and start your import-export business in 1 day. Directorate General of Foreign Trade (DGFT) government registration made easy with our expert team at Shivani Digital Hub. Get verified, hassle-free processing with zero hidden fees."),
        t("Unlock international markets with a lifetime valid Import Export Code. We file your application directly on the DGFT portal, upload bank and business proofs, and obtain your IEC certificate in a single day.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Import Export Code (IEC) Registration Services in India")}
      overviewParagraphs={[
        t("Import Export Code (IEC) is a 10-digit code required for anyone who wants to import or export goods and services from India. It is issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industries, Government of India. The primary objective of obtaining an Import Export Code is to gain entry into the global trading market. Businesses cannot carry out foreign trade transactions without a valid IEC registration."),
        t("Furthermore, our CS/CA-assisted service offers a 100% online, hassle-free procedure to register your firm for the Import Export Code. We assist you in gathering appropriate bank certificates, filing your online application on the DGFT portal, resolving any official objections, and ensuring your code is generated in a single business day.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why Should You Register an Import Export Code?")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for Online IEC Registration")}
      documents={documents}
      guidelinesBadge={t("Eligibility")}
      guidelinesTitle={t("Eligibility and Guidelines for IEC Applications")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Import Export Code in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
