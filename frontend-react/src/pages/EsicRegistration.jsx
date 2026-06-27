import { useState, useEffect } from 'react'
import { validateContactForm } from '../utils/validation'
import { useLanguage } from '../context/LanguageContext'
import Header from '../components/Header'
import useScrollReveal from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

const documents = [
  { icon: 'fa-file-invoice', title: 'Business Registration Proof', desc: 'Certificate of Incorporation (COI), Partnership Deed, Shop & Establishment license, or GST certificate.' },
  { icon: 'fa-map-marker-alt', title: 'Establishment Address Proof', desc: 'Recent utility bill (electricity/telephone), registered rent agreement, or property tax receipt.' },
  { icon: 'fa-id-card', title: 'Promoter PAN & Aadhaar', desc: 'PAN Card and Aadhaar Card copies of all business proprietors, partners, or active directors.' },
  { icon: 'fa-users', title: 'Employee Roll & Joining Deeds', desc: 'List of all employees with their names, Aadhaar numbers, date of joining, and gross monthly salaries.' },
]

const advantages = [
  { icon: 'fa-hand-holding-medical', title: 'Full Medical Protection', desc: 'Provides unlimited, high-quality medical care benefits for employees and their dependent family members.' },
  { icon: 'fa-wheelchair', title: 'Sickness & Disability Pay', desc: 'Offers continuous cash payout compensations during temporary or permanent sickness and workplace disability.' },
  { icon: 'fa-baby', title: 'Paid Maternity Benefits', desc: 'Grants fully paid leaves and comprehensive healthcare support for pregnant female employees for up to 26 weeks.' },
  { icon: 'fa-user-shield', title: '100% Statutory Compliance', desc: 'Establishes absolute compliance with labor laws, avoiding legal audits, heavy penalties, or prosecution.' },
]

const nameRules = [
  { icon: 'fa-users-cog', title: '10+ Employees Threshold', desc: 'Mandatory for any factory, business establishment, shop, or company employing 10 or more staff members.' },
  { icon: 'fa-wallet', title: 'Rs. 21,000 Wage Limit', desc: 'Covers all employees whose gross monthly wages/salary is up to Rs. 21,000 (Rs. 25,000 for persons with disabilities).' },
  { icon: 'fa-percentage', title: 'Contribution Rates', desc: 'Monthly contributions consist of 3.25% of wages paid by the employer and 0.75% paid by the employee (4.0% total).' }
]

const faqsList = [
  { q: 'What is ESIC Registration?', a: 'ESIC (Employees State Insurance Corporation) registration is a mandatory social security scheme in India that provides medical, sickness, maternity, and disability benefits to employees.' },
  { q: 'Is ESIC registration mandatory for all businesses?', a: 'It is mandatory for any commercial establishment, shop, hotel, restaurant, office, or factory that employs 10 or more workers earning up to Rs. 21,000 per month.' },
  { q: 'What is the gross monthly salary threshold under ESIC?', a: 'Any employee whose gross monthly wage is Rs. 21,000 or below must be registered under ESIC. If an employee earns more than Rs. 21,000, they are excluded from ESIC.' },
  { q: 'What are the current ESIC contribution rates?', a: 'The contribution rates are 4% of the employee\'s gross salary in total—consisting of 3.25% contributed by the employer and 0.75% contributed by the employee.' },
  { q: 'What happens if a business fails to register under ESIC?', a: 'Non-registration or delayed payment of monthly ESIC dues attracts heavy compounding interest, late payment penalties, and potential imprisonment under the ESI Act.' }
]

const init = { name: '', email: '', phone: '', state: '' }
const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']

