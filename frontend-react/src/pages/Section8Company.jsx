import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-gavel', title: 'Highly Respected Legal Status', desc: 'Section 8 Companies carry the highest legal status among non-profits in India, surpassing traditional trusts and societies.' },
  { icon: 'fa-percent', title: '12A & 80G Tax Exemptions', desc: '100% tax-free income on charitable earnings under 12A, and 50% tax deductions for donors under Section 80G.' },
  { icon: 'fa-hand-holding-heart', title: 'CSR Funding Eligibility', desc: 'Eligible to receive corporate social responsibility (CSR) grants from corporate organizations in India.' },
  { icon: 'fa-shield-alt', title: 'Limited Liability Protection', desc: 'Members hold completely limited liability. Personal assets are protected if the non-profit faces legal/financial issues.' },
]

const documents = [
  { icon: 'fa-id-card', title: 'PAN of Directors/Promoters', desc: 'Copy of PAN Card of all proposed directors and promoters (minimum 2 designated individuals).' },
  { icon: 'fa-id-card-alt', title: 'Identity Proof of Directors', desc: 'Aadhaar Card, Passport, Voter ID, or Driving License of all proposed directors.' },
  { icon: 'fa-file-invoice-dollar', title: 'KYC Address Proof', desc: 'Latest bank statement, electricity bill, or mobile bill of all proposed directors.' },
  { icon: 'fa-building', title: 'Registered Office Proof', desc: 'Copy of utility bill (electricity, water, or gas) of the office location.' },
  { icon: 'fa-handshake', title: 'Rent Agreement & NOC', desc: 'Registered rent agreement and No Objection Certificate (NOC) signed by the landlord.' },
  { icon: 'fa-hands-helping', title: 'NGO Charitable Objectives', desc: 'Detailed write-up of the non-profit, educational, social, or charitable vision of the NGO.' },
]

const nameRules = [
  { icon: 'fa-ban', title: 'Pure Non-Profit Objective', desc: 'All surplus funds and profits must be reinvested in NGO objects. No dividend distribution is allowed to members.' },
  { icon: 'fa-file-signature', title: 'Central Govt License Required', desc: 'Prior approval of the Central Government (INC-12 License) is required to operate without suffixes like Ltd/Pvt Ltd.' },
  { icon: 'fa-percent', title: 'CSR & Darpan Portal setup', desc: 'Eligible for direct registration under Niti Aayog Darpan and CSR-1 portals for easy institutional fundraising.' }
]

const faqsList = [
  { q: 'What is a Section 8 Company?', a: 'A Section 8 Company is a corporate non-profit organization registered under the Companies Act, 2013, established for promoting art, science, sports, education, charity, environmental protection, or religion. All profits/surplus must be reinvested solely into promoting these objectives.' },
  { q: 'How many directors and members are required to start?', a: 'A minimum of 2 directors and 2 members are required to incorporate a Section 8 Company in India. Directors and members can be the same individuals.' },
  { q: 'Can a Section 8 Company pay dividends to its members?', a: 'No, a Section 8 Company is legally prohibited from paying any dividends or profit distributions to its members or directors. All surplus funds must be used for charitable objectives.' },
  { q: 'What are 12A and 80G registrations?', a: '12A registration exempts the non-profit\'s internal charitable income from tax. 80G registration allows donors to claim a 50% tax deduction on their donations, which is highly beneficial for fundraising.' },
  { q: 'Can a Section 8 Company be converted into a normal company?', a: 'Yes, a Section 8 Company can be converted into a normal private or public limited company after obtaining a central government approval and complying with special winding-up guidelines.' }
]

export default function Section8Company() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Frame vision & objectives",
    "bullets": [
      "Decide a unique name representing your social, charitable vision",
      "Draft a clean list of objectives and upload promoter Kyc paperwork",
      "Initialize secure registration online"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. DSC Allocation & License application",
    "bullets": [
      "We secure DSC (Digital Signatures) and DIN for all promoters",
      "Our legal team drafts the specialized NGO MOA/AOA (INC-13)",
      "File Central Government license Form INC-12 to secure non-profit recognition"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. ROC SPICe+ filing & delivery",
    "bullets": [
      "We submit unified SPICe+ Part B incorporation forms",
      "Obtain official Certificate of Incorporation (COI), PAN, and TAN",
      "Delivered directly online so you can open your current bank account"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 3",
    "bullets": [
      "Securing DSC for directors and name approvals",
      "Drafting non-profit objects in MoA (INC-13) and AoA"
    ]
  },
  {
    "badge": "Govt",
    "icon": null,
    "title": "Days 4 - 8",
    "bullets": [
      "Filing Form INC-12 with Central Government MCA Regional Director",
      "Tracking processing and obtaining Section 8 License"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Days 9 - 12",
    "bullets": [
      "Filing unified incorporation SPICe+ forms",
      "Receiving Certificate of Incorporation (COI), PAN, and TAN"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Section 8 Company Incorporation (Non-Profit NGO)")}
      serviceName="Section 8 NGO Registration"
      heroBg={"/section8_hero_bg.webp"}
      heroDesc={[
        t("Incorporate your Section 8 NGO under complete professional guidance. Get name approval, Section 8 License (INC-12), drafting of MOA/AOA, DSC, DIN, and Tax-Exempt (12A & 80G) certification with zero hassle."),
        t("Establish a non-profit organization or foundation under corporate guidelines. We handle the Section 8 License application, draft charity-focused MOA/AOA, obtain DSC/DIN, and assist in 12A & 80G tax exemption registrations.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding Section 8 Company")}
      overviewParagraphs={[
        t("A Section 8 Company is a highly structured, corporate-level non-profit organization registered under Section 8 of the Indian Companies Act, 2013. It is established to promote art, science, sports, commerce, research, education, social welfare, charity, environmental protection, or religion. Crucially, a Section 8 Company must reinvest all profits, earnings, or surplus revenues solely into promoting its charitable objectives, and it is strictly prohibited from paying any dividends, returns, or bonuses to its directors or members."),
        t("Compared to traditional non-profit frameworks (like Charitable Trusts or Registered Societies), a Section 8 Company holds the highest institutional trust, transparent corporate structure, and compliance status. This status makes it the primary choice for international grants, corporate donations under Corporate Social Responsibility (CSR) laws, and large-scale government funding.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Key Benefits of a Section 8 Company")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Checklist for Section 8 NGO")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("Section 8 Guidelines & NGO Regulations")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Section 8 NGO Registration in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
