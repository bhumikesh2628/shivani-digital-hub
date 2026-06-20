import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'

const navItems = [
  {
    label: 'Start Business',
    align: 'left',
    columns: [
      {
        title: 'POPULAR OPTIONS',
        links: [
          { name: 'Private Limited Company', to: '/private-limited-company' },
          { name: 'Limited Liability Partnership', to: '/limited-liability-partnership' },
          { name: 'One Person Company', to: '/one-person-company' },
          { name: 'Sole Proprietorship', to: '/sole-proprietorship' },
        ]
      },
      {
        title: 'SPECIAL BUSINESS ENTITIES',
        links: [
          { name: 'Public Limited Company', to: '/public-limited-company' },
          { name: 'Section 8 Company', to: '/section-8-company' },
          { name: 'Nidhi Company', to: '/nidhi-company' },
        ]
      }
    ]
  },
  {
    label: 'Registration & Licence',
    align: 'left',
    columns: [
      {
        title: 'CORE LICENSES',
        links: [
          { name: 'Import Export Code', to: '/import-export-code' },
          { name: 'Import Export Modification', to: '/import-export-modification' },
          { name: 'ISO Certificate', to: '/iso-certification' },
        ]
      },
      {
        title: 'FOOD SAFETY & STANDARDS',
        links: [
          { name: 'FSSAI Registration', to: '/fssai-food-license' },
          { name: 'FSSAI Renewal', to: '/fssai-renewal' },
        ]
      }
    ]
  },
  {
    label: 'Trademark & IPR',
    align: 'right',
    columns: [
      {
        title: 'BRAND PROTECTION',
        links: [
          { name: 'Trademark Registration', to: '/trademark-services' },
          { name: 'Trademark Renewal', to: '/trademark-renewal' },
        ]
      },
      {
        title: 'INTELLECTUAL PROPERTY',
        links: [
          { name: 'Trademark Objection', to: '/trademark-objection' },
          { name: 'Copyright Registration', to: '/copyright-registration' },
        ]
      }
    ]
  },
  {
    label: 'Tax & Compliances',
    align: 'right',
    columns: [
      {
        title: 'GST & TAXATION',
        links: [
          { name: 'GST Registration', to: '/gst-services' },
          { name: 'GST Return Filing', to: '/gst-return-filing' },
          { name: 'Income Tax Return', to: '/income-tax-return' },
        ]
      },
      {
        title: 'LABOUR & GENERAL FILINGS',
        links: [
          { name: 'PF Registration', to: '/epf-compliances' },
          { name: 'ESIC Registration', to: '/esic-registration' },
          { name: 'Consumer Complaint', to: '/consumer-complaint' },
          { name: 'RTI Filing', to: '/rti-filing' },
        ]
      }
    ]
  }
]

