import ServicePageLayout from '../layouts/ServicePageLayout'
import { useLanguage } from '../context/LanguageContext'

const advantages = [
  { icon: 'fa-shipping-fast', title: 'Continuous Customs Clearance', desc: 'Prevent customs holding or import/export consignment delays by keeping IEC details updated.' },
  { icon: 'fa-university', title: 'Bank Account Compatibility', desc: 'Ensures current bank account data matches DGFT portal details for seamless foreign exchange transactions.' },
  { icon: 'fa-landmark', title: 'DGFT Compliance Preservation', desc: 'Maintain complete legal compliance and keep your digital custom gate credentials active.' },
  { icon: 'fa-handshake', title: 'Hassle-Free Global Operations', desc: 'Easily update branch offices, company category, or partner details to support expanding global deals.' },
]

const documents = [
  { icon: 'fa-file-signature', title: 'Original IEC Certificate', desc: 'Copy of the active Import Export Code (IEC) certificate originally issued by the DGFT.' },
  { icon: 'fa-id-card', title: 'Updated PAN / Address Proof', desc: 'Modified PAN Card of the firm or updated address proof (Electricity Bill / Rent Agreement) if changing name/address.' },
  { icon: 'fa-users', title: 'Partner/Director List Updates', desc: 'Updated details and PAN/Aadhaar copies of new partners or directors being added.' },
  { icon: 'fa-money-check', title: 'Modified Bank Account Proof', desc: 'Cancelled cheque or bank certificate of the new current account if updating bank details.' },
  { icon: 'fa-file-alt', title: 'Board Resolution / Consent', desc: 'Signed board resolution or consent letter from partners approving the IEC modification.' },
]

const nameRules = [
  { icon: 'fa-clock', title: 'Modification Timeline', desc: 'Any change in constitution, name, or address of the firm must be updated in the IEC within 30 days.' },
  { icon: 'fa-id-badge', title: 'PAN-Linking Rules', desc: 'Since the IEC is permanently linked to your PAN, the PAN details must be updated first before DGFT filing.' },
  { icon: 'fa-shield-alt', title: 'DGFT Portal Declaration', desc: 'All uploads must be digitally signed using Class 3 DSC or verified via Aadhaar OTP of the director/partner.' }
]

const faqsList = [
  { q: 'What is IEC Modification?', a: 'IEC modification is the official process of updating or correcting details such as business name, office address, bank account, branch offices, or partner/director lists in your active Import Export Code certificate on the DGFT portal.' },
  { q: 'What is the government fee for modifying an IEC?', a: 'The Ministry of Commerce & Industry (DGFT) charges a nominal statutory government filing fee of ₹200 for modifying an active IEC.' },
  { q: 'How long does it take to modify an IEC?', a: 'Once the application is drafted and submitted with correct proof documents, the DGFT system usually processes and approves the modification within 1 to 3 working days.' },
  { q: 'Is it mandatory to update bank account changes in the IEC?', a: 'Yes, absolutely. The bank account linked to your IEC is used for direct customs duty refunds and foreign exchange remittances. Any mismatch will cause payments and custom clearances to fail.' },
  { q: 'Do we need a physical signature or presence to modify the IEC?', a: 'No, the entire process is managed 100% online. We will prepare and upload your application on the DGFT portal using your digital signature (DSC) or Aadhaar OTP authentication.' }
]

export default function ImportExportModification() {
  const { t } = useLanguage()

  const processSteps = [
  {
    "badge": "?",
    "icon": null,
    "title": "1. Provide Modifications & Upload",
    "bullets": [
      "Detail the modifications needed (address, bank, partners, etc.)",
      "Upload supportive modified documents (such as rent deed, utility bills)",
      "Initialize secure portal filing"
    ]
  },
  {
    "badge": null,
    "icon": "fa-user",
    "title": "2. Portal Drafting & Digital Signature",
    "bullets": [
      "Our legal team logs into the official DGFT portal on your behalf",
      "We draft the online modification form including the updated parameters",
      "Validate filings via your Class 3 DSC or Aadhaar OTP authentication"
    ]
  },
  {
    "badge": null,
    "icon": "fa-check",
    "title": "3. Government Approval & Delivery",
    "bullets": [
      "Pay the statutory government modification fee",
      "Monitor processing status with the licensing authority",
      "Download and deliver the newly modified official IEC certificate"
    ]
  }
]

  const timelineSteps = [
  {
    "badge": null,
    "icon": "fa-clipboard-check",
    "title": "Days 1 - 2",
    "bullets": [
      "Verifying submitted modified proofs and drafting DGFT portal filing",
      "Verifying DSC and linking active PAN variables"
    ]
  },
  {
    "badge": "DGFT",
    "icon": null,
    "title": "Days 3 - 4",
    "bullets": [
      "Filing the formal modification form and paying government statutory fees",
      "Obtaining licensing officer approval and generating newly updated IEC certificate"
    ]
  }
]

  return (
    <ServicePageLayout
      title={t("Online IEC Modification & Update Services")}
      serviceName="IEC Modification"
      heroBg={"/iec_modification_hero_bg.webp"}
      heroDesc={[
        t("Modify or update your active Import Export Code (IEC) certificate online with professional CA/CS legal assistance. Keep your trade records compliant, update business details, change directors, or change your address quickly on the DGFT portal."),
        t("Update your trade registration parameters seamlessly to avoid customs delay. We help you change your IEC address, update bank details, add/remove partners or directors, and issue the modified certificate.")
      ]}
      overviewBadge={t("Introduction")}
      overviewTitle={t("Understanding IEC Modification")}
      overviewParagraphs={[
        t("The Import Export Code (IEC) is a lifetime identification number mandatory for carrying out any custom clearances of cargo import or export consignments in India. However, keeping the details of your IEC 100% matched with actual corporate structures is legally mandatory. The Directorate General of Foreign Trade (DGFT) mandates that any changes in business address, brand name, bank accounts, director profiles, or category classifications must be updated directly on the DGFT system within 30 days of the modification."),
        t("Failing to update IEC changes triggers bank remittance transaction delays, custom holds, and invalidation of digital ICEGATE customs filings. Our expert legal team manages the draft documentation, DGFT system filing, declaration preparation, and portal approval, delivering your newly updated IEC certificate securely in just 2-3 working days.")
      ]}
      benefitsBadge={t("Benefits")}
      benefitsTitle={t("Advantages of Modifying Your IEC")}
      benefits={advantages}
      documentsBadge={t("Documents Checklist")}
      documentsTitle={t("Documents Checklist for IEC Modification")}
      documents={documents}
      guidelinesBadge={t("Guidelines")}
      guidelinesTitle={t("IEC Modification Guidelines & Portal Rules")}
      guidelines={nameRules}
      processSubtitle={t("GET CERTIFIED WITH CSC SHIVANI")}
      processTitle={t("IEC Modification in Three Easy Steps!")}
      processSteps={processSteps}
      timelineSubtitle={t("PROCESSING TIMELINE")}
      timelineTitle={t("Seamless Registration Flow")}
      timelineSteps={timelineSteps}
      faqs={faqsList}
      
    />
  )
}
