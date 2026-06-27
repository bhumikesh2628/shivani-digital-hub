import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Exclusive Brand Protection', desc: 'Obtain full legal rights over your logo, brand name, and taglines. Restrict competitors from copying.' },
  { icon: 'fa-chart-line', title: 'Asset Valuation & Growth', desc: 'Registered trademarks are valuable intangible intellectual assets that can be sold, franchised, or licensed.' },
  { icon: 'fa-briefcase', title: 'Global Registration Ready', desc: 'A registered Indian trademark forms a solid legal base for registering your brand internationally.' },
  { icon: 'fa-gavel', title: 'Legal Remedy for Infringement', desc: 'Legally take strict action and claim financial damages from competitors who infringe on your brand.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'PAN and Aadhaar Card', desc: 'PAN Card and Aadhaar Card of the individual applicant, partners, or directors' },
  { icon: 'fa-image', title: 'Brand Logo / Tagline', desc: 'High resolution soft copy of your logo, brand name, symbol, or tagline' },
  { icon: 'fa-file-contract', title: 'Power of Attorney (POA)', desc: 'Signed authorization document drafted and prepared by our legal team' },
  { icon: 'fa-certificate', title: 'MSME Certificate', desc: 'Required for LLPs & Companies to claim a 50% discount on government filing fees' },
  { icon: 'fa-file-alt', title: 'User Affidavit', desc: 'Signed declaration if the brand has been used prior to the application date' },
  { icon: 'fa-building', title: 'Incorporation Certificate', desc: 'Required in case of Partnership Firm, LLP, Company, or Trust applicants' },
]

const nameRules = [
  { icon: 'fa-font', title: 'Distinct Brand Name', desc: 'Choose a distinctive and unique brand name that does not describe your products directly.' },
  { icon: 'fa-sitemap', title: 'Trademark Classes', desc: 'Select the correct class out of the 45 international trademark classes representing goods/services.' },
  { icon: 'fa-ban', title: 'Avoid Generic Terms', desc: 'Avoid using geographical names, common words, surnames, or words similar to existing registrations.' }
]

const faqsList = [
  { q: 'What is Trademark Registration?', a: 'Trademark registration is a legal process under the Trademarks Act, 1999, which provides exclusive ownership rights of a brand name, logo, or slogan to the applicant, preventing others from using similar marks.' },
  { q: 'Can I start using the TM symbol immediately?', a: 'Yes, once you file the Form TM-A application and receive the official filing receipt, you can immediately start using the "TM" symbol beside your logo. You can only use the "R" symbol after the registration certificate is issued.' },
  { q: 'What is the validity of a Trademark?', a: 'A registered trademark is valid for a period of 10 years from the date of application. It can be renewed indefinitely every 10 years by paying the renewal fee.' },
  { q: 'What is a Trademark Objection?', a: 'During processing, the Trademark Examiner may raise objections if they find the mark is descriptive, generic, offensive, or highly similar to an already registered mark. A legal reply must be filed within 30 days.' },
  { q: 'Why is an MSME Certificate important for Trademark registration?', a: 'The government filing fee for an individual trademark is ₹4,500. However, for a company, it is ₹9,000. If a company has a valid MSME certificate, they get a 50% discount, reducing the government fee to ₹4,500.' }
]

export default function TrademarkServices() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Brand Search & Package",
    "bullets": [
      "Pick the appropriate registration package",
      "Submit your brand name, tagline, or logo softcopy",
      "Our legal experts perform a comprehensive public search",
      "Complete the secure payment"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Legal Drafting & Filing",
    "bullets": [
      "We draft the formal Power of Attorney (POA) document",
      "We identify the correct trade classes representing your brand",
      "We file the Form TM-A application on the IP India portal"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Start Using \"TM\" Symbol",
    "bullets": [
      "We provide you the official filing receipt in 1-2 days",
      "You can legally start using the \"TM\" symbol immediately"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Comprehensive public search in trademark database",
      "Drafting Power of Attorney (POA) and user affidavit (if applicable)"
    ]
  },
  {
    "badge": "OK",
    "icon": null,
    "title": "Days 3 - 4",
    "bullets": [
      "Form TM-A filing with government fee payment",
      "Filing receipt generated and \"TM\" status active"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Months 18 - 24",
    "bullets": [
      "Awaiting examiner check and publication in Trademark Journal",
      "Final Registration Certificate issued and \"R\" symbol active"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Trademark Registration Services in India")}
      serviceName="Trademark Services"
      heroBg={"/hero-trademark.webp"}
      heroDesc={[
        t("Protect your Brand Name, Logo, and Slogan by doing trademark registration at nominal cost. Expert CA/CS drafting, TM-A filing, objection response, and renewals supported by Shivani Digital Hub."),
        t("Build a unique identity and prevent others from copying your business logo, name, or slogan. We conduct a free trademark search, identify correct classes, and file your TM application so you can use the ™ symbol immediately.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Trademark Registration & Objection Services in India")}
      overviewParagraphs={[
        t("A trademark is a unique visual symbol, logo, signature, name, device, label, numerical, or combination of colors used by an enterprise to distinguish its goods or services from other similar products in the marketplace. It is regulated under the Trade Marks Act, 1999. Registering your trademark grants exclusive legal ownership rights to use the brand and prevents unauthorized copycats or infringements."),
        t("Our professional CA/CS and legal team handles the complete brand protection lifecycle. We conduct comprehensive trademark database searches, select the proper classes out of the 45 available categories, draft Form TM-A, prepare necessary Power of Attorney files, and file the application to generate the immediate \"TM\" symbol status. We also provide robust objection replies to Section 9/11 examination reports.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why Should You Register a Trademark?")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for Online Trademark Filing")}
      documents={documents}
      guidelinesBadge={t("Rules")}
      guidelinesTitle={t("Guidelines for Selecting a Trademark Name")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Trademark Services in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
