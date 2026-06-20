import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('who-we-are')
  const navigate = useNavigate()
  const location = useLocation()

  const scrollTo = (e, href) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const target = document.querySelector(href)
        if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
      }, 150)
    } else {
      const target = document.querySelector(href)
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#0f4c5c] bg-[#f0c040]/10 border border-[#f0c040]/30 mb-4 uppercase">
            <span className="flex h-2 w-2 rounded-full bg-[#f0c040] animate-pulse"></span>
            {t('aboutSubtitle')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f4c5c] leading-tight mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4c5c] to-[#1a7a8a]">
              {t('aboutTitle')}
            </span>
          </h2>
          <div className="w-20 h-1 bg-[#f0c040] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t('aboutDesc')}
          </p>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story, Tabs & Details */}
          <div className="lg:col-span-7 about-left space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0f4c5c] mb-3">
                {t('aboutIntroTitle')}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {t('aboutIntroDesc')}
              </p>
            </div>

            {/* Premium Interactive Tabs container */}
            <div className="border border-slate-100 rounded-2xl p-4 sm:p-6 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-md">
              <div className="flex flex-wrap gap-2 p-1 bg-slate-100/80 rounded-xl mb-6">
                <button
                  onClick={() => setActiveTab('who-we-are')}
                  className={`flex-1 min-w-[100px] text-center px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeTab === 'who-we-are'
                      ? 'bg-white text-[#0f4c5c] shadow-[0_4px_12px_rgba(15,76,92,0.08)] border-b-2 border-b-[#f0c040]'
                      : 'text-slate-500 hover:text-[#0f4c5c] hover:bg-white/40'
                  }`}
                >
                  {t('aboutTabIdentity')}
                </button>
                <button
                  onClick={() => setActiveTab('our-aim')}
                  className={`flex-1 min-w-[100px] text-center px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeTab === 'our-aim'
                      ? 'bg-white text-[#0f4c5c] shadow-[0_4px_12px_rgba(15,76,92,0.08)] border-b-2 border-b-[#f0c040]'
                      : 'text-slate-500 hover:text-[#0f4c5c] hover:bg-white/40'
                  }`}
                >
                  {t('aboutTabAim')}
                </button>
                <button
                  onClick={() => setActiveTab('why-us')}
                  className={`flex-1 min-w-[100px] text-center px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeTab === 'why-us'
                      ? 'bg-white text-[#0f4c5c] shadow-[0_4px_12px_rgba(15,76,92,0.08)] border-b-2 border-b-[#f0c040]'
                      : 'text-slate-500 hover:text-[#0f4c5c] hover:bg-white/40'
                  }`}
                >
                  {t('aboutTabWhyUs')}
                </button>
              </div>

              {/* Dynamic Content Details */}
              <div className="min-h-[180px] transition-all duration-500">
                {activeTab === 'who-we-are' && (
                  <div className="space-y-4 animate-fade-in">
                    <h4 className="text-lg font-bold text-[#0f4c5c] flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-[#f0c040] rounded-full inline-block"></span>
                      {t('aboutTab1Heading')}
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      {t('aboutTab1Desc')}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-circle-check text-[#1a7a8a] text-base"></i>
                        {t('aboutTab1Bullet1')}
                      </li>
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-circle-check text-[#1a7a8a] text-base"></i>
                        {t('aboutTab1Bullet2')}
                      </li>
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-circle-check text-[#1a7a8a] text-base"></i>
                        {t('aboutTab1Bullet3')}
                      </li>
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-circle-check text-[#1a7a8a] text-base"></i>
                        {t('aboutTab1Bullet4')}
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'our-aim' && (
                  <div className="space-y-4 animate-fade-in">
                    <h4 className="text-lg font-bold text-[#0f4c5c] flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-[#f0c040] rounded-full inline-block"></span>
                      {t('aboutTab2Heading')}
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      {t('aboutTab2Desc')}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-circle-notch text-[#1a7a8a] text-sm animate-spin-slow"></i>
                        {t('aboutTab2Bullet1')}
                      </li>
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-circle-notch text-[#1a7a8a] text-sm animate-spin-slow"></i>
                        {t('aboutTab2Bullet2')}
                      </li>
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-circle-notch text-[#1a7a8a] text-sm animate-spin-slow"></i>
                        {t('aboutTab2Bullet3')}
                      </li>
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-circle-notch text-[#1a7a8a] text-sm animate-spin-slow"></i>
                        {t('aboutTab2Bullet4')}
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'why-us' && (
                  <div className="space-y-4 animate-fade-in">
                    <h4 className="text-lg font-bold text-[#0f4c5c] flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-[#f0c040] rounded-full inline-block"></span>
                      {t('aboutTab3Heading')}
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      {t('aboutTab3Desc')}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-shield text-[#1a7a8a] text-base"></i>
                        {t('aboutTab3Bullet1')}
                      </li>
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-shield text-[#1a7a8a] text-base"></i>
                        {t('aboutTab3Bullet2')}
                      </li>
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-shield text-[#1a7a8a] text-base"></i>
                        {t('aboutTab3Bullet3')}
                      </li>
                      <li className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <i className="fas fa-shield text-[#1a7a8a] text-base"></i>
                        {t('aboutTab3Bullet4')}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={e => scrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 no-underline cursor-pointer bg-[#18181c] text-white hover:bg-[#25252a] shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] group"
              >
                {t('aboutConsultBtn')}
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1.5 transition-transform duration-300"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Mockup and Image Overlay */}
          <div className="lg:col-span-5 about-right relative mt-8 lg:mt-0">
            {/* Background Glow Ring */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#1a7a8a]/20 to-[#f0c040]/10 rounded-[2.5rem] filter blur-3xl opacity-75 -z-10 pointer-events-none"></div>
            
            {/* Graphic Container */}
            <div className="relative mx-auto max-w-[480px] lg:max-w-full">
              
              {/* Premium Layered Frame */}
              <div className="relative overflow-hidden rounded-2xl border-[6px] border-white shadow-[0_25px_60px_rgba(15,76,92,0.18)] bg-slate-50 group">
                <img
                  src="/about-us.webp"
                  alt="Shivani Digital Hub Legal &amp; Financial Advisory Team"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-all duration-700 ease-out block"
                />
                
                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c5c]/10 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              </div>

              {/* Floating Badge 1 (Top Left) */}
              <div className="absolute -top-6 left-2 sm:-left-6 bg-white/95 backdrop-blur-md px-3 py-2.5 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white/50 flex items-center gap-2 sm:gap-3.5 hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#f0c040]/10 flex items-center justify-center text-[#f0c040] shadow-inner">
                  <i className="fas fa-award text-base sm:text-lg"></i>
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] font-extrabold text-[#0f4c5c] tracking-widest uppercase">{t('aboutBadgeGovtLabel')}</div>
                  <div className="text-[7px] sm:text-[9px] text-slate-500 font-semibold mt-0.5">{t('aboutBadgeGovtDesc')}</div>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-6 right-2 sm:-right-6 bg-white/95 backdrop-blur-md px-3.5 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white/50 flex items-center gap-2.5 sm:gap-3.5 hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#1a7a8a]/10 flex items-center justify-center text-[#1a7a8a] shadow-inner">
                  <i className="fas fa-shield-halved text-base sm:text-lg"></i>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#0f4c5c]">{t('aboutBadgeTrustLabel')}</div>
                  <div className="flex gap-0.5 text-[#f0c040] text-[8px] sm:text-[9px] mt-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
