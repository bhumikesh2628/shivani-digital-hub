import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle({ mobile }) {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'gu' : 'en'
    setLanguage(nextLang)
  }

  if (mobile) {
    return (
      <button
        onClick={toggleLanguage}
        className="px-2.5 py-1 rounded-full bg-white/60 backdrop-blur-md text-slate-950 hover:text-[#1a7a8a] font-extrabold text-[10.5px] uppercase tracking-wider cursor-pointer border border-slate-200/60 shadow-sm transition-all duration-300 active:scale-95 flex items-center gap-1 select-none z-[999]"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        title={language === 'en' ? 'Switch to Gujarati' : 'અંગ્રેજીમાં બદલો'}
      >
        <i className="fas fa-language text-[13px] text-[#1a7a8a]"></i>
        <span>{language === 'en' ? 'ગુજરાતી' : 'English'}</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-1.5 bg-transparent text-slate-950 hover:text-[#1a7a8a] font-extrabold text-[12px] uppercase tracking-widest cursor-pointer transition-all duration-300 active:scale-95 flex items-center gap-1.5 select-none border-none outline-none shadow-none"
      style={{ fontFamily: 'Poppins, sans-serif' }}
      title={language === 'en' ? 'Switch to Gujarati' : 'અંગ્રેજીમાં બદલો'}
    >
      <i className="fas fa-language text-sm text-[#1a7a8a]"></i>
      <span>{language === 'en' ? 'ગુજરાતી' : 'English'}</span>
    </button>
  )
}
