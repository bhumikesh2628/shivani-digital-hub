import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t, language } = useLanguage()

  const scrollTo = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[82dvh] flex items-center bg-white py-14 sm:py-20 md:py-24 overflow-hidden z-10" id="home">

      {/* Hero background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: `url(/hero-bg.webp)` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent md:bg-gradient-to-r md:from-white/90 md:via-white/40 md:to-transparent"></div>
      </div>

      {/* Subtle blur highlights */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#1a7a8a]/5 rounded-full filter blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-float-orb-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#f0c040]/5 rounded-full filter blur-[100px] animate-float-orb-2"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mr-auto ml-0 text-left flex flex-col items-start animate-logo-slide">
          
          {/* Spaced Small Uppercase Label */}
          <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[3px] text-slate-500 mb-6 font-poppins text-left">
            {t('heroLabel')}
          </span>

          {/* Bold Blackstone Style Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-slate-900 leading-[1.18] tracking-tight font-poppins text-left">
            {t('heroHeadingMain')} <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#1a7a8a] to-[#0f4c5c] bg-clip-text text-transparent">
              {t('heroHeadingHighlight')}
            </span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-slate-600 text-xs sm:text-[14.5px] lg:text-[15.5px] max-w-[750px] leading-relaxed font-medium mt-4 text-left">
            {t('heroSub')}
          </p>

          {/* Verified Trust Badge micro-pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 mt-6 shadow-sm select-none animate-fade-in">
            <span className="flex text-amber-400 text-xs gap-0.5">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <span className="text-[10.5px] font-extrabold text-slate-700 uppercase tracking-wider">
              4.9/5 TrustScore (12,000+ Reviews)
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>

          {/* side-by-side pill buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4.5 mt-6 w-full sm:w-auto">
            <a 
              href="#contact" 
              onClick={e => scrollTo(e, '#contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-extrabold text-sm uppercase tracking-wider transition-all duration-300 no-underline cursor-pointer bg-slate-950 text-white hover:bg-black border border-slate-950 shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] active:scale-95"
            >
              <i className="fas fa-phone-alt text-xs"></i> {t('heroTalkBtn')}
            </a>
            <a 
              href="#services" 
              onClick={e => scrollTo(e, '#services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-extrabold text-sm uppercase tracking-wider transition-all duration-300 no-underline cursor-pointer bg-white text-slate-800 border border-slate-200 hover:border-slate-800 hover:bg-slate-50/50 shadow-sm hover:-translate-y-0.5 active:scale-95"
            >
              {t('heroExploreBtn')}
            </a>
          </div>

          {/* Left-Aligned Feature Checklist */}
          <div className="hidden sm:flex flex-wrap items-center justify-start gap-x-8 gap-y-3.5 text-slate-700 text-xs sm:text-[13.5px] font-semibold max-w-[850px] mr-auto ml-0 mt-14 pt-8 border-t border-slate-200/60 w-full text-left">
            <div className="flex items-center gap-2">
              <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                <i className="fas fa-check text-[8px] text-emerald-600"></i>
              </div>
              <span>{t('heroBadge1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                <i className="fas fa-check text-[8px] text-emerald-600"></i>
              </div>
              <span>{t('heroBadge2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                <i className="fas fa-check text-[8px] text-emerald-600"></i>
              </div>
              <span>{t('heroBadge3')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                <i className="fas fa-check text-[8px] text-emerald-600"></i>
              </div>
              <span>{t('heroBadge4')}</span>
            </div>
          </div>

          {/* Left-Aligned Trust Proof */}
          <div className="hidden sm:flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3.5 mt-8 w-full text-left">
            <div className="flex -space-x-2">
              <img className="inline-block h-8.5 w-8.5 rounded-full ring-2 ring-white object-cover" src="/avatar-1.jpg" alt="Rahul" loading="lazy" />
              <img className="inline-block h-8.5 w-8.5 rounded-full ring-2 ring-white object-cover" src="/avatar-2.jpg" alt="Priya" loading="lazy" />
              <img className="inline-block h-8.5 w-8.5 rounded-full ring-2 ring-white object-cover" src="/avatar-3.jpg" alt="Amit" loading="lazy" />
              <img className="inline-block h-8.5 w-8.5 rounded-full ring-2 ring-white object-cover" src="/avatar-4.jpg" alt="Sneha" loading="lazy" />
            </div>
            <div className="text-left text-xs sm:text-[13px] leading-tight">
              <div className="flex gap-0.5 text-[#f0c040] justify-start">
                <i className="fas fa-star text-[10px]"></i>
                <i className="fas fa-star text-[10px]"></i>
                <i className="fas fa-star text-[10px]"></i>
                <i className="fas fa-star text-[10px]"></i>
                <i className="fas fa-star text-[10px]"></i>
              </div>
              <p className="text-slate-500 font-semibold m-0 mt-0.5">
                {language === 'en' ? (
                  <>
                    Trusted by <strong className="text-[#0f4c5c]">50,000+ businesses</strong> across India
                  </>
                ) : (
                  <>
                    સમગ્ર ભારતમાં <strong className="text-[#0f4c5c]">૫૦,૦૦0+ વ્યવસાયો</strong> દ્વારા વિશ્વસનીય
                  </>
                )}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
