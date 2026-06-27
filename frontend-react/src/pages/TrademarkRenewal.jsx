import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Perpetual Brand Protection', desc: 'Ensure continuous protection of your brand identity, preventing competitors from stealing your name.' },
  { icon: 'fa-landmark', title: 'Continuous Legal Monopoly', desc: 'Retain absolute legal monopoly rights to use your trademark, logo, or slogan in India.' },
  { icon: 'fa-coins', title: 'Protection of Corporate Value', desc: 'Protect your brand asset valuation. A registered trademark is a highly valuable, sellable asset.' },
  { icon: 'fa-handshake', title: 'Hassle-Free IP Transfers', desc: 'Maintain active, valid registration, which is essential for licensing, franchising, or selling your business.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'Trademark Registration Copy', desc: 'Copy of the original trademark registration certificate or TM-A application details.' },
  { icon: 'fa-file-alt', title: 'Power of Attorney (TM-48)', desc: 'Signed Power of Attorney authorizing our CA/CS team to draft and file renewal forms with the registrar.' },
  { icon: 'fa-id-card', title: 'Proprietor Identity Proof', desc: 'PAN Card and Aadhaar Card copy of the trademark owner or director.' },
  { icon: 'fa-font', title: 'Trademark Representation Sheet', desc: 'A clean graphic image or text definition of the registered trademark logo/wordmark.' },
]

const nameRules = [
  { icon: 'fa-clock', title: 'Ten-Year Validity Rules', desc: 'A registered trademark in India is valid for exactly 10 years. It must be renewed prior to expiry.' },
  { icon: 'fa-exclamation-triangle', title: 'Renewal Timelines & Surcharges', desc: 'File within 6 months before expiry, or up to 6 months after expiry by paying a statutory late surcharge.' },
  { icon: 'fa-ban', title: 'Restoration Penalty Rules', desc: 'If not renewed within 1 year of expiry, the trademark is permanently removed from the register, requiring complex restoration.' }
]

const faqsList = [
  { q: 'What is Trademark Renewal?', a: 'Trademark renewal is the official process of extending the registration of your registered trademark, logo, or slogan with the IP India registry every 10 years to maintain its legal protection.' },
  { q: 'When should we file for trademark renewal?', a: 'You can file for trademark renewal at any time within 6 months prior to the expiry date of the active registration. We highly recommend filing early to prevent brand abandonment.' },
  { q: 'What happens if a trademark is not renewed on time?', a: 'If not renewed by the expiry date, the trademark status changes to "Expired". You can still apply for renewal within 6 months after the expiry date by paying a statutory late fee surcharge. After 6 months, the trademark is removed from the register.' },
  { q: 'What is Form TM-R?', a: 'Form TM-R is the official statutory form filed with the Trademarks Registry to request the renewal of a registered trademark, accompanied by government fees.' },
  { q: 'Can we modify the trademark logo during renewal?', a: 'No, absolutely not. The trademark must be renewed in exactly the same format (logo, word, and classes) as originally registered. Any modifications require filing a brand new trademark application.' }
]

export default function TrademarkRenewal() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. KYC Validation & Power of Attorney",
    "bullets": [
      "Submit your active trademark registration number and owner KYC",
      "Sign the standard Power of Attorney (TM-48) authorization letter",
      "Initialize secure registration online"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Drafting Form TM-R & Audit",
    "bullets": [
      "Our trademark attorneys draft the online renewal Form TM-R",
      "Cross-check active trademark classes and logo parameters",
      "Complete attorney pre-validation"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Filing & Renewal Receipt",
    "bullets": [
      "File the TM-R application on the IP India trademark portal",
      "Pay the statutory government trademark renewal fee",
      "Deliver the official filing receipt and trademark renewal certificate"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Verifying original registration parameters and classes",
      "Drafting Power of Attorney (TM-48) and Form TM-R"
    ]
  },
  {
    "badge": "TM",
    "icon": null,
    "title": "Days 3 - 4",
    "bullets": [
      "Filing the formal renewal form on IP India portal and paying statutory fees",
      "Receiving official filing receipt and updating trademark status to renewed"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Trademark Renewal Services")}
      serviceName="Trademark Renewal"
      heroBg={"/trademark_renewal_hero_bg.webp"}
      heroDesc={[
        t("Renew your registered trademark online easily and securely. Prevent brand dilution, preserve your brand monopoly, and file Form TM-R on the IP India portal under professional attorney guidance."),
        t("Extend your brand name protection for another 10 years. We draft and file TM-R form on the trademark registry portal, upload ownership proofs, and ensure your trademark registration remains active and valid.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding Trademark Renewal")}
      overviewParagraphs={[
        t("A registered trademark represents one of the most valuable proprietary assets a business can own, representing client trust, brand value, and commercial goodwill. However, trademark protection in India is not permanent—it is granted for exactly 10 years at a time. The Trademarks Act, 1999 mandates that to maintain active brand protection and prevent logo or name abandonment, trademark renewal applications must be filed with the IP India registry."),
        t("Operating with an expired trademark risks brand dilution, letting competitors legally register and piggyback on your brand name. Our legal trademark attorneys handle the entire renewal process, drafting Form TM-R, preparing Power of Attorney (TM-48) files, and filing online on the IP India portal to secure your official renewal certificate smoothly.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Key Advantages of Trademark Renewal")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Checklist for Trademark Renewal")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("IP India Trademark Renewal Regulations")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Trademark Renewal in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
