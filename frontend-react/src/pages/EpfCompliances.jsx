import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const plans = [
  {
    name: 'Basic Registration Plan', price: '₹2,999', featured: false,
    features: ['Official EPF Employer Registration', 'Permanent EPF Establishment Code', 'Allotment of Shram Suvidha Portal credentials', 'UAN creation support for active staff', 'Expert advice by Professional CA/CS', '100% Online process']
  },
  {
    name: 'Standard Monthly Compliance Plan', price: '₹1,499/month', featured: true,
    features: ['Monthly EPF return filing (Form 12A)', 'ECR (Electronic Challan-cum-Return) generation', 'Addition of new members and exits updating', 'UAN activation and employee KYC linking', 'Dedicated Relationship Manager', 'Compliance audit tracking']
  },
  {
    name: 'Premium Labor Compliance Combo', price: '₹2,499/month', featured: false,
    features: ['Complete EPF & ESI registration and filings', 'Monthly ESI returns and challan generation', 'ESI medical card allotment support', 'Monthly ECR filing and wage reconciliation', 'Labor law compliance advisory', 'Dedicated CA/CS Relationship Manager']
  },
]

const advantages = [
  { icon: 'fa-shield-alt', title: '100% Statutory Compliance', desc: 'Avoid heavy penalties, interest charges, and legal litigation under the Employees Provident Fund & Miscellaneous Provisions Act, 1952.' },
  { icon: 'fa-heart', title: 'Employee Financial Security', desc: 'Build employee loyalty and trust by offering long-term retirement savings, pension schemes, and employee life insurance options.' },
  { icon: 'fa-percentage', title: 'Tax Benefits for Employer', desc: 'Contributions made by the employer towards the employee\'s provident fund are tax-deductible business expenses under Section 36.' },
  { icon: 'fa-hand-holding-usd', title: 'Easy Access to Employee Loans', desc: 'Registered employees can withdraw advances or take low-interest personal loans against their EPF balance for education, medical needs, or housing.' },
]

const documents = [
  { icon: 'fa-building', title: 'Business Registration Proof', desc: 'Certificate of Incorporation (COI), Partnership Deed, GST certificate, or Shop & Establishment License.' },
  { icon: 'fa-id-card', title: 'PAN and Aadhaar Card', desc: 'PAN and Aadhaar Card of the business proprietor, partners, or directors.' },
  { icon: 'fa-file-invoice', title: 'Office Address Proof', desc: 'Electricity bill, telephone bill, or property tax bill of the registered office location, along with Rent Agreement or NOC if rented.' },
  { icon: 'fa-money-check', title: 'Bank Cancelled Cheque', desc: 'Cancelled cheque or bank statement of the registered business current account.' },
  { icon: 'fa-users', title: 'Employee Directory', desc: 'List of all active employees showing date of joining, basic salary, Aadhaar, PAN, and bank details.' },
]

const nameRules = [
  { icon: 'fa-users-cog', title: '20+ Employees Mandated', desc: 'Any business establishment reaching 20 or more employees (including contract labor) must register for EPF within 30 days.' },
  { icon: 'fa-handshake', title: 'Voluntary EPF Allotment', desc: 'Firms with less than 20 employees can register voluntarily with mutual agreement between the employer and employees.' },
  { icon: 'fa-coins', title: '12% Contribution Rule', desc: 'A mandatory contribution of 12% of basic salary + DA is paid by the employer, and an equal 12% is deducted from the employee.' }
]

