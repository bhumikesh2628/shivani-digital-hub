import { useState, useEffect } from 'react'
import { validateContactForm } from '../utils/validation'
import { useLanguage } from '../context/LanguageContext'
import Header from '../components/Header'
import useScrollReveal from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

const documents = [
  { icon: 'fa-file-signature', title: 'PAN and Aadhaar Card', desc: 'Both PAN and Aadhaar Card of the business owner or authorized signatory' },
  { icon: 'fa-id-card', title: 'Identity Proof', desc: 'Either Voter ID, Passport, or Driving License of the business owner or authorized signatory.' },
  { icon: 'fa-file-invoice', title: 'Proof of Address', desc: 'Copy of the latest Telephone Bill, Electricity Bill, or Bank Account Statement of the registered office.' },
  { icon: 'fa-building', title: 'Business Address Proof', desc: 'Either of the latest Utility Bill (Electricity, Telephone, Gas, Water) or Property Tax Bill of the registered office address.' },
  { icon: 'fa-file-alt', title: 'Business Registration Proof', desc: 'Company Registration Certificate, Partnership Deed, or GST Registration Certificate.' },
]

const advantages = [
  { icon: 'fa-shield-alt', title: 'Enhanced Credibility', desc: 'ISO certification demonstrates your commitment to quality, enhancing trust with customers, suppliers, and stakeholders.' },
  { icon: 'fa-chart-line', title: 'Improved Efficiency', desc: 'ISO standards help streamline processes, reduce waste, and improve overall operational efficiency.' },
  { icon: 'fa-globe', title: 'Global Recognition', desc: 'ISO certification is recognized worldwide, opening doors to international markets and business opportunities.' },
  { icon: 'fa-trophy', title: 'Competitive Advantage', desc: 'Certified businesses often win more contracts and tenders, giving them a competitive edge in the marketplace.' },
]

const isoTypes = [
  { icon: 'fa-certificate', title: 'ISO 9001:2015', desc: 'Quality Management System - Most popular ISO standard for quality assurance and customer satisfaction.' },
  { icon: 'fa-leaf', title: 'ISO 14001:2015', desc: 'Environmental Management System - Helps organizations minimize environmental impact and comply with regulations.' },
  { icon: 'fa-heartbeat', title: 'ISO 45001:2018', desc: 'Occupational Health & Safety - Focuses on workplace safety and reducing occupational hazards.' },
  { icon: 'fa-lock', title: 'ISO 27001:2013', desc: 'Information Security Management - Protects sensitive information and manages cybersecurity risks.' },
]



const faqsList = [
  { q: 'What is ISO Certification?', a: 'ISO (International Organization for Standardization) certification is a globally recognized standard that ensures your products, services, and processes meet quality and safety requirements. It enhances credibility and opens doors to new business opportunities.' },
  { q: 'How long does ISO certification take?', a: 'The ISO certification process typically takes 3-6 months depending on the size of your organization, complexity of operations, and readiness level. Our experts work efficiently to minimize timeline.' },
  { q: 'Which ISO certification should I get?', a: 'ISO 9001:2015 (Quality Management) is the most common and suitable for most businesses. Other standards like ISO 14001 (Environment), ISO 45001 (Safety), or ISO 27001 (Information Security) may be relevant based on your industry.' },
  { q: 'Is ISO certification mandatory?', a: 'ISO certification is voluntary but highly recommended. Many government tenders, large corporations, and international clients require ISO certification as a prerequisite for doing business.' },
  { q: 'What is the validity of ISO certificate?', a: 'ISO certificates are typically valid for 3 years. Surveillance audits are conducted annually to ensure continued compliance. After 3 years, re-certification is required.' }
]

const init = { name: '', email: '', phone: '', state: '', plan: 'Basic Plan' }
const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']

