import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Limited Liability Protection', desc: 'Shareholders\' personal assets remain fully protected. Risk is strictly restricted to capital contributions.' },
  { icon: 'fa-rocket', title: 'Startup Funding & Subsidies', desc: 'Preferred entity choice for venture capitalists, angel investors, and banks for easy equity raising.' },
  { icon: 'fa-exchange-alt', title: 'Seamless Share Transfers', desc: 'Ownership can be easily transferred or sold by simply executing share transfer deeds.' },
  { icon: 'fa-infinity', title: 'Perpetual Succession Status', desc: 'The company remains a separate legal entity, unaffected by any director\'s exit, transfer, or demise.' },
  { icon: 'fa-percentage', title: 'Corporate Tax Benefits', desc: 'Avail lower corporate tax rates, standard expense deductions, and corporate financial concessions.' },
  { icon: 'fa-gavel', title: 'Independent Juristic Person', desc: 'The company has the legal capacity to buy property, sign contracts, and sue or be sued in its own name.' },
]

const documents = [
  { icon: 'fa-user-circle', title: 'Passport Size Photograph', desc: 'Recent passport size photos of all proposed directors and shareholders.' },
  { icon: 'fa-file-signature', title: 'Copy of PAN Card', desc: 'Self-attested PAN card copies of all proposed directors and shareholders (mandatory).' },
  { icon: 'fa-id-card', title: 'Director Identity Proof', desc: 'Aadhaar Card, Passport, Voter ID, or Driving License copies of all promoters.' },
  { icon: 'fa-file-invoice-dollar', title: 'Director Address Proof', desc: 'Latest bank statement, electricity bill, or mobile bill (not older than 2 months).' },
  { icon: 'fa-building', title: 'Registered Office Proof', desc: 'Utility bill (electricity/gas/water) of the registered office space (not older than 2 months).' },
  { icon: 'fa-file-contract', title: 'Rent Agreement / Sale Deed', desc: 'Registered rent agreement or registry papers if the property is owned.' },
  { icon: 'fa-handshake', title: 'No Objection Certificate (NOC)', desc: 'Signed NOC from the property owner authorizing the use of premises as registered office.' },
]

const nameRules = [
  { icon: 'fa-font', title: 'Unique Name Reservation', desc: 'Name must be completely unique, descriptive of the business domain, and must not conflict with active trademarks.' },
  { icon: 'fa-users', title: 'Minimum Director Rules', desc: 'At least 2 directors and 2 shareholders are mandatory. One director must be an Indian resident.' },
  { icon: 'fa-landmark', title: 'Pvt Ltd Name Suffix', desc: 'No minimum capital requirement, but the company name must officially end with the suffix "Private Limited" or "Pvt Ltd".' }
]

const faqsList = [
  { q: 'What is a Private Limited Company?', a: 'A Private Limited Company is the most popular corporate legal entity in India, privately owned by shareholders and governed by the Companies Act, 2013.' },
  { q: 'What are the minimum requirements to register a Pvt Ltd company?', a: 'You need at least 2 directors, 2 shareholders, a registered office address in India, and basic PAN/Aadhaar documents of all promoters.' },
  { q: 'What is a Director Identification Number (DIN)?', a: 'DIN is a unique 8-digit identification number issued by the Ministry of Corporate Affairs (MCA) to individuals appointed as directors in a company.' },
  { q: 'How long does the incorporation process take?', a: 'Generally, it takes 7 to 10 working days to receive the Certificate of Incorporation, including DSC creation, name approval, and SPICe+ form submission.' },
  { q: 'What are Memorandum of Association (MOA) and Articles of Association (AOA)?', a: 'MOA outlines the core objectives, charter, and scope of the company, while AOA defines internal management rules, share transfer guidelines, and operational bylaws.' }
]

export default function PrivateLimitedCompany() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. DSC Creation & Name Approval",
    "bullets": [
      "Obtain Digital Signature Certificates (DSC) for all directors",
      "Submit your proposed unique company names for MCA approval",
      "Initialize secure registration online"
    ]
  },
  {
    "badge": null,
    "icon": "fa-file-contract",
    "title": "2. MOA/AOA Drafting & SPICe+ Filing",
    "bullets": [
      "Our legal team drafts the Memorandum (MOA) and Articles (AOA)",
      "Complete the online SPICe+ MCA SPICe Form registration filing",
      "Apply for statutory corporate DIN allotment"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. ROC Approval & Certificate Delivery",
    "bullets": [
      "ROC processes the SPICe+ application files",
      "Verify and allot corporate CIN, PAN, TAN, and ESI/PF registration",
      "Deliver the official Certificate of Incorporation (COI)"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 3",
    "bullets": [
      "Acquiring DSC (Digital Signature Certificates) for all directors",
      "Drafting MOA/AOA files and submitting unique names on MCA portal"
    ]
  },
  {
    "badge": "COI",
    "icon": null,
    "title": "Days 4 - 7",
    "bullets": [
      "Filing the formal SPICe+ MCA application and paying government fees",
      "Awaiting ROC approval and delivering Certificate of Incorporation (COI)"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Private Limited Company Registration")}
      serviceName="Private Limited Company Registration"
      heroBg={"/pvt_ltd_hero_bg.webp"}
      heroDesc={[
        t("Incorporate your dream startup legally as a Private Limited Company. Protect your personal assets with limited liability status, raise equity investments easily, and establish verified corporate credibility in India."),
        t("Get your DSC, DIN, PAN, TAN, and Certificate of Incorporation in 7-10 working days. Our experts handle the entire documentation, MCA filing, and SPICe+ form preparation, ensuring a smooth registration.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding Private Limited Company Incorporation")}
      overviewParagraphs={[
        t("A Private Limited Company is the most frequent and preferred corporate business entity registered in India. Governed by the Companies Act, 2013 and the Companies Incorporation Rules, 2014, it represents a separate legal juristic person with corporate succession status and limited liability protection for all its shareholders."),
        t("Incorporating a company increases your commercial authenticity, making it significantly easier to obtain bank credits, establish contracts, attract premier clients, and secure investments from reliable venture capitalists. Our company incorporation team manages the entire process end-to-end—DSC creation, name approval, MOA/AOA drafting, SPICe+ form filing with the ROC, and ESI/PF registration.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Key Advantages of Company Registration")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Checklist for Company Registration")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("MCA Statutory Incorporation Guidelines")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Private Limited Company Registration in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
