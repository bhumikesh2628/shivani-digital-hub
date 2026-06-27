import { useState, useEffect } from 'react'
import { validateContactForm } from '../utils/validation'
import { useLanguage } from '../context/LanguageContext'
import Header from '../components/Header'
import useScrollReveal from '../hooks/useScrollReveal'
import Footer from '../components/Footer'

const documents = [
  { icon: 'fa-file-signature', title: 'PAN and Aadhaar Card', desc: 'Both PAN and Aadhaar Card of all Indian Shareholders and Directors' },
  { icon: 'fa-id-card', title: 'Identity Proof', desc: 'Either Voter ID, Passport, or Driving License of all the designated Directors and Shareholders.' },
  { icon: 'fa-file-invoice', title: 'Proof of Address', desc: 'Copy of the latest Telephone Bill, Electricity Bill, or Bank Account Statement of the Shareholders and Directors.' },
  { icon: 'fa-user-circle', title: 'Photographs', desc: 'Latest passport size photographs of all the Shareholders and Directors.' },
  { icon: 'fa-building', title: 'Business Address Proof', desc: 'Either of the latest Utility Bill (Electricity, Telephone, Gas, Water) or Property Tax Bill of the registered office address. Rent agreement and NOC from the owner in case of rented property.' },
]

const advantages = [
  { icon: 'fa-shield-alt', title: 'Limited Liability of Shareholders', desc: 'The accountability of shareholders and Directors depends on the amount of the shares owned by them. Personal assets are not affected in case of financial emergency.' },
  { icon: 'fa-sack-dollar', title: 'Separate Legal Existence', desc: 'The company enjoys a separate legal existence from the owners. It can enter into contracts, own assets, and sue third parties in its own name. As a distinct entity, it has a perpetual existence.' },
  { icon: 'fa-chart-pie', title: 'Clarity in Management and Ownership', desc: 'While the shareholders are the owners of the business, the management decisions are made by the directors of the company. This helps the business to benefit from professional management without diluting ownership.' },
  { icon: 'fa-hand-holding-usd', title: 'Ease in Raising Funds', desc: 'Being a highly compliant structure, banks prefer to issue loans to Companies and LLPs. Public Limited Companies can also raise massive capital by selling shares or accepting deposits from the general public.' },
]

const nameRules = [
  { icon: 'fa-crown', title: 'Unique Name', desc: 'Distinct name that is not an already registered company or trademark stands a better chance of name approval from MCA.' },
  { icon: 'fa-briefcase', title: 'Business Activity', desc: 'The second part of the name should ideally suggest the primary business activity of the company.' },
  { icon: 'fa-font', title: 'Name Suffix', desc: 'The name of the company shall end with "Ltd." or "Limited" to represent its public corporate status.' }
]

const init = { name: '', email: '', phone: '', state: '', plan: 'Startup Plan' }
const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']