export default function ISOCertification() {
  const { t } = useLanguage()
  useEffect(() => {
    document.title = "ISO Certification | Shivani Digital Hub";
  }, []);

  // Trigger scroll reveal animations
  useScrollReveal('.reveal-card')

  const [form, setForm] = useState(init)
  const [msg, setMsg] = useState({ text: '', ok: false })
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [openFaq, setOpenFaq] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    const errors = validateContactForm(form)
    if (errors.length > 0) {
      setMsg({ text: t(errors[0]), ok: false });
      return;
    }
    setLoading(true)
    setMsg({ text: '', ok: false })
    
    // Create WhatsApp message with form data
    const phoneNumber = '917990187675'
    const message = `ISO Certification Inquiry:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nState: ${form.state}\nPlan: ${form.plan}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, '_blank')
    
    setMsg({ text: t('✓ Opening WhatsApp to send your message...'), ok: true })
    setForm(init)
    setLoading(false)
  }

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const hh = 120
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - hh,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollPos = window.scrollY + 180
      const sections = ['overview', 'benefits', 'documents', 'types', 'process', 'faqs']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header />

      <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif", fontSize: '15px' }} className="bg-white min-h-screen text-slate-900 leading-relaxed">
        
        {/* HERO SECTION WITH FLOATING FORM */}
        <section className="relative w-full pt-[110px] md:pt-[220px] pb-8 md:py-16 border-b border-slate-200/50 overflow-hidden">
          {/* Background Image with Premium Gradient Overlay */}
          <div className="absolute inset-0 w-full h-[200px] md:h-full top-0 left-0 pointer-events-none select-none z-0">
            <img
              src="/hero-iso-cert.webp"
              alt="ISO Certification Background"
              className="w-full h-[200px] md:h-full object-cover object-center md:object-right opacity-100"
            />
            {/* Elegant Gradient Overlay: solid white on text area, fading to transparent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white md:bg-gradient-to-r md:from-white md:via-white/70 md:to-transparent"></div>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading and copy */}
              <div className="lg:col-span-7 text-left animate-slide-left">
                
                  <nav className="text-xs md:text-sm text-slate-500 font-semibold tracking-wide mb-3">
                    Home <span className="mx-1 text-slate-400">»</span> ISO Certification
                  </nav>

                  <h1 className="text-2xl sm:text-3.5xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-4 font-poppins">
                    ISO Certification Services in India
                  </h1>

                  <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed max-w-2xl mb-4 font-medium">
                    Get ISO certified and enhance your business credibility! Our expert auditors provide end-to-end ISO certification support with transparent pricing and fast turnaround times. 5,000+ businesses trust Shivani Digital Hub for their ISO certification needs.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed max-w-2xl mb-5 font-medium">
                    Enhance your business standards and build credibility in tenders and contracts. We assist in auditing, preparing Quality Manuals, implementing standards (ISO 9001, 14001, 27001), and securing the final certificate.
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-5 mt-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                      <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                        <i className="fas fa-certificate"></i>
                      </span>
                      <span>5,000+ ISO Certifications</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                      <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                        <i className="fas fa-star"></i>
                      </span>
                      <span>4.8/5 Client Rating</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                      <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                        <i className="fas fa-smile"></i>
                      </span>
                      <span>100% Success Rate</span>
                    </div>
                  </div>
                
              </div>

              {/* Right Column: Lead Capture Form Card */}
              <div className="lg:col-span-5 w-full max-w-md mx-auto animate-slide-right" id="registration-form">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-slate-100 w-full relative">
                  <div className="text-center mb-4">
                    <h3 className="font-poppins font-black text-lg sm:text-[20px] text-[#0f4c5c] mb-1.5">
                      Get ISO Certified Today
                    </h3>
                    <div className="w-12 h-0.5 bg-[#f0c040] mx-auto rounded-full mt-1.5"></div>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('First Name')}</label>
                        <input 
                          name="name" 
                          value={form.name.split(' ')[0] || ''} 
                          onChange={e => {
                            const val = e.target.value
                            setForm(f => {
                              const parts = f.name.split(' ')
                              const last = parts.slice(1).join(' ')
                              return { ...f, name: last ? `${val} ${last}` : val }
                            })
                          }} 
                          placeholder={t('First Name')} 
                          required 
                          className="w-full px-4 py-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Last Name')}</label>
                        <input 
                          name="lastname" 
                          value={form.lastname !== undefined ? form.lastname : (form.name.split(' ').slice(1).join(' ') || '')} 
                          placeholder={t('Last Name')} 
                          required 
                          onChange={e => { 
                            const val = e.target.value; 
                            setForm(f => { 
                              const first = f.name.split(' ')[0] || ''; 
                              return { ...f, name: first ? `${first} ${val}` : val, lastname: val }; 
                            }); 
                          }} 
                          className="w-full px-4 py-3 sm:px-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Mobile Number')}</label>
                      <div className="flex gap-2">
                        <div className="px-3 py-3 sm:py-2 border border-slate-200 rounded-lg bg-slate-50 flex items-center gap-1 text-slate-500 text-sm font-semibold select-none">
                          <span className="text-[10px] font-bold">IN</span> <span>+91</span>
                        </div>
                        <input 
                          name="phone" 
                          value={form.phone} 
                          onChange={onChange} 
                          placeholder={t('Enter Phone')} 
                          required 
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Email Address')}</label>
                      <input 
                        name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={onChange} 
                        placeholder={t('Email Address')} 
                        required 
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs sm:text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Select State')}</label>
                      <select 
                        name="state" 
                        value={form.state} 
                        onChange={onChange} 
                        required 
                        className="w-full px-4 py-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] transition-all font-medium"
                      >
                        <option value="">{t("Choose State")}</option>
                        {states.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="pt-1.5">
                      <button 
                        type="submit" 
                        disabled={loading} 
                        className="w-full py-3 sm:py-2.5 rounded-lg bg-[#0f4c5c] hover:bg-[#155e71] text-white font-extrabold text-sm tracking-wide transition-all shadow-md active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {loading ? <><i className="fas fa-spinner fa-spin mr-2"></i> Processing...</> : 'Get Started'}
                      </button>
                    </div>

                    {msg.text && (
                      <p 
                        className={`text-center font-bold text-[12.5px] mt-1.5 ${msg.ok && msg.text.includes('WhatsApp') ? 'hidden md:block' : ''}`} 
                        style={{ color: msg.ok ? '#1a7a8a' : '#e53935' }}
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

        {/* STICKY SECONDARY NAV BAR */}
        <div className={`sticky z-[990] bg-white border-b border-slate-200 shadow-sm hidden md:block select-none transition-all duration-300 ${scrolled ? 'top-[56px]' : 'top-[74px]'}`}>
          <div className="w-full max-w-7xl mx-auto px-8 flex items-center justify-center relative h-[54px]">
            <ul className="flex items-center justify-center gap-6 h-full m-0 p-0 list-none">
              <li>
                <a 
                  href="#overview" 
                  onClick={(e) => scrollToSection(e, 'overview')}
                  className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#0f4c5c] transition-all h-[54px] flex items-center border-b-2 border-transparent relative uppercase font-poppins ${activeTab === 'overview' ? 'text-[#0f4c5c] border-b-[#0f4c5c]' : ''}`}
                >
                  Overview
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  onClick={(e) => scrollToSection(e, 'benefits')}
                  className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#0f4c5c] transition-all h-[54px] flex items-center border-b-2 border-transparent relative uppercase font-poppins ${activeTab === 'benefits' ? 'text-[#0f4c5c] border-b-[#0f4c5c]' : ''}`}
                >
                  Benefits
                </a>
              </li>
              <li>
                <a 
                  href="#documents" 
                  onClick={(e) => scrollToSection(e, 'documents')}
                  className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#0f4c5c] transition-all h-[54px] flex items-center border-b-2 border-transparent relative uppercase font-poppins ${activeTab === 'documents' ? 'text-[#0f4c5c] border-b-[#0f4c5c]' : ''}`}
                >
                  Documents
                </a>
              </li>
              <li>
                <a 
                  href="#types" 
                  onClick={(e) => scrollToSection(e, 'types')}
                  className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#0f4c5c] transition-all h-[54px] flex items-center border-b-2 border-transparent relative uppercase font-poppins ${activeTab === 'types' ? 'text-[#0f4c5c] border-b-[#0f4c5c]' : ''}`}
                >
                  ISO Types
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => scrollToSection(e, 'process')}
                  className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#0f4c5c] transition-all h-[54px] flex items-center border-b-2 border-transparent relative uppercase font-poppins ${activeTab === 'process' ? 'text-[#0f4c5c] border-b-[#0f4c5c]' : ''}`}
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  href="#faqs" 
                  onClick={(e) => scrollToSection(e, 'faqs')}
                  className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#0f4c5c] transition-all h-[54px] flex items-center border-b-2 border-transparent relative uppercase font-poppins ${activeTab === 'faqs' ? 'text-[#0f4c5c] border-b-[#0f4c5c]' : ''}`}
                >
                  FAQs
                </a>
              </li>
            </ul>

            <div className="absolute right-8">
              <button 
                onClick={(e) => scrollToSection(e, 'registration-form')}
                className="px-5 py-1.5 bg-[#f0c040] hover:bg-[#d97706] text-white hover:text-white font-extrabold text-[12px] rounded-lg tracking-wide transition-all shadow-sm flex items-center gap-1.5 border-none cursor-pointer uppercase"
              >
                Get Started <i className="fas fa-arrow-up text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        {/* OVERVIEW SECTION */}
        <section className="py-16 sm:py-20 bg-white" id="overview">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#0f4c5c]">
                Introduction
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                ISO Certification Services in India
              </h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-left space-y-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  ISO certification is a globally recognized standard that demonstrates your commitment to quality, efficiency, and continuous improvement. Whether you need ISO 9001 for quality management, ISO 14001 for environmental management, or any other ISO standard, our expert auditors provide comprehensive support throughout the certification process.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  With ISO certification, your business gains enhanced credibility, improved operational efficiency, and access to new markets. Our streamlined process ensures you get certified quickly and efficiently, with minimal disruption to your daily operations.
                </p>
              </div>

              <div className="lg:col-span-5 w-full">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 group cursor-pointer">
                  <img 
                    src="/iso-certification.webp" 
                    alt="ISO Certification" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                    <div className="w-16 h-16 bg-[#0f4c5c] hover:bg-[#155e71] hover:scale-105 transition-all rounded-full flex items-center justify-center text-white shadow-xl">
                      <i className="fas fa-play text-xl ml-1"></i>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2.5 rounded-lg text-left">
                    <span className="text-[10px] text-[#f0c040] uppercase tracking-wider font-extrabold font-poppins block">Expert Assisted</span>
                    <span className="text-white text-xs font-bold leading-tight block">ISO Certification Process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-16 sm:py-20 bg-[#fff5ec] border-y border-orange-100/50" id="benefits">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#0f4c5c]">
                Benefits
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                Why Get ISO Certified?
              </h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-6xl mx-auto">
              {advantages.map(({ icon, title, desc }) => (
                <div key={title} className="text-left space-y-3 p-5 rounded-2xl bg-white border border-slate-100 hover-lift reveal-card shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
                  <div className="flex items-center gap-3.5">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#0f4c5c] text-white flex items-center justify-center text-base shadow-sm">
                      <i className={`fas ${icon}`}></i>
                    </div>
                    <h3 className="text-base sm:text-[18px] font-bold text-[#0f4c5c] font-poppins">{title}</h3>
                  </div>
                  <p className="text-slate-800 text-xs sm:text-[14.5px] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCUMENTS REQUIRED SECTION */}
        <section className="py-16 sm:py-20 bg-white" id="documents">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#0f4c5c]">
                Documents Checklist
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                Documents Required for ISO Certification
              </h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white p-6 rounded-2xl border border-slate-150 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover-lift flex items-start gap-4 text-left reveal-card">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#0f4c5c] border border-orange-100 flex items-center justify-center text-lg shrink-0">
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0f4c5c] mb-1.5">{title}</h4>
                    <p className="text-slate-600 text-[13px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ISO TYPES SECTION */}
        <section className="py-16 sm:py-20 bg-[#f4faff] border-y border-sky-100/50" id="types">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#0f4c5c]">
                ISO Standards
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                Popular ISO Certification Types
              </h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {isoTypes.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white p-6 rounded-2xl border border-slate-150 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover-lift text-left flex flex-col reveal-card">
                  <div className="w-12 h-12 rounded-xl bg-[#0f4c5c]/10 text-[#0f4c5c] flex items-center justify-center text-xl mb-4 shrink-0">
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <h4 className="text-[16px] font-bold text-[#0f4c5c] mb-2">{title}</h4>
                  <p className="text-slate-600 text-[13px] leading-relaxed flex-grow">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-16 sm:py-20 bg-white" id="process">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto items-start">

              {/* Left Column: ISO Certification in 3 steps */}
              <div className="text-left reveal-card">
                <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#0f4c5c] block mb-2 font-poppins">
                  GET CERTIFIED WITH CSC SHIVANI
                </span>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight mb-8 font-poppins leading-tight">
                  ISO Certification in Three Easy Steps!
                </h3>

                <div className="relative space-y-10 pl-4 border-l-2 border-sky-100/70 ml-2">

                  {/* Step 1 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-sky-100 text-[#0f4c5c] font-extrabold flex items-center justify-center text-sm shadow-sm select-none border border-white">
                      ?
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-[#0f4c5c] text-[15px] sm:text-base mb-2 font-poppins">1. Answer Quick Questions</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Pick the most suitable ISO certification package</li>
                        <li>Take 5-10 minutes to answer simple questions</li>
                        <li>Provide documents as per the checklist</li>
                        <li>Make payment through a secured payment gateway</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-sky-100 text-[#0f4c5c] flex items-center justify-center text-xs shadow-sm border border-white">
                      <i className="fas fa-user text-xs"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-[#0f4c5c] text-[15px] sm:text-base mb-2 font-poppins">2. Experts at Your Service</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>We will assign a dedicated Relationship Manager</li>
                        <li>Relax while experts draft and file your documents</li>
                        <li>We commit to addressing any queries within 24 business hours</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-sky-100 text-[#0f4c5c] flex items-center justify-center text-xs shadow-sm border border-white">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-[#0f4c5c] text-[15px] sm:text-base mb-2 font-poppins">3. You are All Set to Roll</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>All it takes is 7-10 working days*</li>
                        <li>Get your ISO certificate and enhance your business credibility</li>
                      </ul>
                    </div>
                  </div>

                </div>

                <p className="text-[11px] text-slate-400 mt-8 italic pl-2 border-t border-slate-50 pt-4">
                  *Subject to certification body processing time
                </p>
              </div>

              {/* Right Column: Quickest Way to Get ISO Certified */}
              <div className="text-left reveal-card">
                <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#0f4c5c] block mb-2 font-poppins">
                  CERTIFICATION TIMELINE
                </span>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight mb-8 font-poppins leading-tight">
                  Quickest Way to Get ISO Certified
                </h3>

                <div className="relative space-y-10 pl-4 border-l-2 border-emerald-100/70 ml-2">

                  {/* Days 1-2 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] shadow-sm border border-white">
                      <i className="fas fa-clipboard-check text-[11px]"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-emerald-600 text-[15px] sm:text-base mb-2 font-poppins">Days 1 - 2</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Experts review your documents and information</li>
                        <li>Application submission to certification body</li>
                      </ul>
                    </div>
                  </div>

                  {/* Days 3-5 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-extrabold flex items-center justify-center text-[9px] shadow-sm border border-white select-none">
                      AB
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-emerald-600 text-[15px] sm:text-base mb-2 font-poppins">Days 3 - 5</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Documentation and quality manual preparation</li>
                        <li>Internal audit planning</li>
                      </ul>
                    </div>
                  </div>

                  {/* Days 6-8 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs shadow-sm border border-white">
                      <i className="fas fa-list-ul text-xs"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-emerald-600 text-[15px] sm:text-base mb-2 font-poppins">Days 6 - 8</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Stage 1 and Stage 2 audit scheduling</li>
                        <li>On-site audit by certification body</li>
                      </ul>
                    </div>
                  </div>

                  {/* Days 9-10 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs shadow-sm border border-white">
                      <i className="fas fa-calendar-alt text-xs"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-emerald-600 text-[15px] sm:text-base mb-2 font-poppins">Days 9 - 10</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Awaiting certification body approval</li>
                        <li>ISO certificate issuance</li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* FAQs SECTION */}
        <section className="py-16 sm:py-20 bg-white" id="faqs">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#0f4c5c]">
                FAQs
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqsList.map(({ q, a }, index) => (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-all"
                  >
                    <span className="font-bold text-[#0f4c5c] text-sm sm:text-base">{q}</span>
                    <i className={`fas fa-chevron-down text-slate-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}></i>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-white text-slate-600 text-sm sm:text-base leading-relaxed">
                      {a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}
