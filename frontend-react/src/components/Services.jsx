import { useState } from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import { useLanguage } from '../context/LanguageContext'

const categories = [
  'All',
  'Start Business',
  'Registration & Licence',
  'Trademark & IPR',
  'Tax & Compliances'
]

function ServiceCard({ image, title, shortDesc, id, link }) {
  const { t } = useLanguage()
  const href = link || `/${id}`
  const isLogo = image.includes('iso') || image.includes('logo') || image.includes('incorporation') || image.includes('import-export') || image.includes('fssai') || image.includes('gst') || image.includes('trademark') || image.includes('complaint') || image.includes('rti') || image.includes('tax-return') || image.includes('sole-proprietorship') || image.includes('epf')
  return (
    <Link 
      to={href} 
      className="bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_45px_rgba(15,76,92,0.08)] hover:border-[#1a7a8a]/40 hover:-translate-y-1.5 group block no-underline cursor-pointer hover-lift"
    >
      <div className="w-full h-44 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100/50 shrink-0 flex items-center justify-center p-6 border-b border-slate-100">
        <img 
          src={image} 
          alt={t(title)} 
          loading="lazy" 
          className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-108 ${isLogo ? 'object-contain' : 'object-cover'}`} 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="text-lg font-bold text-[#0f4c5c] mb-2 group-hover:text-[#1a7a8a] transition-colors duration-300">{t(title)}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{t(shortDesc)}</p>
        <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0f4c5c] transition-colors duration-300 group-hover:text-[#1a7a8a] mt-auto w-fit">
          {t('Learn More')} <i className="fas fa-arrow-right text-[11px] transition-transform duration-300 group-hover:translate-x-1.5"></i>
        </div>
      </div>
    </Link>
  )
}

export default function Services() {
  const { t } = useLanguage()
  const [selectedCat, setSelectedCat] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredServices = servicesData.filter(s => {
    const matchesCategory = selectedCat === 'All' || s.category === selectedCat
    const matchesSearch = t(s.title).toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t(s.shortDesc).toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white" id="services">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f4c5c] tracking-tight">
            {t('servicesTitle')}
          </h2>
          <div className="w-12 h-1 bg-[#f0c040] mx-auto rounded-full mt-3"></div>
        </div>

        {/* Premium Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fas fa-search text-slate-400 text-sm"></i>
          </div>
          <input
            type="text"
            placeholder={t('Search services...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-10 py-3 border border-slate-200 focus:border-[#1a7a8a] focus:ring-1 focus:ring-[#1a7a8a] rounded-full focus:outline-none bg-white shadow-sm text-sm font-medium transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 bg-transparent border-none cursor-pointer"
            >
              <i className="fas fa-times-circle"></i>
            </button>
          )}
        </div>

        {/* Dynamic Category Filter Tabs (Human-crafted feel) */}
        <div className="flex overflow-x-auto md:flex-wrap flex-nowrap items-center justify-start md:justify-center gap-2 mb-12 max-w-4xl mx-auto p-1.5 bg-slate-100/70 rounded-full md:rounded-2xl border border-slate-200/40 scrollbar-none whitespace-nowrap px-3 md:px-1.5" role="tablist" aria-label="Service categories">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              role="tab"
              aria-selected={selectedCat === cat}
              aria-controls={`services-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shrink-0 ${
                selectedCat === cat
                  ? 'bg-[#0f4c5c] text-white shadow-md shadow-[#0f4c5c]/10'
                  : 'text-slate-600 hover:text-[#0f4c5c] hover:bg-white/50'
              }`}
            >
              {t(cat)}
            </button>
          ))}
        </div>

        {/* Services Grid with Smooth Rendering */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <i className="fas fa-search-minus text-2xl text-slate-400"></i>
            </div>
            <p className="text-slate-700 font-bold text-base mb-1">{t('No services found matching your search.')}</p>
            <p className="text-slate-400 text-sm font-medium">{t('Try searching for different keywords or select a different category.')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredServices.map((s, index) => (
              <div key={s.id} className={`animate-fade-in stagger-${(index % 5) + 1}`}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