export default function PublicLimitedCompany() {
  const { t } = useLanguage()
  useEffect(() => {
    document.title = "Public Limited Company Registration | Shivani Digital Hub";
  }, []);

  // Trigger scroll reveal animations
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
    const serviceName = `Public Limited Company - ${form.plan}`
    const whatsappMessage = `Public Limited Company Inquiry:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nState: ${form.state}\nPlan: ${form.plan}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    
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
    const hh = 120 // Header height + sticky subnav height
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - hh,
        behavior: 'smooth'
      })
    }
  }

  // Scrollspy to update subnav active class
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
              src="/public-company-hero-banner.webp"
              alt="Public Company Background"
              className="w-full h-[200px] md:h-full object-cover object-center md:object-right opacity-100"
            />
            {/* Elegant Gradient Overlay: solid white on text area, fading to transparent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white md:bg-gradient-to-r md:from-white md:via-white/70 md:to-transparent"></div>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading and copy */}
              <div className="lg:col-span-7 text-left animate-slide-left">
                
                  {/* Breadcrumbs */}
                  <nav className="text-xs md:text-sm text-slate-500 font-semibold tracking-wide mb-3">
                    Home <span className="mx-1 text-slate-400">»</span> Public Limited Company Registration
                  </nav>

                  <h1 className="text-2xl sm:text-3.5xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-4 font-poppins">
                    Online Public Limited Company Registration in India
                  </h1>

                  <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed max-w-2xl mb-4 font-medium">
                    Looking to register a Public Limited Company? Look no further! Our expert CS Assisted service offers the lowest cost with no hidden fees and a transparent pricing policy. Get fast turnaround times and hassle-free registration. 6,000+ startup business owners trust Shivani Digital Hub for starting their business and keeping it compliant with the law!
                  </p>
                  <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed max-w-2xl mb-5 font-medium">
                    Establish a large-scale corporate entity capable of raising capital from the public. We manage your name reservation, coordinate minimum capital compliances, draft regulatory MOA/AOA, and secure your incorporation certificate.
                  </p>

                  {/* Trust Badges */}
                  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-5 mt-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                      <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                        <i className="fas fa-briefcase"></i>
                      </span>
                      <span>10,000+ Startups Served</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                      <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                        <i className="fas fa-star"></i>
                      </span>
                      <span>4.7/5 Google Review</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                      <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                        <i className="fas fa-smile"></i>
                      </span>
                      <span>100% Satisfaction</span>
                    </div>
                  </div>
                
              </div>

              {/* Right Column: Lead Capture Form Card */}
              <div className="lg:col-span-5 w-full max-w-md mx-auto animate-slide-right" id="registration-form">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-slate-100 w-full relative">
                  <div className="text-center mb-4">
                    <h3 className="font-poppins font-black text-lg sm:text-[20px] text-[#991b1b] mb-1.5">{t("First Step to Start Your Business")}</h3>
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
                      <p className="text-center font-bold text-[12.5px] mt-1.5" style={{ color: msg.ok ? '#1a7a8a' : '#e53935' }}>
                        {msg.text}
                      </p>
                    )}
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STICKY SECONDARY NAV BAR (HIDDEN ON MOBILE) */}
        <div className={`sticky z-[990] bg-white border-b border-slate-200 shadow-sm hidden md:block select-none transition-all duration-300 ${scrolled ? 'top-[56px]' : 'top-[74px]'}`}>
          <div className="w-full max-w-7xl mx-auto px-8 flex items-center justify-center relative h-[54px]">
            <ul className="flex items-center justify-center gap-6 h-full m-0 p-0 list-none">
              <li>
                <a 
                  href="#overview" 
                  onClick={(e) => scrollToSection(e, 'overview')}
                  className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#991b1b] transition-all h-[54px] flex items-center border-b-2 border-transparent relative uppercase font-poppins ${activeTab === 'overview' ? 'text-[#991b1b] border-b-[#991b1b]' : ''}`}
                >
                  Overview
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  onClick={(e) => scrollToSection(e, 'benefits')}
                  className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#991b1b] transition-all h-[54px] flex items-center border-b-2 border-transparent relative uppercase font-poppins ${activeTab === 'benefits' ? 'text-[#991b1b] border-b-[#991b1b]' : ''}`}
                >
                  Benefits
                </a>
              </li>
              <li>
                <a 
                  href="#documents" 
                  onClick={(e) => scrollToSection(e, 'documents')}
                  className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#991b1b] transition-all h-[54px] flex items-center border-b-2 border-transparent relative uppercase font-poppins ${activeTab === 'documents' ? 'text-[#991b1b] border-b-[#991b1b]' : ''}`}
                >
                  Documents Required
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => scrollToSection(e, 'process')}
                  className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#991b1b] transition-all h-[54px] flex items-center border-b-2 border-transparent relative uppercase font-poppins ${activeTab === 'process' ? 'text-[#991b1b] border-b-[#991b1b]' : ''}`}
                >
                  Process
                </a>
              </li>

            </ul>

            <div className="absolute right-8">
              <button 
                onClick={(e) => scrollToSection(e, 'registration-form')}
                className="px-5 py-1.5 bg-[#e0b030] hover:bg-[#d97706] text-white hover:text-white font-extrabold text-[12px] rounded-lg tracking-wide transition-all shadow-sm flex items-center gap-1.5 border-none cursor-pointer uppercase"
              >
                Get Started <i className="fas fa-arrow-up text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        {/* 1. OVERVIEW SECTION */}
        <section className="py-16 sm:py-20 bg-white" id="overview">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706]">
                Introduction
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                Public Limited Company Registration Services in India
              </h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Info Column */}
              <div className="lg:col-span-7 text-left space-y-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Public Limited Company registration (PLC registration) is a popular way to start a large-scale business in India. It offers benefits like limited liability protection to founders, separate legal existence, easy transferability of shares, and the capability to raise capital from the general public. Hence, medium and large businesses with growth aspirations and plans to list on stock exchanges prefer a public limited company structure.
                </p>


              </div>

              {/* Graphic/Video Column */}
              <div className="lg:col-span-5 w-full">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 group cursor-pointer">
                  <img 
                    src="/company-incorporation.webp" 
                    alt="Company Incorporation Video Presentation" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                    <div className="w-16 h-16 bg-red-600 hover:bg-red-700 hover:scale-105 transition-all rounded-full flex items-center justify-center text-white shadow-xl">
                      <i className="fas fa-play text-xl ml-1"></i>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2.5 rounded-lg text-left">
                    <span className="text-[10px] text-[#f0c040] uppercase tracking-wider font-extrabold font-poppins block">CS Assisted</span>
                    <span className="text-white text-xs font-bold leading-tight block">Public Limited Incorporation Guidelines</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. BENEFITS SECTION */}
        <section className="py-16 sm:py-20 bg-[#fff5ec] border-y border-orange-100/50" id="benefits">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#e0b030]">
                Benefits
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                Why Should You Register a Public Limited Company?
              </h2>
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
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#00509d]">
                Documents Checklist
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                Documents Required for Public Limited Company Registration Online
              </h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* 3.5 HOW TO DECIDE COMPANY NAME SECTION */}
        <section className="py-16 sm:py-20 bg-[#f4faff] border-y border-sky-100/50" id="decide-name">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#00509d]">
                How to Decide
              </span>
              <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900 mt-2">
                How to Decide a Company Name
              </h3>
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

        {/* 3.75 REGISTRATION PROCESS FLOW CHART */}
        <section className="py-8 bg-white border-b border-slate-100" id="process-flow">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <img 
              src="/public-company-registration-process.webp" 
              alt="Process of Public Limited Company Registration Flow Chart" 
              className="w-full h-auto max-w-5xl object-contain hover:scale-[1.01] transition-transform duration-300 rounded-lg"
            />
          </div>
        </section>

        {/* 4. PROCESS SECTION */}
        <section className="py-16 sm:py-20 bg-white" id="process">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto items-start">
              
              {/* Left Column: Online Company Registration in 3 steps */}
              <div className="text-left reveal-card">
                <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706] block mb-2 font-poppins">
                  INCORPORATE WITH CSC SHIVANI
                </span>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight mb-8 font-poppins leading-tight">
                  Online Company Registration in Three Easy Steps!
                </h3>

                <div className="relative space-y-10 pl-4 border-l-2 border-sky-100/70 ml-2">
                  
                  {/* Step 1 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-sky-100 text-[#00509d] font-extrabold flex items-center justify-center text-sm shadow-sm select-none border border-white">
                      ?
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-[#00509d] text-[15px] sm:text-base mb-2 font-poppins">1. Answer Quick Questions</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Pick the most suitable package</li>
                        <li>Take 5-10 minutes to answer simple questions</li>
                        <li>Provide documents as per the checklist</li>
                        <li>Make payment through a secured payment gateway</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-sky-100 text-[#00509d] flex items-center justify-center text-xs shadow-sm border border-white">
                      <i className="fas fa-user text-xs"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-[#00509d] text-[15px] sm:text-base mb-2 font-poppins">2. Experts at Your Service</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>We will assign a Relationship Manager</li>
                        <li>Relax while experts draft and file your documents</li>
                        <li>We commit to addressing any queries within 24 business hours</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-sky-100 text-[#00509d] flex items-center justify-center text-xs shadow-sm border border-white">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-[#00509d] text-[15px] sm:text-base mb-2 font-poppins">3. You are All Set to Roll</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>All it takes is 10-12 working days*</li>
                        <li>Let's keep your business compliant and protected. Time to get on a free assessment call</li>
                      </ul>
                    </div>
                  </div>

                </div>

                <p className="text-[11px] text-slate-400 mt-8 italic pl-2 border-t border-slate-50 pt-4">
                  *Subject to Government processing time
                </p>
              </div>

              {/* Right Column: Quickest Way to Register a Company */}
              <div className="text-left reveal-card">
                <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706] block mb-2 font-poppins">
                  INCORPORATION TIMELINE
                </span>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight mb-8 font-poppins leading-tight">
                  Quickest Way to Register a Company
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
                        <li>Apply for Digital Signature Certificate</li>
                      </ul>
                    </div>
                  </div>

                  {/* Days 3-6 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-extrabold flex items-center justify-center text-[9px] shadow-sm border border-white select-none">
                      AB
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-emerald-600 text-[15px] sm:text-base mb-2 font-poppins">Days 3 - 6</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Name availability check on MCA and IP India Portals</li>
                        <li>Apply for Company Name Reservation</li>
                        <li>MoA and AoA drafting</li>
                      </ul>
                    </div>
                  </div>

                  {/* Days 7-9 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs shadow-sm border border-white">
                      <i className="fas fa-list-ul text-xs"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-emerald-600 text-[15px] sm:text-base mb-2 font-poppins">Days 7 - 9</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Form filling for Certificate of Incorporation (COI)</li>
                        <li>DIN Allotment Application</li>
                        <li>PAN and TAN Application</li>
                      </ul>
                    </div>
                  </div>

                  {/* Days 10-12 */}
                  <div className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[32px] top-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs shadow-sm border border-white">
                      <i className="fas fa-calendar-alt text-xs"></i>
                    </div>
                    <div className="pl-6">
                      <h4 className="font-bold text-emerald-600 text-[15px] sm:text-base mb-2 font-poppins">Days 10 - 12</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                        <li>Awaiting MCA approval and incorporation</li>
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Available to Help Badge */}
                <div className="mt-8 pl-6">
                  <div className="inline-block bg-[#e0b030] hover:bg-[#d97706] text-white font-extrabold text-[12px] px-6 py-2.5 rounded-lg tracking-wide uppercase select-none shadow-sm transition-all duration-300">
                    Available to Help!
                  </div>
                </div>
              </div>

            </div>
          </div>
             {/* Removed FAQs Section */}     </section>

        {/* Removed SEO Article Section */}

      </div>

      <Footer />
    </>
  )
}
