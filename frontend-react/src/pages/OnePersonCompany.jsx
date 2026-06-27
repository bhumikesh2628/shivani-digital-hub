import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Sole Control with Corporate Shield', desc: 'Own 100% of your company shares with sole decision power while enjoying full corporate limited liability shielding.' },
  { icon: 'fa-landmark', title: 'Separate Legal Existence', desc: 'Like a Private Limited Company, an OPC is a distinct legal entity that can own assets, sign contracts, and sue in its own name.' },
  { icon: 'fa-exchange-alt', title: 'Nominee Succession', desc: 'No risk of closure. The nominated person instantly inherits and operates the business in the event of the founder\'s demise.' },
  { icon: 'fa-university', title: 'Ease in Raising Capital', desc: 'Financial institutions and banks heavily prefer lending to OPCs rather than unregistered sole proprietorship firms.' },
]

const documents = [
  { icon: 'fa-id-card', title: 'PAN of Director & Nominee', desc: 'Copy of PAN Card of both the sole director and the designated nominee partner (mandatory).' },
  { icon: 'fa-id-card-alt', title: 'Identity Proof', desc: 'Aadhaar Card, Passport, Voter ID, or Driving License of both the director and nominee.' },
  { icon: 'fa-file-invoice-dollar', title: 'KYC Address Proof', desc: 'Latest bank statement, electricity bill, or mobile bill of both the director and nominee.' },
  { icon: 'fa-building', title: 'Registered Office Proof', desc: 'Copy of utility bill (electricity, water, or gas) of the office business address.' },
  { icon: 'fa-handshake', title: 'Rent Agreement & NOC', desc: 'Registered rent agreement and No Objection Certificate (NOC) signed by the landlord.' },
  { icon: 'fa-file-signature', title: 'Nominee Consent Form', desc: 'Signed consent form in Form INC-3 from the designated nominee partner.' },
]

const nameRules = [
  { icon: 'fa-user-tie', title: 'Single Shareholder Limit', desc: 'Only a natural person who is an Indian citizen and resident can incorporate an OPC or act as a nominee.' },
  { icon: 'fa-exchange-alt', title: 'Conversion Limits', desc: 'Mandatory conversion to Private Limited if paid-up capital exceeds ₹50 Lakhs or turnover exceeds ₹2 Crores.' },
  { icon: 'fa-font', title: 'Name Suffix Rules', desc: 'The company name must include the words "(OPC) Private Limited" at the end of its registered name.' }
]

const faqsList = [
  { q: 'What is a One Person Company (OPC)?', a: 'An OPC is a hybrid corporate entity introduced by the Companies Act, 2013, allowing a single individual to incorporate a company with limited liability, combining sole control with private corporate status.' },
  { q: 'Who is eligible to incorporate an OPC in India?', a: 'Only a natural person who is an Indian citizen and a resident of India (who has stayed in India for at least 120 days in the previous calendar year) is eligible to incorporate an OPC.' },
  { q: 'Is it mandatory to nominate a person in an OPC?', a: 'Yes, it is legally mandatory. The sole incorporator must nominate a nominee director during the incorporation process in Form INC-3. The nominee will take charge of the OPC in the event of the subscriber\'s death or incapacity.' },
  { q: 'Can a person register more than one OPC?', a: 'No, a single individual is eligible to incorporate only one One Person Company (OPC) at a time, or become a nominee in only one such company.' },
  { q: 'What are the main advantages of an OPC over a Sole Proprietorship?', a: 'An OPC offers limited liability shielding (proprietorship has unlimited personal liability), separate legal existence, easy corporate succession, and significantly better access to bank loans and corporate tenders.' }
]

export default function OnePersonCompany() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Select Name & Setup Nominee",
    "bullets": [
      "Decide a unique corporate name ending in \"(OPC) Pvt Ltd",
      "Designate your nominee director and obtain consent in Form INC-3",
      "Upload your documents online via our secure client portal"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. DSC & SPICe+ MCA Drafting",
    "bullets": [
      "We allocate Digital Signatures (DSC) and Director Identification Number (DIN)",
      "Our legal experts draft targeted corporate articles (MoA and AoA)",
      "File name reservation and INC-3 nominee KYC approvals"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. ROC Approval & Delivery",
    "bullets": [
      "We submit the unified SPICe+ form with state corporate registry",
      "Obtain Certificate of Incorporation (COI), corporate PAN, and TAN",
      "Delivered directly online so you can open your current bank account"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Securing DSC (Digital Signature Certificate) for director",
      "Filing name approvals and nominee consent INC-3 form"
    ]
  },
  {
    "badge": "MCA",
    "icon": null,
    "title": "Days 3 - 5",
    "bullets": [
      "Drafting customized MoA and AoA corporate bylaws",
      "Filing unified incorporation SPICe+ forms with the Ministry of Corporate Affairs"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Days 6 - 8",
    "bullets": [
      "Receiving official Certificate of Incorporation (COI) from ROC",
      "Obtaining official corporate PAN & TAN cards"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online One Person Company (OPC) Registration")}
      serviceName="OPC Incorporation"
      heroBg={"/opc_hero_bg.webp"}
      heroDesc={[
        t("Register your One Person Company online. Maintain 100% ownership with complete private corporate protection. We manage your name reservation, nominee drafting (INC-3), DSC, DIN, and ROC incorporation seamlessly."),
        t("Start a corporate business as a sole founder with limited liability protection. We handle name registration, nominee consent documentation, DSC/DIN allocation, and complete ROC filing for a quick launch.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding One Person Company (OPC)")}
      overviewParagraphs={[
        t("A One Person Company (OPC) is a highly specialized corporate legal framework introduced under the Companies Act of 2013. It allows a single founder/entrepreneur to incorporate a fully registered Private Limited Company. Prior to this, setting up a corporate entity with limited liability shielding required a minimum of two directors and shareholders. Single business owners had to settle for a sole proprietorship, which does not provide any separation of personal assets from business debts."),
        t("With the launch of OPC, sole proprietors can now gain separate legal entity status, limited liability protection, access to corporate bank credits, and a highly recognized corporate brand image, while retaining 100% shareholding control. A designated nominee ensures effortless business continuity, protecting the entity from winding up in case of any eventuality.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Advantages of Incorporating an OPC")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for OPC Registration")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("OPC Guidelines & Incorporation Rules")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("OPC Incorporation in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
