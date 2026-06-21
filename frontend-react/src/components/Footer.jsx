import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const links = {
  'Start Business': [
    { name: 'Private Limited Company', to: '/private-limited-company' },
    { name: 'LLP Registration', to: '/limited-liability-partnership' },
    { name: 'One Person Company', to: '/one-person-company' },
    { name: 'Sole Proprietorship', to: '/sole-proprietorship' },
    { name: 'Section 8 Company', to: '/section-8-company' },
  ],
  'Tax & Compliance': [
    { name: 'GST Registration', to: '/gst-services' },
    { name: 'GST Return Filing', to: '/gst-return-filing' },
    { name: 'Income Tax Return', to: '/income-tax-return' },
    { name: 'PF Registration', to: '/epf-compliances' },
    { name: 'ESIC Registration', to: '/esic-registration' },
  ],
  'Other Services': [
    { name: 'Trademark Registration', to: '/trademark-services' },
    { name: 'FSSAI License', to: '/fssai-food-license' },
    { name: 'Import Export Code', to: '/import-export-code' },
    { name: 'ISO Certification', to: '/iso-certification' },
    { name: 'Consumer Complaint', to: '/consumer-complaint' },
  ],
}

const socialLinks = {
  'facebook-f': 'https://www.facebook.com/share/1BYpwwPDGR/?mibextid=wwXIfr',
  'twitter': 'https://twitter.com/shivanidigitalhub',
  'instagram': 'https://www.instagram.com/shivanidigitalhub2026?igsh=MTc3YjEyazZ2ejNnMQ%3D%3D&utm_source=qr',
  'linkedin-in': 'https://linkedin.com/company/shivanidigitalhub',
  'youtube': 'https://youtube.com/@shubhamgiri529?si=VfrObmYmcccdHhTg',
}

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#18181c] text-white pt-16">
      <div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Links and Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo-light.png" alt="Shivani Digital Hub Logo" className="h-[45px] w-auto object-contain drop-shadow-md logo-sharp" />
              </div>
              <p className="text-[13px] text-slate-300 leading-relaxed mb-6">
                {t('footerDesc')}
              </p>
              <div className="flex gap-3 mb-6">
                {Object.entries(socialLinks).map(([key, url]) => {
                  const labelMap = {
                    'facebook-f': 'Facebook',
                    'twitter': 'Twitter',
                    'instagram': 'Instagram',
                    'linkedin-in': 'LinkedIn',
                    'youtube': 'YouTube'
                  };
                  return (
                    <a 
                      key={key} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`Visit our ${labelMap[key] || key} page`}
                      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#f0c040] hover:text-[#18181c] hover:-translate-y-0.5"
                    >
                      <i className={`fab fa-${key}`}></i>
                    </a>
                  );
                })}
              </div>
            </div>
            {Object.entries(links).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="text-white text-base font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#f0c040]">
                  {t(heading)}
                </h4>
                {items.map(({ name, to }) => (
                  <Link key={name} to={to} className="block text-[13px] text-slate-300 hover:text-white mb-3 transition-all duration-300 hover:translate-x-1.5">
                    {t(name)}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Row: Contact Info & Google Map split banner */}
          <div className="border-t border-white/10 pt-10 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-5">
              <h4 className="text-white text-base font-bold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#f0c040]">
                {t('footerContactInfo')}
              </h4>
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-[#f0c040] text-lg mt-0.5 shrink-0"></i>
                <p className="text-[13px] text-slate-300 leading-relaxed m-0">
                  {t('footerAddressVal')}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-[#f0c040] text-sm shrink-0"></i>
                <a href="tel:+917990187675" className="text-[13px] text-slate-300 hover:text-[#f0c040] font-semibold transition-colors duration-200 no-underline">+91 79901 87675</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-[#f0c040] text-sm shrink-0"></i>
                <a href="mailto:info@shivanidigitalhub.com" className="text-[13px] text-slate-300 hover:text-[#f0c040] font-semibold transition-colors duration-200 no-underline">info@shivanidigitalhub.com</a>
              </div>
            </div>

            {/* Google Map Column */}
            <div className="lg:col-span-7 w-full h-[240px] rounded-xl overflow-hidden border border-white/10 shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14769.094237965417!2d73.18555!3d22.267625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5762bcd5325%3A0xfa66221752e7db7!2sSHIVANI%20DIGITAL%20HUB!5e0!3m2!1sen!2sus!4v1782016510564!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title={t('footerLocation')}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 pb-20 sm:pb-10 border-t border-white/10 bg-[#111111]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs text-slate-300">
          <span>© {new Date().getFullYear()} {t('footerRights')}</span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/privacy-policy" className="text-slate-300 hover:text-white transition-colors">
              {t('Privacy Policy')}
            </Link>
            <Link to="/terms-of-service" className="text-slate-300 hover:text-white transition-colors">
              {t('Terms of Service')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