export default function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({})
  const headerRef = useRef(null)
  const navigate  = useNavigate()
  const location  = useLocation()
  const isHome    = location.pathname === '/'

  const toggleMobileDropdown = (label) => {
    setMobileDropdownOpen(prev => {
      const wasOpen = !!prev[label]
      return { [label]: !wasOpen }
    })
  }

  /* ── scroll spy (home only) ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      if (!isHome) return
      const sections = document.querySelectorAll('section[id]')
      const hh = (headerRef.current?.offsetHeight || 70) + 10
      let cur = ''
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - hh) cur = s.id })
      setActiveSection(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  /* ── smooth scroll helper ── */
  const scrollToSection = (sectionId) => {
    const hh = (headerRef.current?.offsetHeight || 70) + 10
    const el = document.getElementById(sectionId)
    if (el) window.scrollTo({ top: el.offsetTop - hh, behavior: 'smooth' })
  }

  /* ── handle any nav link click ── */
  const handleNav = (e, to) => {
    e.preventDefault()
    setMenuOpen(false)

    // pure route (no hash)
    if (!to.includes('#')) {
      navigate(to)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const [path, hash] = to.split('#')
    const targetPath = path || '/'

    if (location.pathname === targetPath || targetPath === '/') {
      // already on correct page — just scroll
      if (isHome || targetPath === '/') {
        if (hash) scrollToSection(hash)
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      // navigate then scroll after render
      navigate(targetPath)
      setTimeout(() => {
        if (hash) scrollToSection(hash)
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 120)
    }
  }

  /* ── logo click: always go home ── */
  const handleHome = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80)
    }
  }

  return (
    <>
      <header ref={headerRef} className={`bg-white sticky top-0 z-[1000] transition-all duration-300 border-b ${scrolled ? 'border-slate-200/80 shadow-sm' : 'border-slate-100/50 shadow-[0_2px_15px_rgba(0,0,0,0.01)]'}`} id="header">
        <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative transition-all duration-300 ${scrolled ? 'h-[56px]' : 'h-[74px]'}`}>

          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5 sm:gap-3.5 no-underline shrink-0 py-2 -ml-2.5 sm:-ml-5 lg:-ml-8 transition-all duration-300 group animate-logo-slide" onClick={handleHome}>
            <img src="/logo.png" alt="Shivani Digital Hub Logo" className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? 'h-[26px] sm:h-[30px]' : 'h-[35px] sm:h-[40px]'}`} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center">
              {/* Home */}
              <li className="relative group">
                <a
                  href="/"
                  className={`flex items-center gap-1.5 px-3.5 text-[14px] font-semibold whitespace-nowrap relative transition-all duration-300 ${scrolled ? 'h-[56px]' : 'h-[74px]'} ${isHome && activeSection === 'home' ? 'text-[#0f4c5c] after:scale-x-100' : 'text-[#222] hover:text-[#0f4c5c] group-hover:text-[#0f4c5c] after:scale-x-0 group-hover:after:scale-x-100'} after:content-[''] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[3px] after:bg-[#f0c040] after:rounded-t-sm after:origin-center after:transition-transform after:duration-200`}
                  onClick={handleHome}
                >
                  {t('Home')}
                </a>
              </li>

              {/* Dropdown items */}
              {navItems.map(item => (
                <li key={item.label} className="relative group has-dropdown">
                  <a 
                    href="/#services" 
                    className={`flex items-center gap-1.5 px-3.5 text-[14px] font-semibold text-[#222] whitespace-nowrap relative transition-all duration-300 hover:text-[#0f4c5c] group-hover:text-[#0f4c5c] ${scrolled ? 'h-[56px]' : 'h-[74px]'} after:content-[''] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[3px] after:bg-[#f0c040] after:rounded-t-sm after:scale-x-0 after:origin-center after:transition-transform after:duration-200 group-hover:after:scale-x-100`} 
                    onClick={e => handleNav(e, '/#services')}
                  >
                    {t(item.label)} <i className="fas fa-chevron-down text-[9px] ml-0.5 transition-transform duration-200 group-hover:rotate-180"></i>
                  </a>
                  
                  {/* Premium Multi-Column Mega Menu Container */}
                  <div className={`absolute top-[100%] ${item.align === 'left' ? 'left-0' : 'right-0 left-auto'} w-[600px] bg-white border-t-3 border-t-[#f0c040] rounded-b-2xl shadow-[0_15px_45px_rgba(0,0,0,0.08)] p-6 sm:p-8 grid grid-cols-2 gap-8 opacity-0 invisible translate-y-3.5 transition-all duration-300 z-[999] pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto`}>
                    {item.columns.map(col => (
                      <div key={col.title}>
                        {/* Upper Red Column Title */}
                        <h4 className="text-[11px] font-extrabold text-rose-800 tracking-wider mb-4 uppercase font-poppins">
                          {t(col.title)}
                        </h4>
                        
                        {/* List of Links */}
                        <ul className="space-y-3">
                          {col.links.map(link => (
                            <li key={link.name}>
                              {link.to.startsWith('/') && !link.to.includes('#') ? (
                                <Link 
                                  to={link.to} 
                                  className="block text-[13.5px] font-medium text-slate-700 hover:text-[#0f4c5c] hover:translate-x-1.5 transition-all duration-200 no-underline cursor-pointer"
                                  onClick={() => {
                                    setMenuOpen(false)
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                  }}
                                >
                                  {t(link.name)}
                                </Link>
                              ) : (
                                <a 
                                  href={link.to} 
                                  className="block text-[13.5px] font-medium text-slate-700 hover:text-[#0f4c5c] hover:translate-x-1.5 transition-all duration-200 no-underline cursor-pointer"
                                  onClick={e => handleNav(e, link.to)}
                                >
                                  {t(link.name)}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              ))}

              {/* Contact Us */}
              <li className="relative group">
                <a
                  href="/#contact"
                  className={`flex items-center gap-1.5 px-3.5 text-[14px] font-semibold whitespace-nowrap relative transition-all duration-300 ${scrolled ? 'h-[56px]' : 'h-[74px]'} ${isHome && activeSection === 'contact' ? 'text-[#0f4c5c] after:scale-x-100' : 'text-[#222] hover:text-[#0f4c5c] group-hover:text-[#0f4c5c] after:scale-x-0 group-hover:after:scale-x-100'} after:content-[''] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[3px] after:bg-[#f0c040] after:rounded-t-sm after:origin-center after:transition-transform after:duration-200`}
                  onClick={e => handleNav(e, '/#contact')}
                >
                  {t('Contact Us')}
                </a>
              </li>
            </ul>
          </nav>

          {/* Hamburger controls */}
          <div className="flex items-center gap-3.5">
            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center gap-1.5 bg-transparent border-none cursor-pointer p-1.5 w-9 h-9 z-[1001]"
              aria-label="Menu"
              onClick={() => setMenuOpen(o => !o)}
            >
              <span className={`block w-6 h-[2.5px] bg-[#18181c] rounded-sm transition-all duration-300 origin-center ${menuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`}></span>
              <span className={`block w-6 h-[2.5px] bg-[#18181c] rounded-sm transition-all duration-300 origin-center ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
              <span className={`block w-6 h-[2.5px] bg-[#18181c] rounded-sm transition-all duration-300 origin-center ${menuOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`}></span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-white via-slate-50 to-[#f4faff] overflow-y-auto transition-all duration-400 ease-in-out shadow-2xl ${menuOpen ? 'border-t border-slate-200/60' : ''}`} style={{ maxHeight: menuOpen ? `calc(100vh - ${scrolled ? 56 : 74}px)` : '0px', visibility: menuOpen ? 'visible' : 'hidden' }}>
          <div className="py-2">
            {/* Home Link */}
            <a href="/" onClick={handleHome} className="flex items-center gap-3 px-5 py-4 text-slate-800 text-base font-semibold border-b border-slate-100 transition-all hover:bg-[#0f4c5c]/5 hover:text-[#0f4c5c] min-h-[56px]">
              <i className="fas fa-home w-5 text-center text-[#f0c040] text-[15px]"></i> {t('Home')}
            </a>

            {/* Accordion Categories */}
            {navItems.map(item => {
              const isOpen = !!mobileDropdownOpen[item.label];
              return (
                <div key={item.label} className="border-b border-slate-100">
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="w-full flex items-center justify-between px-5 py-4 text-slate-800 text-base font-semibold hover:bg-[#0f4c5c]/5 hover:text-[#0f4c5c] transition-all bg-transparent border-none outline-none cursor-pointer min-h-[56px]"
                  >
                    <div className="flex items-center gap-3">
                      <i className="fas fa-th-large w-5 text-center text-[#f0c040] text-[15px]"></i>
                      <span>{t(item.label)}</span>
                    </div>
                    <i className={`fas fa-chevron-down text-[12px] text-[#f0c040] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  {/* Sub-items list with height transition */}
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px] bg-slate-100/30' : 'max-h-0'}`}>
                    {item.columns.map(col => 
                      col.links.map(link => (
                        <a
                          key={link.name}
                          href={link.to}
                          onClick={e => handleNav(e, link.to)}
                          className="flex items-center gap-2 px-8 py-4 text-[14px] text-slate-700 hover:text-[#0f4c5c] hover:bg-[#0f4c5c]/5 border-b border-slate-100/50 last:border-none min-h-[52px]"
                        >
                          <span className="text-[#f0c040] mr-2 text-[16px]">›</span> {t(link.name)}
                        </a>
                      ))
                    )}
                  </div>
                </div>
              );
            })}

            {/* About Us Link */}
            <a href="/#about" onClick={e => handleNav(e, '/#about')} className="flex items-center gap-3 px-5 py-4 text-slate-800 text-base font-semibold border-b border-slate-100 transition-all hover:bg-[#0f4c5c]/5 hover:text-[#0f4c5c] min-h-[56px]">
              <i className="fas fa-info-circle w-5 text-center text-[#f0c040] text-[15px]"></i> {t('About Us')}
            </a>

            {/* Blogs Link */}
            <a href="/blogs" onClick={e => handleNav(e, '/blogs')} className="flex items-center gap-3 px-5 py-4 text-slate-800 text-base font-semibold border-b border-slate-100 transition-all hover:bg-[#0f4c5c]/5 hover:text-[#0f4c5c] min-h-[56px]">
              <i className="fas fa-blog w-5 text-center text-[#f0c040] text-[15px]"></i> {t('Blogs')}
            </a>

            {/* Contact Us Link */}
            <a href="/#contact" onClick={e => handleNav(e, '/#contact')} className="flex items-center gap-3 px-5 py-4 text-slate-800 text-base font-semibold border-b border-slate-100 transition-all hover:bg-[#0f4c5c]/5 hover:text-[#0f4c5c] min-h-[56px]">
              <i className="fas fa-phone-alt w-5 text-center text-[#f0c040] text-[15px]"></i> {t('Contact Us')}
            </a>
            
            {/* Language Switcher in Mobile Menu */}
            <div className="flex justify-center py-5 border-t border-slate-100/50">
              <LanguageToggle mobile={true} />
            </div>
          </div>
        </div>

        {/* Desktop Language Toggle (Absolute-positioned in right corner of navbar screen) */}
        <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 z-[1001]">
          <LanguageToggle />
        </div>
      </header>
    </>
  )
}
