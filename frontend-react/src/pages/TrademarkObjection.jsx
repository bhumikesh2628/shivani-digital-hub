import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shield-alt', title: 'Prevent Trademark Abandonment', desc: 'Filing a valid reply prevents the registry from marking your trademark application as permanently abandoned.' },
  { icon: 'fa-gavel', title: 'Professional Attorney Drafting', desc: 'Get legal defense drafts prepared by experienced trademark attorneys, citing relevant case laws and rulings.' },
  { icon: 'fa-check-circle', title: 'Maximizes Approval Chances', desc: 'A robust reply citing distinctiveness and prior use significantly increases your chances of trademark approval.' },
  { icon: 'fa-history', title: 'Prior User Protection', desc: 'Enables you to present a detailed user affidavit proving prior brand usage, overriding relative ground objections.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'TM Examination Report Copy', desc: 'Copy of the official trademark examination report issued by the IP India TM Registry.' },
  { icon: 'fa-id-card', title: 'Trademark Application Form', desc: 'Copy of the original application details (Form TM-A) submitted for trademark registration.' },
  { icon: 'fa-file-alt', title: 'Power of Attorney (TM-48)', desc: 'Signed Power of Attorney authorizing our CA/CS team or attorney to represent your case before the registrar.' },
  { icon: 'fa-history', title: 'User Affidavit & Evidence', desc: 'Affidavit of brand usage accompanied by evidence (invoices, advertisements, website receipts) proving trademark use prior to application.' },
]

const nameRules = [
  { icon: 'fa-clock', title: 'Strict Thirty-Day Reply Window', desc: 'A formal reply to the trademark examination report must be filed strictly within 30 days of the report publication.' },
  { icon: 'fa-exclamation-triangle', title: 'Objection Grounds Check', desc: 'Objections are primarily raised under Section 9 (Absolute Grounds - lack of distinctiveness) or Section 11 (Relative Grounds - identical TM).' },
  { icon: 'fa-ban', title: 'Abandonment Penalty Rules', desc: 'If a reply is not submitted within 30 days, the trademark application is automatically marked as "Abandoned" by the registry.' }
]

const faqsList = [
  { q: 'What is a Trademark Objection?', a: 'A trademark objection is a query raised by the Trademark Examiner/Registrar during the examination stage if they believe the application violates Section 9 (lack of distinctiveness) or Section 11 (similarity to existing trademarks) of the Trademarks Act, 1999.' },
  { q: 'What is the timeline to file a Trademark Objection reply?', a: 'You must file a comprehensive legal reply to the trademark examination report within exactly 30 days from the date of the report\'s issuance or receipt.' },
  { q: 'What happens if we do not file the reply within 30 days?', a: 'If the reply is not filed on the IP India portal within 30 days, the registrar will automatically update the trademark status to "Abandoned", meaning your application is permanently discarded.' },
  { q: 'What is a User Affidavit in trademark objections?', a: 'A User Affidavit is a notarized legal document declaring the exact date you started using the brand name, supported by documentary proof like tax invoices, advertisements, domain receipts, or brochures. It is highly effective for overriding Section 11 (Relative Grounds) objections.' },
  { q: 'What happens after we file the Trademark Objection reply?', a: 'Once filed, the Examiner reviews your response. If satisfied, the status will change to "Accepted & Advertised" in the TM Journal. If not fully satisfied, they will schedule a physical/virtual show-cause hearing.' }
]

export default function TrademarkObjection() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Report Upload & Attorney Audit",
    "bullets": [
      "Upload your trademark examination report copy or application number",
      "Submit supportive brand usage proofs (invoice list, branding ads)",
      "Initialize attorney analysis"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Case Law Research & Legal Drafting",
    "bullets": [
      "Our attorneys research relevant prior IP cases and distinctiveness grounds",
      "Draft a custom legal reply addressing all Section 9 and 11 queries",
      "Prepare notarized user affidavits of prior brand usage"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Portal Filing & Status Monitoring",
    "bullets": [
      "File the legal reply on the IP India trademark portal",
      "Generate and deliver official filing confirmation receipts",
      "Monitor the application status and represent your brand during show-cause hearings"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 3",
    "bullets": [
      "Legal analysis of examiner objections and database searches",
      "Drafting targeted legal arguments and compiling brand invoices"
    ]
  },
  {
    "badge": "TM",
    "icon": null,
    "title": "Days 4 - 5",
    "bullets": [
      "Filing the formal reply on the IP India trademark portal",
      "Generating confirmation receipt and monitoring status updates"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online Trademark Objection Reply Services")}
      serviceName="Trademark Objection"
      heroBg={"/trademark_objection_hero_bg.webp"}
      heroDesc={[
        t("Draft and file a highly professional, legal objection reply on the IP India trademark portal. Address absolute grounds (Section 9) or relative grounds (Section 11) objections under professional attorney guidance."),
        t("Protect your brand from being rejected by the registry. Our experienced IP attorneys analyze the examination report, cite matching legal precedents, draft a robust response, and file it on the portal.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding Trademark Objection Reply")}
      overviewParagraphs={[
        t("Filing a trademark application (Form TM-A) is only the first step in brand protection. Once submitted, the Trademark Examiner conducts a thorough search and audits the application. If they discover discrepancies, they will raise objections in an official Trademark Examination Report. Objections are raised primarily under Section 9 (lack of distinctive character, descriptive names) or Section 11 (identical or deceptively similar existing trademarks)."),
        t("Failing to submit a professional legal reply within the mandatory statutory window of 30 days results in the immediate abandonment of the trademark. Our experienced trademark attorneys analyze your report, construct arguments, gather prior-use invoices/evidence, draft notarized user affidavits, and file legal replies on the portal, giving your brand registration the best possible chance of success.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Why a Professional Reply is Mandatory")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Checklist for TM Objection Reply")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("IP India Objection Rules & Statutes")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("Trademark Objection in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
