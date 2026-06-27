import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-coins', title: 'Thrift & Savings Habit', desc: 'Promotes thrift, savings, and mutual benefit habits specifically among its local and registered members.' },
  { icon: 'fa-shield-alt', title: 'Exempted from RBI', desc: 'Enjoys major exemptions from stringent RBI regulations that usually apply to typical NBFCs.' },
  { icon: 'fa-landmark', title: 'Separate Legal Identity', desc: 'A registered Nidhi is a body corporate with perpetual succession, able to hold property and sue in its own name.' },
  { icon: 'fa-lock', title: 'Secured Lending only', desc: 'Provides loans only against solid, low-risk collateral such as gold, property, or fixed deposits.' },
]

const documents = [
  { icon: 'fa-id-card', title: 'PAN of Directors & Members', desc: 'Copy of PAN Card of all proposed directors (minimum 3) and members (minimum 7) (mandatory).' },
  { icon: 'fa-id-card-alt', title: 'Identity Proof', desc: 'Aadhaar Card, Passport, Voter ID, or Driving License of all proposed directors and members.' },
  { icon: 'fa-file-invoice-dollar', title: 'KYC Address Proof', desc: 'Latest bank statement, electricity bill, or mobile bill of all proposed directors.' },
  { icon: 'fa-building', title: 'Registered Office Proof', desc: 'Copy of utility bill (electricity, water, or gas) of the office location.' },
  { icon: 'fa-handshake', title: 'Rent Agreement & NOC', desc: 'Registered rent agreement and No Objection Certificate (NOC) signed by the landlord.' },
  { icon: 'fa-file-signature', title: 'Bylaws & Lending Rules', desc: 'Customized rules and mutual benefit bylaws outlining borrowing/lending covenants.' },
]

const nameRules = [
  { icon: 'fa-users', title: 'Member-Only Borrowing Rules', desc: 'Lending and deposit operations are strictly restricted to registered members. Public dealings are prohibited.' },
  { icon: 'fa-shield-alt', title: 'Collateral Security Lending', desc: 'Loans can only be granted against secured collateral like gold, silver, property, or government bonds.' },
  { icon: 'fa-font', title: 'Net Owned Funds Requirements', desc: 'Must achieve at least 200 members and ₹10 Lakhs Net Owned Funds (NOF) within 1 year of incorporation.' }
]

const faqsList = [
  { q: 'What is a Nidhi Company?', a: 'A Nidhi Company is a type of company in the Indian non-banking financial sector, registered under the Companies Act, 2013. Its primary objective is to cultivate the habit of thrift and savings among its members, receiving deposits and lending money only to its members for mutual benefit.' },
  { q: 'What are the minimum requirements to start a Nidhi Company?', a: 'To register a Nidhi Company, a minimum of 7 members and 3 directors are required. The minimum paid-up equity capital must be ₹10 Lakhs or more (recently updated).' },
  { q: 'Is RBI registration mandatory for a Nidhi Company?', a: 'No, a Nidhi Company is exempted from direct registration with the RBI. However, it must comply with the Nidhi Rules, 2014, and the Companies Act, 2013, as monitored by the Ministry of Corporate Affairs (MCA).' },
  { q: 'Can a Nidhi Company lend to the general public?', a: 'No, Nidhi Companies are strictly prohibited from borrowing or lending to anyone other than their registered members. Only a member is eligible to deposit or take loans.' },
  { q: 'What are the limits on interest rates that Nidhi Companies can offer?', a: 'A Nidhi Company can offer interest on savings/fixed deposits up to 2% above the rates offered by nationalized banks. The maximum rate of interest charged on loans cannot exceed 7.5% above the highest rate offered on deposits by the Nidhi.' }
]

export default function NidhiCompany() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Bylaws Drafting & Member Setup",
    "bullets": [
      "Decide a unique name ending in \"Nidhi Limited",
      "Submit details of 7 promoters/members and 3 proposed directors",
      "Upload all Kyc scanned papers online safely"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. DSC & SPICe+ MCA Drafting",
    "bullets": [
      "We obtain DSC (Digital Signatures) and DIN for all 3 directors",
      "We draft custom bylaws and Articles (MOA/AOA) with specific lending clauses",
      "File name reservation RUN applications on the MCA system"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. ROC Approval & Post-Incorporation",
    "bullets": [
      "We submit SPICe+ incorporation forms to CRC",
      "Receive Certificate of Incorporation (COI), PAN, and TAN",
      "Guidance on Net Owned Funds and bank account setup"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 3",
    "bullets": [
      "Filing name reservation and securing DSCs for directors",
      "Filing DIN applications for proposed directors"
    ]
  },
  {
    "badge": "MCA",
    "icon": null,
    "title": "Days 4 - 7",
    "bullets": [
      "Drafting mutual benefit bylaws (MoA and AoA)",
      "Submitting SPICe+ Part B incorporation forms with MCA"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Days 8 - 10",
    "bullets": [
      "Obtaining Certificate of Incorporation (COI)",
      "Delivery of official corporate PAN and TAN"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Nidhi Company Registration Services")}
      serviceName="Nidhi Company Registration"
      heroBg={"/nidhi_hero_bg.webp"}
      heroDesc={[
        t("Register your Nidhi Company online easily and securely under Central Government regulations. Get custom-drafted mutual benefit rules, bylaws, name approval, DSC, DIN, and Certificate of Incorporation (COI) under our certified CA/CS assistance."),
        t("Launch a mutual benefit financial institution under MCA regulations. We manage your name registration, share capital allocation, drafting of MOA & AOA, DSC/DIN creation, and assist in meeting net owned fund compliances.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding Nidhi Company Registration")}
      overviewParagraphs={[
        t("A Nidhi Company is a specialized business entity recognized under Section 406 of the Companies Act, 2013, and regulated by the Ministry of Corporate Affairs (MCA). Belonging to the non-banking financial sector (NBFC), the core objective of a Nidhi is to cultivate mutual benefits and savings habits among its registered members. It is allowed to accept deposits and lend money solely to its members, functioning like a localized cooperative mutual benefit society."),
        t("Unlike typical NBFCs that require crores in capital and stringent RBI registration, Nidhi Companies enjoy immense exemptions and do not require prior RBI approval. Borrowing and lending are kept safe through low-risk, secured collateral such as gold, property, or fixed deposits. It provides an excellent pathway for community microfinance, savings clubs, and localized credit networks, operating with high legal status and limited corporate liability.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Key Advantages of Registering a Nidhi Company")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for Nidhi Registration")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("Nidhi Company Guidelines & Lending Rules")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Nidhi Company Registration in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
