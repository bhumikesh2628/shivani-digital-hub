import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Continuous Food Safety Compliance', desc: 'Operate legally with zero threat of inspection penalties or sudden business closure orders.' },
  { icon: 'fa-coins', title: 'Zero Late-Fee Penalties', desc: 'Renew your license in the window before expiry to avoid paying the statutory ₹100/day late penalty.' },
  { icon: 'fa-truck-loading', title: 'Uninterrupted Supply Chain', desc: 'Ensure smooth cargo clearances and maintain verified supplier status with top delivery partners.' },
  { icon: 'fa-smile', title: 'Enhanced Consumer Brand Trust', desc: 'Display a valid FSSAI logo and registration number on packaging, increasing buyer loyalty.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'Active FSSAI License Copy', desc: 'Copy of the active basic registration, state license, or central license certificate.' },
  { icon: 'fa-file-alt', title: 'FSMS Declaration Form', desc: 'Signed declaration form detailing the Food Safety Management System plan compliance.' },
  { icon: 'fa-id-card', title: 'Identity Proof of Nominee', desc: 'Aadhaar Card, Passport, or PAN card copy of the designated nominee (Form IX).' },
  { icon: 'fa-building', title: 'Registered Address Proof', desc: 'Electricity bill, utility bill, or rent deed if the office or factory location has changed.' },
  { icon: 'fa-seedling', title: 'Modified Food Products List', desc: 'A detailed breakdown list of food categories and processed food products being registered.' },
]

const nameRules = [
  { icon: 'fa-clock', title: 'Renewal Window Rules', desc: 'Renewal applications must be filed within 120 days prior to the original license expiry date.' },
  { icon: 'fa-ban', title: 'Late Fee Surcharges', desc: 'Filing renewal applications after expiry incurs a mandatory penalty surcharge of ₹100 for every single day of delay.' },
  { icon: 'fa-clipboard-list', title: 'Form IX Nominee Rules', desc: 'Nominate a responsible individual who will oversee food hygiene standards and represent the firm.' }
]

const faqsList = [
  { q: 'What is FSSAI Renewal?', a: 'FSSAI renewal is the official process of extending the validity of your active basic registration, state license, or central license issued by the Food Safety and Standards Authority of India before it expires.' },
  { q: 'When should we file for FSSAI renewal?', a: 'You must file for FSSAI renewal within 120 days before the expiry of the active license. We highly recommend filing at least 30 days prior to avoid any portal processing backlogs.' },
  { q: 'What happens if FSSAI is not renewed on time?', a: 'If the renewal is not filed before the expiry date, you will have to pay a mandatory late fee surcharge of ₹100 per day. If it remains unpaid, the license will permanently expire, and you will have to apply for a brand new license.' },
  { q: 'What is the FSMS Plan?', a: 'The Food Safety Management System (FSMS) plan is a mandatory declaration certifying that your food processing unit complies with food handling guidelines, clean storage, and hygienic processing rules.' },
  { q: 'Is a physical food factory audit conducted for FSSAI renewal?', a: 'For basic registrations, physical audits are not conducted. However, for State and Central licenses, a food safety inspector may conduct an audit of the premises to verify FSMS plan compliance.' }
]

export default function FssaiRenewal() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Verify Current License & Details",
    "bullets": [
      "Enter your active 14-digit FSSAI license/registration number",
      "Upload your current certificate and any details changes",
      "Initialize secure portal filing"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. FSMS Plan & Form A/B Drafting",
    "bullets": [
      "Our food safety experts prepare your FSMS compliance declarations",
      "Draft and pre-validate portal Form A (Registration) or Form B (License)",
      "Complete regional licensing declarations"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Submission & Renewal Delivery",
    "bullets": [
      "Submit application to the FoSCoS portal and pay government fees",
      "Track officer processing, addressing queries or clarifications",
      "Download and deliver the newly renewed FSSAI license certificate"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Auditing active license categories and compiling FSMS plan records",
      "Drafting online portal renewal Form A or Form B"
    ]
  },
  {
    "badge": "FSSAI",
    "icon": null,
    "title": "Days 3 - 5",
    "bullets": [
      "Submitting application on FoSCoS portal and paying government fees",
      "Monitoring licensing authority audit review and issuing renewed license"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online FSSAI License Renewal Services")}
      serviceName="FSSAI Renewal"
      heroBg={"/fssai_renewal_hero_bg.webp"}
      heroDesc={[
        t("Renew your FSSAI basic registration, state license, or central license online. Our expert legal team drafts your FSMS declaration plan, processes nominee files, and manages the entire renewal filing securely."),
        t("Prevent penalties and maintain business continuity by renewing your FSSAI license on time. We ensure the renewal application is filed before expiry, update business details if required, and secure your renewed certificate.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding FSSAI Renewal")}
      overviewParagraphs={[
        t("FSSAI (Food Safety and Standards Authority of India) licenses and registrations are issued with a specific validity period of 1 to 5 years. However, maintaining continuous registration is a strict legal mandate for any business involved in manufacturing, processing, packaging, distributing, or selling food items. The FSSAI rules dictate that renewal applications must be drafted and submitted within 120 days prior to the original license expiry date."),
        t("Operating with an expired food license is a severe offense, causing custom delays, distribution holds, and a statutory penalty surcharge of ₹100 per day of delay. Our experienced legal team coordinates your renewal, preparing your FSMS plan, drafting the nominee declarations, and filing portal submissions to secure your renewed food certificate in under 3-5 working days.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why Timely FSSAI Renewal is Crucial")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Checklist for FSSAI Renewal")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("FSSAI Renewal Guidelines & Penalty Rules")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("FSSAI Renewal in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
