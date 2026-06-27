import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-eye', title: 'Absolute Transparency', desc: 'Obtain official documents, delays reasons, answer scripts, property files, or maps directly from public offices.' },
  { icon: 'fa-shield-alt', title: 'Citizen Empowerment', desc: 'RTI is a powerful democratic legal tool that guarantees citizens access to public records and administration answers.' },
  { icon: 'fa-gavel', title: 'Administrative Resolution', desc: 'Helpful in solving personal pending issues like passport delays, pension payouts, or municipal road works.' },
  { icon: 'fa-feather-alt', title: 'Legal & Administrative Proof', desc: 'RTI responses are certified official government documents that hold absolute weight as proof in courts.' },
]

const documents = [
  { icon: 'fa-id-card', title: 'Identity Proof', desc: 'Aadhaar Card, PAN Card, or Passport of the applicant (required by law)' },
  { icon: 'fa-question-circle', title: 'List of Questions', desc: 'Clear, specific details or questionnaire regarding the information you want to receive' },
  { icon: 'fa-home', title: 'Address Proof', desc: 'Copy of electricity bill, telephone bill, or voter ID showing address for correspondence' },
  { icon: 'fa-folder-open', title: 'Supporting Papers', desc: 'Any past applications, orders, letters, or notifications related to your query' },
  { icon: 'fa-envelope-open-text', title: 'Previous RTI (For Appeals)', desc: 'Copy of the original RTI filed and the rejection letter (only required for filing Appeals)' },
]

const nameRules = [
  { icon: 'fa-university', title: 'Public Authorities Only', desc: 'RTI applications can only be filed to government ministries, departments, municipalities, or government banks.' },
  { icon: 'fa-ban', title: 'No Private Organizations', desc: 'Private corporations, non-funded NGOs, and private individuals do not fall under the purview of the RTI Act.' },
  { icon: 'fa-history', title: 'Statutory 30-Day Window', desc: 'The designated Public Information Officer (PIO) is legally bound to reply to your RTI query within 30 days.' }
]

const faqsList = [
  { q: 'What is RTI Filing?', a: 'RTI stands for Right to Information. Under the RTI Act, 2005, any Indian citizen has the legal right to ask for information from any government office, ministry, department, or state-funded institution.' },
  { q: 'What kind of information can I seek through RTI?', a: 'You can ask for copies of official documents, circulars, files notes, contracts, tender details, status of civic work, answer key checks, delay reports on passport/pension, and much more.' },
  { q: 'Is there a timeline for getting the information?', a: 'Yes, the Public Information Officer (PIO) is legally mandated to provide the information within 30 days from the date of receipt of the application (35 days in case it is transferred to another department).' },
  { q: 'What if the department rejects or ignores my RTI?', a: 'If you receive no reply within 30 days, or if the reply is incomplete or incorrect, you can file a First Appeal within 30 days to the senior Appellate Authority. If that fails, a Second Appeal can be filed to the Information Commission.' },
  { q: 'Can I file an RTI against a private company?', a: 'No, private companies do not fall under the RTI Act. However, you can file an RTI to a government regulator (like RBI, SEBI, TRAI) requesting information regarding a private company that they have in their records.' }
]

export default function RtiFiling() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Frame Your Questionnaire",
    "bullets": [
      "Select your preferred RTI service package",
      "Submit your ID copy and specific queries or questions",
      "Complete secure payment"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Drafting & Authority Match",
    "bullets": [
      "Our legal team reviews and structures the questionnaire list",
      "We identify the exact Public Information Officer (PIO) and target department",
      "We file the application and complete portal processing"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Receipt Delivery & Track",
    "bullets": [
      "We deliver the official government portal receipt and registration number",
      "We monitor the 30-day statutory reply window and assist in analyzing the data"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Analyzing questions and matching correct Public Authority department",
      "Drafting precise questionnaire under the guidelines"
    ]
  },
  {
    "badge": "OK",
    "icon": null,
    "title": "Day 3",
    "bullets": [
      "Filing on Central/State RTI system with ₹10 application fee",
      "Delivering formal receipt copy for your tracking"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Day 30",
    "bullets": [
      "Statutory timeline for PIO reply",
      "First Appeal filing (if ignored or rejected)"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online RTI Application & Appeal Filing Services")}
      serviceName="RTI Filing"
      heroBg={"/hero-rti-filing.webp"}
      heroDesc={[
        t("File RTI online and get details from any government department in India. We help you draft, identify correct public authorities, submit, and file Appeals under the RTI Act, 2005."),
        t("Exercise your constitutional right to information securely and easily. We draft precise queries, submit them online or offline to correct departments, and assist in filing first and second appeals if answers are delayed.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Right to Information (RTI) Application Services")}
      overviewParagraphs={[
        t("The Right to Information (RTI) Act, 2005, is an landmark legislation enacted by the Parliament of India that grants citizens the democratic right to access records, files, information, answers, and data held by public offices and government bodies. Filing a precise, clear RTI is crucial to get targeted answers from departments without getting rejected under administrative exemptions."),
        t("Our professional CA/CS and legal team helps you draft a highly structured questionnaire to avoid evasive answers from government officials. We assist in identifying the exact Public Information Officer (PIO) and department responsible, file the application online, handle ARN tracking, and coordinate first appeals if they ignore or reject your query.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why File an RTI Application?")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Checklist for Online RTI filing")}
      documents={documents}
      guidelinesBadge={t("Rules")}
      guidelinesTitle={t("RTI Act Scope & Public Office Rules")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("RTI Filing in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
