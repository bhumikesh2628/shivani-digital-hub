import { useState, useEffect } from 'react'
import { validateContactForm } from '../utils/validation'
import { useLanguage } from '../context/LanguageContext'

const services = [
  'Company Incorporation', 'GST Registration', 'GST Return Filing',
  'Income Tax Return', 'Trademark Registration', 'FSSAI License',
  'Import Export Code', 'ISO Certification', 'Consumer Complaint',
  'RTI Filing', 'Other',
]

const init = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState(init)
  const [msg, setMsg] = useState({ text: '', ok: false })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlName = params.get('name') || ''
    const urlEmail = params.get('email') || ''
    const urlPhone = params.get('phone') || ''
    const urlService = params.get('service') || ''
    const urlMessage = params.get('message') || ''
    if (urlName || urlEmail || urlPhone || urlService || urlMessage) {
      setForm(prev => ({
        ...prev,
        name: urlName || prev.name,
        email: urlEmail || prev.email,
        phone: urlPhone || prev.phone,
        service: urlService || prev.service,
        message: urlMessage || prev.message
      }))
    }
  }, [])

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    
    // Validate form
    const errors = validateContactForm(form)
    if (!form.service) {
      errors.push('Please select a service')
    }
    
    if (errors.length > 0) {
      setMsg({ text: t(errors[0]), ok: false })
      return
    }
    
    setLoading(true)
    setMsg({ text: '', ok: false })
    
    // Create WhatsApp message with form data
    const phoneNumber = '917990187675' // Your phone number
    const message = `New Contact Form Submission:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'Not provided'}\nService: ${form.service}\nMessage: ${form.message || 'Not provided'}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank')
    
    setMsg({ text: t('✓ Opening WhatsApp to send your message...'), ok: true })
    setForm(init)
    setLoading(false)
  }

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="contact">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Layout exactly matching the user's reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Contact details and clean styling */}
          <div className="lg:col-span-5 text-left space-y-6 sm:space-y-8">
            
            {/* Elegant Top Badge */}
            <div>
              <div className="inline-block bg-black text-white text-[10px] font-black tracking-[1.5px] px-4.5 py-2 rounded-full uppercase select-none">
                {t('contactBadge')}
              </div>
            </div>

            {/* Premium Sophisticated Heading */}
            <h2 className="text-4.5xl sm:text-[52px] font-black text-black tracking-tight leading-none font-sans">
              {t('contactHeading')}
            </h2>

            {/* Clean Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-[420px] font-medium">
              {t('contactDescription')}
            </p>

            {/* Direct, clean contact listings */}
            <div className="space-y-5 pt-4">
              
              {/* Phone item */}
              <a href="tel:+917990187675" className="flex items-center gap-4 text-slate-800 hover:text-black transition-colors font-bold text-sm sm:text-[15px] no-underline group">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <i className="fas fa-phone-alt text-slate-700 group-hover:scale-110 transition-transform"></i>
                </div>
                <span>+91 7990187675</span>
              </a>

              {/* Email item */}
              <a href="mailto:info@shivanidigitalhub.com" className="flex items-center gap-4 text-slate-800 hover:text-black transition-colors font-bold text-sm sm:text-[15px] no-underline group">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <i className="fas fa-envelope text-slate-700 group-hover:scale-110 transition-transform"></i>
                </div>
                <span>info@shivanidigitalhub.com</span>
              </a>

              {/* Address item */}
              <div className="flex items-start gap-4 text-slate-800 font-bold text-sm sm:text-[15px]">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fas fa-map-marker-alt text-slate-700"></i>
                </div>
                <span className="leading-relaxed">
                  5th Avenue, GF-12, Alwa Naka,<br />
                  GIDC Road, Manjalapur, Vadodara - 390 011
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Premium Light-Grey Underlined Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#f5f5f7] p-8 sm:p-12 rounded-[2.5rem] shadow-[0_15px_45px_rgba(0,0,0,0.02)] border border-slate-200/40 relative">
              
              <form onSubmit={onSubmit} className="space-y-8">
                
                {/* Name & Email fields in a 2-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-left">
                    <label htmlFor="name" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {t('Name')}
                    </label>
                    <input 
                      id="name" 
                      name="name" 
                      value={form.name} 
                      onChange={onChange} 
                      placeholder={t('Enter Name')} 
                      required 
                      className="w-full bg-transparent border-t-0 border-r-0 border-l-0 border-b border-slate-300 focus:border-black focus:ring-0 focus:outline-none py-2 text-sm text-black placeholder-slate-400 transition-colors" 
                    />
                  </div>
                  <div className="text-left">
                    <label htmlFor="email" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {t('Email')}
                    </label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={form.email} 
                      onChange={onChange} 
                      placeholder="info@shivanidigitalhub.com" 
                      required 
                      className="w-full bg-transparent border-t-0 border-r-0 border-l-0 border-b border-slate-300 focus:border-black focus:ring-0 focus:outline-none py-2 text-sm text-black placeholder-slate-400 transition-colors" 
                    />
                  </div>
                </div>

                {/* Phone & Service fields in a 2-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-left">
                    <label htmlFor="phone" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {t('Phone Number')}
                    </label>
                    <input 
                      id="phone" 
                      name="phone" 
                      value={form.phone} 
                      onChange={onChange} 
                      placeholder={t('Enter Phone')} 
                      required 
                      className="w-full bg-transparent border-t-0 border-r-0 border-l-0 border-b border-slate-300 focus:border-black focus:ring-0 focus:outline-none py-2 text-sm text-black placeholder-slate-400 transition-colors" 
                    />
                  </div>
                  <div className="text-left relative">
                    <label htmlFor="service" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {t('Service Required')}
                    </label>
                    <select 
                      id="service" 
                      name="service" 
                      value={form.service} 
                      onChange={onChange} 
                      required 
                      className="w-full bg-transparent border-t-0 border-r-0 border-l-0 border-b border-slate-300 focus:border-black focus:ring-0 focus:outline-none py-2 text-sm text-slate-800 transition-colors cursor-pointer appearance-none"
                    >
                      <option value="">{t('Select a service')}</option>
                      {services.map(s => <option key={s} value={s}>{t(s)}</option>)}
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute right-0 bottom-2.5 pointer-events-none text-slate-400 text-xs">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>

                {/* Message field (Full Width) */}
                <div className="text-left">
                  <label htmlFor="message" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {t('Message')}
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={form.message} 
                    onChange={onChange} 
                    placeholder={t('Enter Message...')} 
                    rows={2}
                    className="w-full bg-transparent border-t-0 border-r-0 border-l-0 border-b border-slate-300 focus:border-black focus:ring-0 focus:outline-none py-2 text-sm text-black placeholder-slate-400 transition-colors h-16 resize-none" 
                  />
                </div>
                
                {/* Clean Blackstone Pill Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="w-full py-4.5 rounded-full bg-black hover:bg-slate-900 text-white font-extrabold text-xs tracking-widest uppercase flex justify-center items-center gap-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <><i className="fas fa-spinner fa-spin"></i> {t('Processing...')}</>
                    ) : (
                      <>{t('Send Message')} <span className="ml-1 text-sm font-light">→</span></>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 mt-2.5 text-center font-medium">
                    <i className="fab fa-whatsapp text-emerald-600 mr-1 text-xs"></i> 
                    {t('This will open WhatsApp with your message details pre-filled.')}
                  </p>
                </div>

                {/* Status Message */}
                {msg.text && (
                  <p 
                    className="mt-4 text-center font-bold text-xs animate-fade-in" 
                    style={{ color: msg.ok ? '#10b981' : '#ef4444' }}
                  >
                    {msg.text}
                  </p>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