export default function EsicRegistration() {
  const { t } = useLanguage()
  useEffect(() => {
    document.title = "ESIC Registration | Shivani Digital Hub";
  }, []);

  useScrollReveal('.reveal-card')

  const [form, setForm] = useState(init)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlName = params.get('name') || ''
    const urlEmail = params.get('email') || ''
    const urlPhone = params.get('phone') || ''
    const urlState = params.get('state') || ''
    if (urlName || urlEmail || urlPhone || urlState) {
      setForm(prev => ({
        ...prev,
        name: urlName || prev.name,
        email: urlEmail || prev.email,
        phone: urlPhone || prev.phone,
        state: urlState || prev.state
      }))
    }
  }, [])
  const [msg, setMsg] = useState({ text: '', ok: false })
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [openFaq, setOpenFaq] = useState(null)
  const [faqSearch, setFaqSearch] = useState('')
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
    
    const phoneNumber = '917990187675'
    const serviceName = `ESIC Registration`
    const message = `ESIC Registration Inquiry:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nState: ${form.state}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: serviceName }),
      })
    } catch {
      // Silent API registration error - logged for debugging
    }
    
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
      const sections = ['overview', 'benefits', 'documents', 'process', 'faqs']
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
              src="/esic_registration_hero_bg.webp"
              alt="ESIC Registration Background"
              className="w-full h-[200px] md:h-full object-cover object-center md:object-right opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white md:bg-gradient-to-r md:from-white md:via-white/70 md:to-transparent"></div>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading and copy */}
              <div className="lg:col-span-7 text-left animate-slide-left">
                {/* Breadcrumbs */}
                <nav className="text-xs md:text-sm text-slate-500 font-semibold tracking-wide mb-3">
                  Home <span className="mx-1 text-slate-400">»</span> ESIC Registration
                </nav>

                <h1 className="text-2xl sm:text-3.5xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-4 font-poppins">
                  Online ESIC Registration Services
                </h1>

                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed max-w-2xl mb-4 font-medium">
                  Enroll your business under the ESI social security scheme online. Secure robust medical, maternity, and sickness coverage for your employees, and achieve 100% labor law compliance.
                </p>
                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed max-w-2xl mb-5 font-medium">
                  Provide essential healthcare benefits to your workforce through ESIC registration. We manage employer enrollment, employee sub-code generation, monthly contribution filings, and ensure ESIC compliance documentation is in place.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-5 mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                    <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                      <i className="fas fa-briefcase"></i>
                    </span>
                    <span>1,800+ Businesses Enrolled</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                    <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                      <i className="fas fa-star"></i>
                    </span>
                    <span>4.8/5 Client Rating</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                    <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                      <i className="fas fa-shield-alt"></i>
                    </span>
                    <span>Government Portal Approved</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Capture Form Card */}
              <div className="lg:col-span-5 w-full max-w-md mx-auto animate-slide-right" id="registration-form">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-slate-100 w-full relative">
                  <div className="text-center mb-4">
                    <h3 className="font-poppins font-black text-lg sm:text-[20px] text-[#991b1b] mb-1.5">{t("Register ESIC Now")}</h3>
                    <div className="w-12 h-0.5 bg-[#f0c040] mx-auto rounded-full mt-1.5"></div>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="first_name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('First Name')}</label>
                        <input 
                          id="first_name" name="name" 
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
                          className="w-full px-4 py-3 sm:px-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
                        />
                      </div>
                      <div>
                        <label htmlFor="last_name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Last Name')}</label>
                        <input 
                          id="last_name" name="lastname" 
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
                      <label htmlFor="mobile_number" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Mobile Number')}</label>
                      <div className="flex gap-2">
                        <div className="px-3 py-3 sm:px-2.5 sm:py-2 border border-slate-200 rounded-lg bg-slate-50 flex items-center gap-1 text-slate-500 text-sm font-semibold select-none">
                          <span className="text-[10px] font-bold">IN</span> <span>+91</span>
                        </div>
                        <input 
                          id="mobile_number" name="phone" 
                          value={form.phone} 
                          onChange={onChange} 
                          placeholder={t('Enter Phone')} 
                          required 
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3 sm:px-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email_address" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Email Address')}</label>
                      <input 
                        id="email_address" name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={onChange} 
                        placeholder={t('Email Address')} 
                        required 
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs sm:text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] placeholder-slate-400 transition-all font-medium" 
                      />
                    </div>

                    <div>
                      <label htmlFor="state_select" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">{t('Select State')}</label>
                      <select 
                        id="state_select" name="state" 
                        value={form.state} 
                        onChange={onChange} 
                        required 
                        className="w-full px-4 py-3 sm:px-3 sm:py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] transition-all font-medium"
                      >
                        <option value="">{t("Choose State")}</option>
                        {states.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="pt-1.5">
                      <button 
                        type="submit" 
                        disabled={loading} 
                        className="w-full py-3 sm:py-2.5 rounded-lg bg-[#00509d] hover:bg-[#003f7a] text-white font-extrabold text-sm tracking-wide transition-all shadow-md active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {loading ? <><i className="fas fa-spinner fa-spin mr-2"></i> {t('Processing...')}</> : t('Get Started')}
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
                <a href="#overview" onClick={(e) => scrollToSection(e, 'overview')} className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#991b1b] transition-all h-[54px] flex items-center border-b-2 border-transparent uppercase font-poppins ${activeTab === 'overview' ? 'text-[#991b1b] border-b-[#991b1b]' : ''}`}>Overview</a>
              </li>
              <li>
                <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#991b1b] transition-all h-[54px] flex items-center border-b-2 border-transparent uppercase font-poppins ${activeTab === 'benefits' ? 'text-[#991b1b] border-b-[#991b1b]' : ''}`}>Benefits</a>
              </li>
              <li>
                <a href="#documents" onClick={(e) => scrollToSection(e, 'documents')} className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#991b1b] transition-all h-[54px] flex items-center border-b-2 border-transparent uppercase font-poppins ${activeTab === 'documents' ? 'text-[#991b1b] border-b-[#991b1b]' : ''}`}>Documents</a>
              </li>
              <li>
                <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#991b1b] transition-all h-[54px] flex items-center border-b-2 border-transparent uppercase font-poppins ${activeTab === 'process' ? 'text-[#991b1b] border-b-[#991b1b]' : ''}`}>Process</a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => scrollToSection(e, 'faqs')} className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#991b1b] transition-all h-[54px] flex items-center border-b-2 border-transparent uppercase font-poppins ${activeTab === 'faqs' ? 'text-[#991b1b] border-b-[#991b1b]' : ''}`}>FAQs</a>
              </li>
            </ul>
            <div className="absolute right-8">
              <button onClick={(e) => scrollToSection(e, 'registration-form')} className="px-5 py-1.5 bg-[#e0b030] hover:bg-[#d97706] text-white hover:text-white font-extrabold text-[12px] rounded-lg tracking-wide transition-all shadow-sm flex items-center gap-1.5 border-none cursor-pointer uppercase">
                Register Now <i className="fas fa-arrow-up text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        {/* 1. OVERVIEW SECTION */}
        <section className="py-16 sm:py-20 bg-white" id="overview">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706]">Introduction</span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">Understanding ESIC Registration</h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
              
              {/* FAQ Live Search Bar */}
              <div className="max-w-md mx-auto relative mt-6">
                <input 
                  type="text"
                  value={faqSearch}
                  onChange={e => {
                    setFaqSearch(e.target.value)
                    setOpenFaq(null)
                  }}
                  placeholder={t("🔍 Search FAQs (e.g., DIN, GST, documents)...")}
                  className="w-full px-5 py-2.5 pl-11 text-xs sm:text-sm bg-white border border-slate-200 rounded-full focus:outline-none focus:border-[#991b1b] focus:ring-1 focus:ring-[#991b1b] transition-all shadow-sm text-slate-800 placeholder-slate-400"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  <i className="fas fa-search"></i>
                </div>
                {faqSearch && (
                  <button 
                    type="button"
                    onClick={() => setFaqSearch('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer border-none bg-transparent"
                  >
                    <i className="fas fa-times-circle"></i>
                  </button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-12 text-left space-y-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The Employees State Insurance (ESI) scheme is a comprehensive, multi-dimensional social security system governed by the ESI Act, 1948. It is designed to provide complete medical protection and financial security to employees in the organized sector against distress caused by sickness, temporary or permanent physical disablement, maternity, or occupational injury.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Under labor laws, any shop, commercial office, restaurant, hotel, or factory employing 10 or more staff members earning up to Rs. 21,000 per month must register with the ESIC portal within 15 days of eligibility. This registration establishes a formal security network for employees while shielding employers from legal non-compliance penalties. Our labor law compliance managers prepare your document deeds, manage portal submissions, and obtain your official 17-digit ESIC Code Number.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BENEFITS SECTION */}
        <section className="py-16 sm:py-20 bg-[#fff5ec] border-y border-orange-100/50" id="benefits">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#e0b030]">Benefits</span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">Key Advantages of ESIC Enrollment</h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-6xl mx-auto">
              {advantages.map(({ icon, title, desc }) => (
                <div key={title} className="text-left space-y-3 p-5 rounded-2xl bg-white border border-slate-100 hover-lift reveal-card shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
                  <div className="flex items-center gap-3.5">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#e0b030] text-white flex items-center justify-center text-base shadow-sm">
                      <i className={`fas ${icon}`}></i>
                    </div>
                    <h3 className="text-base sm:text-[18px] font-bold text-[#e0b030] font-poppins">{title}</h3>
                  </div>
                  <p className="text-slate-800 text-xs sm:text-[14.5px] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. DOCUMENTS REQUIRED SECTION */}
        <section className="py-16 sm:py-20 bg-white" id="documents">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#00509d]">Documents Checklist</span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">Documents Checklist for ESIC Registration</h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {documents.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white p-6 rounded-2xl border border-slate-150 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover-lift flex items-start gap-4 text-left reveal-card">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#d97706] border border-orange-100 flex items-center justify-center text-lg shrink-0">
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#d97706] mb-1.5">{title}</h4>
                    <p className="text-slate-600 text-[13px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.5 RULES SECTION */}
        <section className="py-16 sm:py-20 bg-[#f4faff] border-y border-sky-100/50" id="decide-name">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#00509d]">Guidelines</span>
              <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900 mt-2">ESI Portal Registration Guidelines</h3>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {nameRules.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white p-6 rounded-2xl border border-slate-150 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover-lift text-left flex flex-col reveal-card">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#d97706] flex items-center justify-center text-lg mb-4 shrink-0">
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <h4 className="text-[15px] font-bold text-[#d97706] mb-2">{title}</h4>
                  <p className="text-slate-600 text-[13px] leading-relaxed flex-grow">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROCESS SECTION */}
        <section className="py-16 sm:py-20 bg-white" id="process">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto items-start">
              
              {/* Left Column */}
              <div className="text-left reveal-card">
                <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706] block mb-2 font-poppins">REGISTRATION WITH CSC SHIVANI</span>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight mb-8 font-poppins leading-tight">ESIC Enrollment in Three Easy Steps!</h3>

                <div className="relative space-y-10 pl-4 border-l-2 border-sky-100/70 ml-2">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-sky-100 text-[#00509d] font-extrabold flex items-center justify-center text-sm shadow-sm select-none border border-white">?</div>
                    <div className="pl-6">
                      <h4 className="font-bold text-[#00509d] text-[15px] sm:text-base mb-2 font-poppins">1. KYC Data & Employee Roster Upload</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Submit establishment registration documents and address proof</li>
                        <li>Upload your active employee roster with gross salary structures</li>
                        <li>Initialize secure compliance profile setup</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-sky-100 text-[#00509d] flex items-center justify-center text-xs shadow-sm border border-white">
                      <i className="fas fa-file-contract text-xs"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-[#00509d] text-[15px] sm:text-base mb-2 font-poppins">2. Portal Filing & Verification</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Our legal compliance experts draft and file the online ESIC application</li>
                        <li>Map employee details and associate Aadhaar/bank listings</li>
                        <li>Complete portal pre-submission verification</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-sky-100 text-[#00509d] flex items-center justify-center text-xs shadow-sm border border-white">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-[#00509d] text-[15px] sm:text-base mb-2 font-poppins">3. ESIC Code & Pehchan Card Delivery</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Acquire the official 17-digit ESIC Establishment Code Number</li>
                        <li>Deliver Pehchan (identity) details and ESI cards to registered employees</li>
                        <li>Complete initial compliance onboarding training for monthly filings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="text-left reveal-card">
                <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706] block mb-2 font-poppins">PROCESSING TIMELINE</span>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight mb-8 font-poppins leading-tight">Quickest ESIC Timeline</h3>

                <div className="relative space-y-10 pl-4 border-l-2 border-emerald-100/70 ml-2">
                  {/* Days 1-2 */}
                  <div className="relative">
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] shadow-sm border border-white">
                      <i className="fas fa-clipboard-check text-[11px]"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-emerald-600 text-[15px] sm:text-base mb-2 font-poppins">Days 1 - 2</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Validation of factory/shop licenses, business registration, and address proof</li>
                        <li>Reviewing employee rosters, wage limits, and promoter Aadhaar links</li>
                      </ul>
                    </div>
                  </div>

                  {/* Days 3-4 */}
                  <div className="relative">
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-extrabold flex items-center justify-center text-[9px] shadow-sm border border-white select-none">ESI</div>
                    <div className="pl-6">
                      <h4 className="font-bold text-emerald-600 text-[15px] sm:text-base mb-2 font-poppins">Days 3 - 4</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Filing the formal registration application on the ESIC online portal</li>
                        <li>Receiving the official 17-digit ESIC code and issuing Pehchan cards</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pl-6">
                  <button type="button" onClick={(e) => scrollToSection(e, 'registration-form')} className="inline-block bg-[#e0b030] hover:bg-[#d97706] text-white font-extrabold text-[12px] px-6 py-2.5 rounded-lg tracking-wide uppercase select-none shadow-sm transition-all duration-300 cursor-pointer">Register Under ESIC Today!</button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. FAQS SECTION */}
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100" id="faqs">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706]">Questions</span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">Frequently Asked Questions</h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>
            <div className="space-y-4 text-left">
              {(faqSearch && faqsList.filter(f => f.q.toLowerCase().includes(faqSearch.toLowerCase()) || f.a.toLowerCase().includes(faqSearch.toLowerCase())).length === 0) && (
                <div className="text-center py-8 text-slate-400 text-xs sm:text-sm">No matches found for "{faqSearch}"</div>
              )}
              {((faqSearch ? faqsList.filter(f => f.q.toLowerCase().includes(faqSearch.toLowerCase()) || f.a.toLowerCase().includes(faqSearch.toLowerCase())) : faqsList)).map(({ q, a }, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div key={q} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all bg-white shadow-sm reveal-card">
                    <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full px-6 py-4.5 text-left font-bold text-slate-800 text-sm sm:text-base flex items-center justify-between hover:bg-slate-50/50 transition-colors cursor-pointer bg-transparent border-none outline-none">
                      <span>{q}</span>
                      <i className={`fas fa-chevron-down text-xs text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] border-t border-slate-100' : 'max-h-0'}`}>
                      <p className="px-6 py-5 text-xs sm:text-sm leading-relaxed text-slate-600 m-0 bg-slate-50/40">{a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}
