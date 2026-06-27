import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'
import FaqSection from '../components/FaqSection'
import { useLanguage } from '../context/LanguageContext'

export default function ServicePageLayout({
  title,
  serviceName,
  heroBg,
  heroDesc,
  badgeText1,
  badgeText2,
  badgeText3,
  
  overviewBadge,
  overviewTitle,
  overviewParagraphs,
  
  benefitsBadge,
  benefitsTitle,
  benefits,
  
  documentsBadge,
  documentsTitle,
  documents,
  
  guidelinesBadge,
  guidelinesTitle,
  guidelines, // Array of {icon, title, desc} (optional)
  
  processSubtitle,
  processTitle,
  processSteps, // Array of {badge, icon, title, bullets}
  
  timelineSubtitle,
  timelineTitle,
  timelineSteps, // Array of {badge, icon, title, bullets}
  
  faqs
}) {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('overview')
  const [scrolled, setScrolled] = useState(false)
  const hasGuidelines = guidelines && guidelines.length > 0

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
      const sections = [
        'overview', 
        'benefits', 
        'documents', 
        ...(hasGuidelines ? ['decide-name'] : []), 
        'process', 
        'faqs'
      ]
      
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
  }, [hasGuidelines])

  const renderTimelineBadge = (step, isTimeline) => {
    const colorBg = isTimeline ? 'bg-emerald-100 text-emerald-600' : 'bg-sky-100 text-[#00509d]'
    if (step.icon) {
      return (
        <div className={`absolute -left-[32px] top-0 w-8 h-8 rounded-full ${colorBg} flex items-center justify-center text-xs shadow-sm border border-white`}>
          <i className={`fas ${step.icon} text-xs`}></i>
        </div>
      )
    }
    return (
      <div className={`absolute -left-[32px] top-0 w-8 h-8 rounded-full ${colorBg} font-extrabold flex items-center justify-center text-sm shadow-sm select-none border border-white`}>
        {step.badge || '?'}
      </div>
    )
  }

  return (
    <>
      <Header />

      <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif", fontSize: '15px' }} className="bg-white min-h-screen text-slate-900 leading-relaxed">
        
        {/* HERO SECTION WITH FLOATING FORM */}
        <section className="relative w-full pt-[110px] md:pt-[220px] pb-8 md:py-16 border-b border-slate-200/50 overflow-hidden">
          {/* Background Image with Premium Gradient Overlay */}
          <div className="absolute inset-0 w-full h-[200px] md:h-full top-0 left-0 pointer-events-none select-none z-0">
            <img
              src={heroBg}
              alt={title}
              className="w-full h-[200px] md:h-full object-cover object-center md:object-right opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white md:bg-gradient-to-r md:from-white md:via-white/70 md:to-transparent"></div>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading and copy */}
              <div className="lg:col-span-7 text-left animate-slide-left">
                <nav className="text-xs md:text-sm text-slate-500 font-semibold tracking-wide mb-3">
                  Home <span className="mx-1 text-slate-400">»</span> {serviceName}
                </nav>

                <h1 className="text-2xl sm:text-3.5xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-4 font-poppins">
                  {title}
                </h1>

                {heroDesc && heroDesc.map((desc, idx) => (
                  <p key={idx} className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed max-w-2xl mb-4 font-medium">
                    {desc}
                  </p>
                ))}

                {/* Trust Badges */}
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-5 mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                    <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                      <i className="fas fa-building"></i>
                    </span>
                    <span>{badgeText1 || t('10,000+ Businesses Served')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                    <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                      <i className="fas fa-star"></i>
                    </span>
                    <span>{badgeText2 || t('4.9/5 Rating')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-800">
                    <span className="w-6.5 h-6.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0 animate-pulse-slow">
                      <i className="fas fa-user-shield"></i>
                    </span>
                    <span>{badgeText3 || t('Complete Legal Safety')}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Capture Form Card */}
              <div className="lg:col-span-5 w-full max-w-md mx-auto animate-slide-right" id="registration-form">
                <LeadForm serviceName={serviceName} />
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
              {hasGuidelines && (
                <li>
                  <a href="#decide-name" onClick={(e) => scrollToSection(e, 'decide-name')} className={`text-[12.5px] font-bold tracking-wider text-slate-600 hover:text-[#991b1b] transition-all h-[54px] flex items-center border-b-2 border-transparent uppercase font-poppins ${activeTab === 'decide-name' ? 'text-[#991b1b] border-b-[#991b1b]' : ''}`}>Guidelines</a>
                </li>
              )}
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
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706]">
                {overviewBadge || t('Introduction')}
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                {overviewTitle}
              </h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-12 text-left space-y-6">
                {overviewParagraphs && overviewParagraphs.map((para, idx) => (
                  <p key={idx} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. BENEFITS SECTION */}
        <section className="py-16 sm:py-20 bg-[#fff5ec] border-y border-orange-100/50" id="benefits">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#e0b030]">
                {benefitsBadge || t('Benefits')}
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                {benefitsTitle}
              </h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-6xl mx-auto">
              {benefits && benefits.map(({ icon, title, desc }) => (
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
                {documentsBadge || t('Documents Checklist')}
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
                {documentsTitle}
              </h2>
              <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents && documents.map(({ icon, title, desc }) => (
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

        {/* 3.5 GUIDELINES SECTION (Conditional) */}
        {hasGuidelines && (
          <section className="py-16 sm:py-20 bg-[#f4faff] border-y border-sky-100/50" id="decide-name">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#00509d]">
                  {guidelinesBadge || t('Guidelines')}
                </span>
                <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900 mt-2">
                  {guidelinesTitle}
                </h3>
                <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {guidelines.map(({ icon, title, desc }) => (
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
        )}

        {/* 4. PROCESS SECTION */}
        <section className="py-16 sm:py-20 bg-white" id="process">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto items-start">
              
              {/* Left Column */}
              <div className="text-left reveal-card">
                <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706] block mb-2 font-poppins">
                  {processSubtitle}
                </span>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight mb-8 font-poppins leading-tight">
                  {processTitle}
                </h3>

                <div className="relative space-y-10 pl-4 border-l-2 border-sky-100/70 ml-2">
                  {processSteps && processSteps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {renderTimelineBadge(step, false)}
                      <div className="pl-6">
                        <h4 className="font-bold text-[#00509d] text-[15px] sm:text-base mb-2 font-poppins">{step.title}</h4>
                        <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                          {step.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="text-left reveal-card">
                <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706] block mb-2 font-poppins">
                  {timelineSubtitle}
                </span>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight mb-8 font-poppins leading-tight">
                  {timelineTitle}
                </h3>

                <div className="relative space-y-10 pl-4 border-l-2 border-emerald-100/70 ml-2">
                  {timelineSteps && timelineSteps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {renderTimelineBadge(step, true)}
                      <div className="pl-6">
                        <h4 className="font-bold text-emerald-600 text-[15px] sm:text-base mb-2 font-poppins">{step.title}</h4>
                        <ul className="list-disc pl-4 space-y-1.5 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
                          {step.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pl-6">
                  <button type="button" onClick={(e) => scrollToSection(e, 'registration-form')} className="inline-block bg-[#e0b030] hover:bg-[#d97706] text-white font-extrabold text-[12px] px-6 py-2.5 rounded-lg tracking-wide uppercase select-none shadow-sm transition-all duration-300 cursor-pointer border-none">
                    {t('Register Your Company Today!')}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. FAQS SECTION */}
        <FaqSection faqs={faqs} />

      </div>

      <Footer />
    </>
  )
}
