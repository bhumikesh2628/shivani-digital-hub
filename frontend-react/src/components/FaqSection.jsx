import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function FaqSection({ faqs }) {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState(null)
  const [faqSearch, setFaqSearch] = useState('')

  const filteredFaqs = faqSearch 
    ? faqs.filter(f => f.q.toLowerCase().includes(faqSearch.toLowerCase()) || f.a.toLowerCase().includes(faqSearch.toLowerCase()))
    : faqs

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100" id="faqs">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        {/* FAQ Header & Search */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold tracking-[2px] uppercase text-[#d97706]">
            Questions
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-poppins font-extrabold text-slate-900 mt-2 tracking-tight">
            {t('Frequently Asked Questions')}
          </h2>
          <div className="w-16 h-1 bg-[#f0c040] mx-auto rounded-full mt-4"></div>
          
          {/* FAQ Live Search Input */}
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

        {/* Accordions */}
        <div className="space-y-4 text-left">
          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-xs sm:text-sm">
              {t('No matches found for')} "{faqSearch}"
            </div>
          )}
          {filteredFaqs.map(({ q, a }, idx) => {
            const isOpen = openFaq === idx
            return (
              <div key={q} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all bg-white shadow-sm reveal-card">
                <button 
                  onClick={() => setOpenFaq(isOpen ? null : idx)} 
                  className="w-full px-6 py-4.5 text-left font-bold text-slate-800 text-sm sm:text-base flex items-center justify-between hover:bg-slate-50/50 transition-colors cursor-pointer bg-transparent border-none outline-none"
                >
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
  )
}
