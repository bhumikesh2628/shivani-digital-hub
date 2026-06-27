import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Limited Liability of Shareholders', desc: 'The accountability of shareholders and Directors depends on the amount of the shares owned by them. Personal assets are not affected in case of financial emergency.' },
  { icon: 'fa-sack-dollar', title: 'Separate Legal Existence', desc: 'The company enjoys a separate legal existence from the owners. It can enter into contracts, own assets, and sue third parties in its own name. As a distinct entity, it has a perpetual existence.' },
  { icon: 'fa-chart-pie', title: 'Clarity in Management and Ownership', desc: 'While the shareholders are the owners of the business, the management decisions are made by the directors of the company. This helps the business to benefit from professional management without diluting ownership.' },
  { icon: 'fa-hand-holding-usd', title: 'Ease in Raising Funds', desc: 'Being a highly compliant structure, banks prefer to issue loans to Companies and LLPs. Public Limited Companies can also raise massive capital by selling shares or accepting deposits from the general public.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'PAN and Aadhaar Card', desc: 'Both PAN and Aadhaar Card of all Indian Shareholders and Directors' },
  { icon: 'fa-id-card', title: 'Identity Proof', desc: 'Either Voter ID, Passport, or Driving License of all the designated Directors and Shareholders.' },
  { icon: 'fa-file-invoice', title: 'Proof of Address', desc: 'Copy of the latest Telephone Bill, Electricity Bill, or Bank Account Statement of the Shareholders and Directors.' },
  { icon: 'fa-user-circle', title: 'Photographs', desc: 'Latest passport size photographs of all the Shareholders and Directors.' },
  { icon: 'fa-building', title: 'Business Address Proof', desc: 'Either of the latest Utility Bill (Electricity, Telephone, Gas, Water) or Property Tax Bill of the registered office address. Rent agreement and NOC from the owner in case of rented property.' },
]

const nameRules = [
  { icon: 'fa-crown', title: 'Unique Name', desc: 'Distinct name that is not an already registered company or trademark stands a better chance of name approval from MCA.' },
  { icon: 'fa-briefcase', title: 'Business Activity', desc: 'The second part of the name should ideally suggest the primary business activity of the company.' },
  { icon: 'fa-font', title: 'Name Suffix', desc: 'The name of the company shall end with "Ltd." or "Limited" to represent its public corporate status.' }
]

export default function PublicLimitedCompany() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Answer Quick Questions",
    "bullets": [
      "Pick the most suitable package",
      "Take 5-10 minutes to answer simple questions",
      "Provide documents as per the checklist",
      "Make payment through a secured payment gateway"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Experts at Your Service",
    "bullets": [
      "We will assign a Relationship Manager",
      "Relax while experts draft and file your documents",
      "We commit to addressing any queries within 24 business hours"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. You are All Set to Roll",
    "bullets": [
      "All it takes is 10-12 working days*",
      "Let's keep your business compliant and protected. Time to get on a free assessment call"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Experts review your documents and information",
      "Apply for Digital Signature Certificate"
    ]
  },
  {
    "badge": "AB",
    "icon": null,
    "title": "Days 3 - 6",
    "bullets": [
      "Name availability check on MCA and IP India Portals",
      "Apply for Company Name Reservation",
      "MoA and AoA drafting"
    ]
  },
  {
    "badge": null,
    "icon": "fa-list-ul",
    "title": "Days 7 - 9",
    "bullets": [
      "Form filling for Certificate of Incorporation (COI)",
      "DIN Allotment Application",
      "PAN and TAN Application"
    ]
  },
  {
    "badge": null,
    "icon": "fa-calendar-alt",
    "title": "Days 10 - 12",
    "bullets": [
      "Awaiting MCA approval and incorporation"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Public Limited Company Registration in India")}
      serviceName="Public Limited Company"
      heroBg={"/public-company-hero-banner.webp"}
      heroDesc={[
        t("Looking to register a Public Limited Company? Look no further! Our expert CS Assisted service offers the lowest cost with no hidden fees and a transparent pricing policy. Get fast turnaround times and hassle-free registration. 6,000+ startup business owners trust Shivani Digital Hub for starting their business and keeping it compliant with the law!"),
        t("Establish a large-scale corporate entity capable of raising capital from the public. We manage your name reservation, coordinate minimum capital compliances, draft regulatory MOA/AOA, and secure your incorporation certificate.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Public Limited Company Registration Services in India")}
      overviewParagraphs={[
        t("Public Limited Company registration (PLC registration) is a popular way to start a large-scale business in India. It offers benefits like limited liability protection to founders, separate legal existence, easy transferability of shares, and the capability to raise capital from the general public. Hence, medium and large businesses with growth aspirations and plans to list on stock exchanges prefer a public limited company structure.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why Should You Register a Public Limited Company?")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Required for Public Limited Company Registration Online")}
      documents={documents}
      guidelinesBadge={t("How to Decide")}
      guidelinesTitle={t("How to Decide a Company Name")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Public Limited Company in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={[]}
      
    />
  )
}
