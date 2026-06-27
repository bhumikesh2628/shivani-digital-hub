import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Complete Tax Compliance', desc: 'Operate in perfect accordance with Income Tax laws, avoiding costly penalty notices and audits.' },
  { icon: 'fa-hand-holding-usd', title: 'Quick Tax Refunds Claims', desc: 'Claim refund of excess taxes paid or deducted as TDS on salary, interest, or business receipts.' },
  { icon: 'fa-landmark', title: 'Easy Loan & Visa Approvals', desc: 'ITR receipts are mandatory documents for getting banks loans (home/car) and visa processing.' },
  { icon: 'fa-coins', title: 'Loss Carry Forward Benefits', desc: 'Legally carry forward business, stock trading, or house property losses to offset future income taxes.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'PAN and Aadhaar Card', desc: 'PAN Card and Aadhaar Card of the tax applicant (mandatory for link and verification)' },
  { icon: 'fa-file-invoice', title: 'Form 16 / Form 16A', desc: 'Salary tax certificates issued by employers or tax deduction receipts (TDS)' },
  { icon: 'fa-university', title: 'Bank Statements', desc: 'All active bank statements for the respective financial year (April 1 to March 31)' },
  { icon: 'fa-piggy-bank', title: 'Investment Proofs', desc: 'LIC premium, PPF, mutual funds (ELSS), NPS, medical insurance, and home loan certificates' },
  { icon: 'fa-chart-line', title: 'Capital Gains Statement', desc: 'Share trading, mutual fund transactions, or property sale deeds' },
  { icon: 'fa-folder-open', title: 'Form 26AS & AIS / TIS', desc: 'Annual Information Statements downloaded from the Income Tax portal' },
]

const nameRules = [
  { icon: 'fa-user', title: 'ITR-1 (Sahaj)', desc: 'For resident individuals with salary, one house property, and interest income < ₹50 Lakhs.' },
  { icon: 'fa-briefcase', title: 'ITR-4 (Sugam)', desc: 'For presumptive business income under Section 44AD / 44ADA up to ₹50 Lakhs.' },
  { icon: 'fa-calendar-alt', title: 'Filing Due Dates', desc: 'Generally July 31 for individuals, and October 31 for audit-mandated business corporate cases.' }
]

const faqsList = [
  { q: 'What is Income Tax Return (ITR) Filing?', a: 'Income Tax Return is a standard form filed by a taxpayer declaring their annual income, assets, tax saving investments, and taxes paid to the Income Tax Department under the provisions of the Income Tax Act, 1961.' },
  { q: 'Who is required to file an ITR?', a: 'Filing ITR is mandatory for any individual whose gross annual income exceeds the basic exemption limit (currently ₹2.5 Lakhs in old tax regime or ₹3 Lakhs in new tax regime), or if you want to claim refunds or carry forward losses.' },
  { q: 'What are the benefits of filing ITR?', a: 'Filing ITR creates a strong financial track record, facilitates easy approvals of bank loans (home/personal), helps in international visa processing, allows you to carry forward financial losses, and claims tax refunds.' },
  { q: 'What is presumptive taxation under Section 44AD and 44ADA?', a: 'Presumptive taxation allows small business owners (under 44AD) and professionals (under 44ADA) to declare income at a fixed presumptive rate (8%/6% for business turnover, 50% for professional receipts) without maintaining complex account balance books.' },
  { q: 'What is the penalty for filing late?', a: 'Filing ITR after the July 31 deadline attracts a late fee under Section 234F up to ₹5,000 (restricted to ₹1,000 if total income is < ₹5 Lakhs), along with interest on unpaid tax liability.' }
]

export default function IncomeTaxReturn() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Pick Plan & Upload Data",
    "bullets": [
      "Select your preferred ITR filing plan (Salary, Business, Corporate)",
      "Upload Form 16, bank statements, and deduction documents",
      "Complete secure payment"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Tax Computation & Review",
    "bullets": [
      "Our senior tax accountants review your income profiles",
      "We maximize deductions and savings, computing final taxable values",
      "We draft the proper ITR form and send it for your approval"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Filing & E-Verification",
    "bullets": [
      "We file the approved return on the official e-filing portal",
      "We coordinate the Aadhaar OTP e-verification",
      "The official ITR-V acknowledgment is sent directly to you"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Day 1",
    "bullets": [
      "Detailed analysis of AIS/TIS and Form 26AS data",
      "Drafting proper tax calculations, deductions, and savings",
      "Preparation of ITR draft forms"
    ]
  },
  {
    "badge": "OK",
    "icon": null,
    "title": "Day 2",
    "bullets": [
      "Return filing on Income Tax e-filing portal",
      "Generating official ITR-V filing acknowledgment",
      "Coordinating Aadhaar OTP e-verification to complete the process"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Income Tax Return (ITR) Filing Services")}
      serviceName="Income Tax Return"
      heroBg={"/hero-income-tax.webp"}
      heroDesc={[
        t("File Income Tax return online with us. Hassle-free process to file ITR, optimize tax savings, claim refunds, and carry forward capital losses under expert guidance from Shivani Digital Hub."),
        t("Plan and file your personal or corporate taxes with maximum efficiency. Our chartered accountants identify tax saving deductions (80C, 80D, etc.), file the correct ITR form, and expedite tax refund processing.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Income Tax Return (ITR) Filing Services")}
      overviewParagraphs={[
        t("Income Tax Return (ITR) filing is a mandatory annual legal compliance process under the Income Tax Act, 1961, for individuals, professionals, HUFs, partnership firms, and corporate entities whose annual taxable income exceeds the basic exemption thresholds. It serves as a comprehensive record of your active earnings, investments, tax payments, and refunds."),
        t("Our professional CA Assisted tax consultancy makes filing highly optimized and effortless. We manage salary returns (Form 16/16A matching), presumptive business tax filings (under Section 44AD/ADA), complex capital gains calculations (shares, mutual funds, real estate sales), and corporate filing obligations, securing maximum deductions under Section 80C/80D and fast refund generation.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why Should You File Your Income Tax Return?")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for Online ITR Filing")}
      documents={documents}
      guidelinesBadge={t("ITR Categories")}
      guidelinesTitle={t("Income Tax Return Form Selection Guidelines")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Income Tax Return in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
