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

        {/* Cohesive, Human-Crafted Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map(({ img, title, desc }, index) => (
            <div 
              key={title}
              className={`bg-white rounded-2xl border border-slate-100 flex flex-col sm:flex-row overflow-hidden min-h-[180px] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 relative group hover-lift animate-fade-in stagger-${(index % 5) + 1}`}
            >
              {/* Left half on desktop / Top half on mobile: Image/logo block */}
              <div className="w-full sm:w-1/2 shrink-0 bg-slate-50 flex items-center justify-center p-5 border-b sm:border-b-0 sm:border-r border-slate-100/50 relative overflow-hidden group-hover:bg-[#f0c040]/5 transition-colors duration-300">
                <img 
                  src={img} 
                  alt={t(title)} 
                  loading="lazy" 
                  className="w-full h-full max-h-[75px] sm:max-h-[85px] object-contain transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* Right half on desktop / Bottom half on mobile: Text Content */}
              <div className="w-full sm:w-1/2 p-5 flex flex-col justify-center text-left">
                <h3 className="text-[13px] sm:text-[14px] font-bold text-black mb-2 hover:text-[#1a7a8a] transition-colors duration-300 font-poppins leading-tight">
                  {t(title)}
                </h3>
                <p className="text-black text-[11.5px] sm:text-xs leading-relaxed mb-0">
                  {t(desc)}
                </p>
              </div>

              {/* Sophisticated bottom border visual hover effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#f0c040] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
