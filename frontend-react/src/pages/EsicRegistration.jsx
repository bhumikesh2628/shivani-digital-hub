import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-hand-holding-medical', title: 'Full Medical Protection', desc: 'Provides unlimited, high-quality medical care benefits for employees and their dependent family members.' },
  { icon: 'fa-wheelchair', title: 'Sickness & Disability Pay', desc: 'Offers continuous cash payout compensations during temporary or permanent sickness and workplace disability.' },
  { icon: 'fa-baby', title: 'Paid Maternity Benefits', desc: 'Grants fully paid leaves and comprehensive healthcare support for pregnant female employees for up to 26 weeks.' },
  { icon: 'fa-user-shield', title: '100% Statutory Compliance', desc: 'Establishes absolute compliance with labor laws, avoiding legal audits, heavy penalties, or prosecution.' },
]

const documents = [
  { icon: 'fa-file-invoice', title: 'Business Registration Proof', desc: 'Certificate of Incorporation (COI), Partnership Deed, Shop & Establishment license, or GST certificate.' },
  { icon: 'fa-map-marker-alt', title: 'Establishment Address Proof', desc: 'Recent utility bill (electricity/telephone), registered rent agreement, or property tax receipt.' },
  { icon: 'fa-id-card', title: 'Promoter PAN & Aadhaar', desc: 'PAN Card and Aadhaar Card copies of all business proprietors, partners, or active directors.' },
  { icon: 'fa-users', title: 'Employee Roll & Joining Deeds', desc: 'List of all employees with their names, Aadhaar numbers, date of joining, and gross monthly salaries.' },
]

const nameRules = [
  { icon: 'fa-users-cog', title: '10+ Employees Threshold', desc: 'Mandatory for any factory, business establishment, shop, or company employing 10 or more staff members.' },
  { icon: 'fa-wallet', title: 'Rs. 21,000 Wage Limit', desc: 'Covers all employees whose gross monthly wages/salary is up to Rs. 21,000 (Rs. 25,000 for persons with disabilities).' },
  { icon: 'fa-percentage', title: 'Contribution Rates', desc: 'Monthly contributions consist of 3.25% of wages paid by the employer and 0.75% paid by the employee (4.0% total).' }
]

const faqsList = [
  { q: 'What is ESIC Registration?', a: 'ESIC (Employees State Insurance Corporation) registration is a mandatory social security scheme in India that provides medical, sickness, maternity, and disability benefits to employees.' },
  { q: 'Is ESIC registration mandatory for all businesses?', a: 'It is mandatory for any commercial establishment, shop, hotel, restaurant, office, or factory that employs 10 or more workers earning up to Rs. 21,000 per month.' },
  { q: 'What is the gross monthly salary threshold under ESIC?', a: 'Any employee whose gross monthly wage is Rs. 21,000 or below must be registered under ESIC. If an employee earns more than Rs. 21,000, they are excluded from ESIC.' },
  { q: 'What are the current ESIC contribution rates?', a: 'The contribution rates are 4% of the employee\'s gross salary in total—consisting of 3.25% contributed by the employer and 0.75% contributed by the employee.' },
  { q: 'What happens if a business fails to register under ESIC?', a: 'Non-registration or delayed payment of monthly ESIC dues attracts heavy compounding interest, late payment penalties, and potential imprisonment under the ESI Act.' }
]

export default function EsicRegistration() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. KYC Data & Employee Roster Upload",
    "bullets": [
      "Submit establishment registration documents and address proof",
      "Upload your active employee roster with gross salary structures",
      "Initialize secure compliance profile setup"
    ]
  },
  {
    "badge": null,
    "icon": "fa-file-contract",
    "title": "2. Portal Filing & Verification",
    "bullets": [
      "Our legal compliance experts draft and file the online ESIC application",
      "Map employee details and associate Aadhaar/bank listings",
      "Complete portal pre-submission verification"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. ESIC Code & Pehchan Card Delivery",
    "bullets": [
      "Acquire the official 17-digit ESIC Establishment Code Number",
      "Deliver Pehchan (identity) details and ESI cards to registered employees",
      "Complete initial compliance onboarding training for monthly filings"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Validation of factory/shop licenses, business registration, and address proof",
      "Reviewing employee rosters, wage limits, and promoter Aadhaar links"
    ]
  },
  {
    "badge": "ESI",
    "icon": null,
    "title": "Days 3 - 4",
    "bullets": [
      "Filing the formal registration application on the ESIC online portal",
      "Receiving the official 17-digit ESIC code and issuing Pehchan cards"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online ESIC Registration Services")}
      serviceName="ESIC Registration"
      heroBg={"/esic_registration_hero_bg.webp"}
      heroDesc={[
        t("Enroll your business under the ESI social security scheme online. Secure robust medical, maternity, and sickness coverage for your employees, and achieve 100% labor law compliance."),
        t("Provide essential healthcare benefits to your workforce through ESIC registration. We manage employer enrollment, employee sub-code generation, monthly contribution filings, and ensure ESIC compliance documentation is in place.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding ESIC Registration")}
      overviewParagraphs={[
        t("The Employees State Insurance (ESI) scheme is a comprehensive, multi-dimensional social security system governed by the ESI Act, 1948. It is designed to provide complete medical protection and financial security to employees in the organized sector against distress caused by sickness, temporary or permanent physical disablement, maternity, or occupational injury."),
        t("Under labor laws, any shop, commercial office, restaurant, hotel, or factory employing 10 or more staff members earning up to Rs. 21,000 per month must register with the ESIC portal within 15 days of eligibility. This registration establishes a formal security network for employees while shielding employers from legal non-compliance penalties. Our labor law compliance managers prepare your document deeds, manage portal submissions, and obtain your official 17-digit ESIC Code Number.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Key Advantages of ESIC Enrollment")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Checklist for ESIC Registration")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("ESI Portal Registration Guidelines")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("ESIC Registration in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