const faqsList = [
  { q: 'What is Employees\' Provident Fund (EPF)?', a: 'EPF is a social security scheme introduced under the Employees\' Provident Fund and Miscellaneous Provisions Act, 1952. It is managed by the EPFO (Employees\' Provident Fund Organisation) and is designed to provide retirement, pension, and life insurance benefits to workers.' },
  { q: 'When does a business need to register for EPF?', a: 'EPF registration is mandatory for any commercial establishment, factory, or corporate entity that employs 20 or more people. The registration must be completed within 30 days of reaching the 20-employee threshold.' },
  { q: 'Can a firm with less than 20 employees obtain registration?', a: 'Yes. An establishment with fewer than 20 employees can register voluntarily under Section 1(4) of the EPF Act, provided the employer and the majority of the employees submit a mutual consent agreement.' },
  { q: 'What is a UAN (Universal Account Number)?', a: 'The Universal Account Number (UAN) is a unique 12-digit number allocated by EPFO to every registered employee. It remains constant throughout the employee\'s career, even when changing companies, making it easy to transfer PF balances.' },
  { q: 'What are the penalties for delayed EPF filings?', a: 'Delayed monthly filings attract interest charges under Section 7Q (12% per annum) and damages under Section 14B (ranging from 5% to 25% per annum based on the duration of the delay).' }
]

export default function EpfCompliances() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Upload Details & Pay",
    "bullets": [
      "Choose a customized EPF registration or monthly compliance plan",
      "Securely submit business registration details & employee rosters",
      "Complete the online payments via our secure gateway"
    ]
  },
  {
    "badge": null,
    "icon": "fa-file-signature",
    "title": "2. Portal Filing & Processing",
    "bullets": [
      "Our legal compliance team audits and formats all worker rosters",
      "We draft and submit the registration on the Shram Suvidha / EPFO portal",
      "Our team tracks code allotment status & updates you regularly"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Code Allotment & Return filings",
    "bullets": [
      "Official EPF establishment registration code is successfully generated",
      "We set up monthly ECR returns filing, challan creation, and KYC tracking"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-user-edit",
    "title": "Days 1 - 3",
    "bullets": [
      "Validating business PAN, DSC, and registration documents",
      "Formatting employee rosters, basic salaries, and Aadhaar links"
    ]
  },
  {
    "badge": "EPF",
    "icon": null,
    "title": "Days 4 - 7",
    "bullets": [
      "Filing the formal employer registration application on EPFO portal",
      "Uploading digital signatures (DSC) and business certificates"
    ]
  },
  {
    "badge": null,
    "icon": "fa-certificate",
    "title": "Days 8 - 10",
    "bullets": [
      "EPF Establishment Code Allotment letter issued by EPFO",
      "Portal credentials compiled, ready for monthly ECR files & UAN additions"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online EPF Registration & Monthly Return Filing")}
      serviceName="EPF Compliances"
      heroBg={"/hero-epf-esi.webp"}
      heroDesc={[
        t("Register your business under the Employees\\' Provident Fund Act with ease. Streamline your monthly ECR filing, challan creation, labor compliances, and audits with the certified payroll experts at Shivani Digital Hub."),
        t("Stay fully compliant with EPF regulations and avoid heavy interest penalties. We handle your employee registration, monthly contribution calculations, ECR file generation, and provide timely updates on regulatory changes.")
      ]}
      overviewBadge={t("Overview")}
      overviewTitle={t("About EPF Registration & Monthly Compliance")}
      overviewParagraphs={[
        t("The Employees\\' Provident Fund (EPF) is a core social security framework governed by the EPFO in India. The law mandates that any firm, factory, or commercial office with 20 or more workers must obtain an EPF code and actively contribute towards employee retirement benefits. For entities with fewer than 20 employees, voluntary registration remains an option to build employee goodwill and benefits programs."),
        t("Post-registration, employers must file monthly electronic returns (ECR/Electronic Challan-cum-Return) by the 15th of every month, detailing salaries, allowances, and contribution amounts. Handling EPF calculations, wage splits, and compliance can be highly time-consuming. At Shivani Digital Hub, our dedicated payroll CAs manage your registrations, monthly filings, UAN allocations, KYC mappings, and audits flawlessly, letting you focus on your core business operations.")
      ]}
      benefitsBadge={t("Advantages")}
      benefitsTitle={t("Key Advantages of EPF Establishment Registration")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Required Documents for EPF Registration")}
      documents={documents}
      guidelinesBadge={t("Compliance Rules")}
      guidelinesTitle={t("Essential EPF Guidelines & Wage Limits")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("EPF Compliances in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      plans={plans}
    />
  )
}
