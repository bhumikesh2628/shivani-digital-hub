import { useLanguage } from '../context/LanguageContext'

const pillars = [
  {
    img: '/govt-india-logo.webp',
    title: 'Recognized by Govt. of India',
    desc: 'Authorized digital corporate filing and compliance consulting hub registered under the Ministry of MSME.'
  },
  {
    img: '/10-years-experience.webp',
    title: '10+ Years Trusted Track Record',
    desc: 'Over a decade of successful corporate registrations, tax filings, and strategic legal consultancies across India.'
  },
  {
    img: '/iso-certification.webp',
    title: 'ISO Certified Quality',
    desc: 'Operating under internationally recognized security and management standards for complete operational excellence.'
  },
  {
    img: '/quick-response.webp',
    title: 'Immediate Response & Filing',
    desc: 'Same-day document validation and rapid electronic filing processes to get your approvals as fast as possible.'
  },
  {
    img: '/happy-customers.webp',
    title: '50,000+ Happy Entrepreneurs',
    desc: 'Trusted strategic partner for thousands of startups, SME owners, self-employed creators, and corporations.'
  },
  {
    img: '/best-price.webp',
    title: 'Best & Affordable Pricing',
    desc: 'Fixed, transparent, flat upfront rates with absolutely zero hidden professional fees or unexpected charges.'
  },
  {
    img: '/professional-staff.webp',
    title: 'Expert Multi-Disciplinary Staff',
    desc: 'Direct consultation desk with highly certified Advocates, Chartered Accountants (CAs), and Company Secretaries.'
  },
  {
    img: '/24-7-support.webp',
    title: '24/7 Dedicated Support',
    desc: 'Continuous status updates and instant WhatsApp assistance with a personalized legal support manager.'
  },
  {
    img: '/satisfaction-guaranteed.webp',
    title: '100% Satisfaction Guarantee',
    desc: 'Committed to ultimate compliance accuracy, clean error-free documentation, and maximum tax savings.'
  }
]

export default function WhyUs() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-16 bg-[#fafafa] relative overflow-hidden" id="why-us">
      {/* Dynamic human-crafted structural elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-slate-100/40 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#0f4c5c] bg-[#f0c040]/10 border border-[#f0c040]/20 mb-3 uppercase">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#f0c040]"></span>
            {t('whyUsSubtitle')}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f4c5c] leading-tight mb-3 tracking-tight">
            {t('whyUsSectionTitle')}
          </h2>
          <div className="w-12 h-0.5 bg-[#f0c040] mx-auto rounded-full mb-3"></div>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            {t('whyUsSectionDesc')}
          </p>
        </div>

        {/* Infinite Horizontal Scrolling Marquee Slider (Left-to-Right) */}
        <div 
          className="relative w-full overflow-hidden py-6"
          style={{
            maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)'
          }}
        >
          <div className="marquee-wrapper flex w-max">
            <div className="animate-marquee-reverse flex gap-6 pr-6 shrink-0">
              {pillars.map(({ img, title, desc }, index) => (
                <div 
                  key={`${title}-${index}-1`}
                  className="w-[280px] sm:w-[340px] shrink-0 bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex items-start gap-4 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 group cursor-default relative overflow-hidden"
                >
                  {/* Left: Icon/Logo container */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 p-2 sm:p-2.5 border border-slate-100 group-hover:bg-[#f0c040]/10 transition-colors duration-300">
                    <img 
                      src={img} 
                      alt={t(title)} 
                      loading="lazy" 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  
                  {/* Right: Text Details */}
                  <div className="flex flex-col text-left">
                    <h3 className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-800 mb-1 hover:text-[#1a7a8a] transition-colors duration-300 font-poppins leading-tight line-clamp-1">
                      {t(title)}
                    </h3>
                    <p className="text-slate-500 text-[11px] sm:text-[11.5px] leading-relaxed m-0 line-clamp-2">
                      {t(desc)}
                    </p>
                  </div>
                  
                  {/* Bottom accent hover bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f0c040] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              ))}
            </div>
            <div className="animate-marquee-reverse flex gap-6 pr-6 shrink-0">
              {pillars.map(({ img, title, desc }, index) => (
                <div 
                  key={`${title}-${index}-2`}
                  className="w-[280px] sm:w-[340px] shrink-0 bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex items-start gap-4 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 group cursor-default relative overflow-hidden"
                >
                  {/* Left: Icon/Logo container */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 p-2 sm:p-2.5 border border-slate-100 group-hover:bg-[#f0c040]/10 transition-colors duration-300">
                    <img 
                      src={img} 
                      alt={t(title)} 
                      loading="lazy" 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  
                  {/* Right: Text Details */}
                  <div className="flex flex-col text-left">
                    <h3 className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-800 mb-1 hover:text-[#1a7a8a] transition-colors duration-300 font-poppins leading-tight line-clamp-1">
                      {t(title)}
                    </h3>
                    <p className="text-slate-500 text-[11px] sm:text-[11.5px] leading-relaxed m-0 line-clamp-2">
                      {t(desc)}
                    </p>
                  </div>
                  
                  {/* Bottom accent hover bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f0c040] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
