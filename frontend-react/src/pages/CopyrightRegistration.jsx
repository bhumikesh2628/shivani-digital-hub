import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Legal Protection & Proof', desc: 'Establishes a solid public record of ownership and provides legal evidence of your original work.' },
  { icon: 'fa-gavel', title: 'Right to Sue & Seek Damages', desc: 'Enables you to initiate legal proceedings against copyright infringers and claim statutory damages.' },
  { icon: 'fa-chart-line', title: 'Commercialization Rights', desc: 'Empowers you to license, sell, franchise, or inherit your work, creating potential royalty streams.' },
  { icon: 'fa-globe', title: 'Global IP Recognition', desc: 'Secures protection in over 170 countries worldwide under the international Berne Convention treaty.' },
]

const documents = [
  { icon: 'fa-copy', title: 'Copies of the Work', desc: 'Three physical copies of literary/artistic work, or source code and description for software/apps.' },
  { icon: 'fa-id-card', title: 'Author & Applicant KYC', desc: 'PAN Card, Aadhaar Card, or Passport copy of both the creator/author and the business applicant.' },
  { icon: 'fa-file-signature', title: 'No Objection Certificate (NOC)', desc: 'NOC from the author if the applicant is a company/employer, and NOC from the publisher if published.' },
  { icon: 'fa-file-alt', title: 'Power of Attorney', desc: 'Signed legal authorization permitting our legal experts to represent and file on your behalf.' },
]

const nameRules = [
  { icon: 'fa-tags', title: 'Distinct Copyright Classes', desc: 'Applies to literary, dramatic, musical, artistic, cinematograph films, sound recordings, and software.' },
  { icon: 'fa-clock', title: '30-Day Mandatory Wait Period', desc: 'Statutory 30-day waiting period mandated by the Copyright Office to allow third-party objections.' },
  { icon: 'fa-history', title: 'Lifetime + 60 Years Validity', desc: 'Copyright protection generally lasts for the entire lifetime of the author plus an additional 60 years.' }
]

const faqsList = [
  { q: 'What is Copyright Registration?', a: 'Copyright registration is a legal process that grants exclusive intellectual property rights to creators over their original literary, artistic, musical, dramatic, cinematograph, sound recording, or software creations.' },
  { q: 'Is registration mandatory for copyright protection?', a: 'No, copyright protection exists automatically from the moment a work is created. However, official registration is highly recommended as it provides solid prima facie evidence of ownership in a court of law.' },
  { q: 'What is a Copyright Diary Number?', a: 'A Diary Number is a unique statutory reference number issued immediately by the Copyright Office upon online filing and payment, marking the start of the 30-day objection period.' },
  { q: 'Can software/mobile apps be copyrighted in India?', a: 'Yes! Under the Indian Copyright Act, software programs, source code, and object code are registered as "literary works".' },
  { q: 'How long does the entire registration process take?', a: 'It typically takes about 6 to 12 months. This includes the mandatory 30-day objection period, examination by the registrar, resolving objections (if any), and final certificate issuance.' }
]

export default function CopyrightRegistration() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. KYC Validation & Work Intake",
    "bullets": [
      "Submit your applicant/author KYC details",
      "Upload your original work (source code, text, artwork, or audio)",
      "Sign the authorization representative deed"
    ]
  },
  {
    "badge": null,
    "icon": "fa-file-invoice",
    "title": "2. Application Drafting & Submission",
    "bullets": [
      "Our legal team drafts Form XIV (Application for Copyright Registration)",
      "Categorize your work class and complete the Statement of Particulars",
      "Submit the online application to generate a unique Diary Number"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Mandatory Wait & Certification",
    "bullets": [
      "Serve the statutory 30-day waiting period for third-party objections",
      "Represent and resolve any examination discrepancies raised by the registrar",
      "Receive your final Government-approved Copyright Registration Certificate"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 3",
    "bullets": [
      "Reviewing the submitted files, KYC documentation, and class structure",
      "Drafting Form XIV and compiling the Statement of Particulars",
      "Online submission to receive the official Copyright Diary Number"
    ]
  },
  {
    "badge": "CR",
    "icon": null,
    "title": "Months 6 - 12",
    "bullets": [
      "Completing the mandatory 30-day statutory wait window for objections",
      "Registrar's official examination of the work's absolute originality",
      "Resolution of any queries followed by the final Certificate of Registration"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Copyright Registration Services")}
      serviceName="Copyright Registration"
      heroBg={"/copyright_registration_hero_bg.webp"}
      heroDesc={[
        t("Protect your intellectual creations legally. File your copyright application online for software, literature, artistic designs, music, and films under expert attorney guidance to secure lifetime brand ownership."),
        t("Establish legal ownership and prevent unauthorized reproduction of your original work. We assist in filing copyright applications with the registrar, responding to discrepancies, and acquiring the final Diary Number and Registration Certificate.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding Copyright Registration")}
      overviewParagraphs={[
        t("Copyright is a form of intellectual property protection granted under the Indian Copyright Act, 1957. It provides an exclusive bundle of legal rights to authors, creators, and developers over their original works. This includes literary works (books, articles, software code), dramatic works, musical compositions, artistic creations (paintings, logos, drawings), cinematograph films, and sound recordings."),
        t("While copyright protection exists automatically upon the creation of an original work, official registration with the Copyright Office provides crucial legal advantages. It acts as prima facie evidence of ownership in court, allowing you to easily stop unauthorized reproduction, distribution, or plagiarism, and recover damages. Our dedicated intellectual property experts handle your filing end-to-end—categorizing your work, drafting forms, submitting copies, and managing registrar objections.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Key Advantages of Copyright Protection")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Checklist for Copyright Registration")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("Indian Copyright Statutory Guidelines")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Copyright Registration in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
