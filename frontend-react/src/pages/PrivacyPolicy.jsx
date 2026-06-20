import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

const sections = [
  { 
    id: 'introduction', 
    label: '1. Introduction', 
    tldr: 'We are committed to protecting your personal identity and corporate data under strict security protocols.' 
  },
  { 
    id: 'info-collection', 
    label: '2. Information We Collect', 
    tldr: 'We collect contact details and official KYC files (PAN, Aadhaar) solely for portal filings.' 
  },
  { 
    id: 'info-usage', 
    label: '3. How We Use Information', 
    tldr: 'Your details are strictly used to submit official filings and communicate application progress.' 
  },
  { 
    id: 'data-security', 
    label: '4. Data Security & Protection', 
    tldr: 'All document archives are protected with SSL encryption and limited to assigned legal experts.' 
  },
  { 
    id: 'third-party', 
    label: '5. Third-Party Disclosures', 
    tldr: 'We never sell your data. Information is shared solely with official Government registries.' 
  },
  { 
    id: 'cookies', 
    label: '6. Cookies Policy', 
    tldr: 'We use temporary browser cookies to speed up page loading and analyze aggregate traffic.' 
  },
  { 
    id: 'changes', 
    label: '7. Policy Changes', 
    tldr: 'This policy is updated periodically to stay aligned with current national data protection standards.' 
  },
  { 
    id: 'contact', 
    label: '8. Contact Information', 
    tldr: 'For privacy inquiries, contact our Vadodara headquarters or write to support@shivanidigitalhub.com.' 
  },
]

export default function PrivacyPolicy() {
  useScrollReveal('.reveal-card')
  const [activeSec, setActiveSec] = useState('introduction')
  const [searchTerm, setSearchTerm] = useState('')

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const hh = 100
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - hh,
        behavior: 'smooth'
      })
    }
  }

  const handlePrint = (e) => {
    e.preventDefault()
    window.print()
  }

  useEffect(() => {
    document.title = "Privacy Policy | Shivani Digital Hub"
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120
      for (const sec of sections) {
        const el = document.getElementById(sec.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSec(sec.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  // Check if a section content contains search keyword
  const getSectionMatches = (secId) => {
    if (!searchTerm) return true
    const el = document.getElementById(secId)
    const labelMatches = sections.find(s => s.id === secId)?.label.toLowerCase().includes(searchTerm.toLowerCase())
    const textMatches = el ? el.textContent.toLowerCase().includes(searchTerm.toLowerCase()) : false
    return labelMatches || textMatches
  }

  return (
    <>
      <Header />

      <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif", fontSize: '15px' }} className="bg-slate-50 min-h-screen text-slate-800 leading-relaxed relative overflow-hidden">
        
        {/* Sleek dynamic blur gradients for modern glassmorphism aesthetic */}
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none z-0"></div>

        {/* HERO SECTION */}
        <section className="relative w-full pt-[170px] pb-14 bg-gradient-to-r from-[#0f4c5c] to-[#1a7a8a] text-white overflow-hidden shadow-md z-10">
          <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none select-none" style={{ backgroundImage: "url('/hero-bg.webp')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/15"></div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <nav className="text-xs md:text-sm text-slate-300 font-semibold tracking-wide mb-3">
              Home <span className="mx-1 text-slate-400">»</span> Privacy Policy
            </nav>
            <h1 className="text-3xl sm:text-4.5xl font-poppins font-black tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-slate-200 text-xs sm:text-[14.5px] max-w-2xl mx-auto font-medium mb-6">
              Last Updated: June 1, 2026. Your privacy and the safety of your corporate data are our highest priorities.
            </p>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs tracking-wider uppercase border border-white/20 hover:border-white/40 shadow-sm transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <i className="fas fa-print"></i> Print Policy Document
            </button>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-4 sticky top-[120px] select-none bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm transition-all">
              
              {/* Premium Keyword Search Bar */}
              <div className="relative mb-5">
                <input 
                  type="text" 
                  placeholder="Search policy terms..." 
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-9 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-[13px] focus:outline-none focus:border-[#0f4c5c] focus:ring-1 focus:ring-[#0f4c5c] font-semibold text-slate-700 bg-slate-50/50 transition-all placeholder-slate-400"
                />
                <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[11.5px]"></i>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')} 
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 bg-transparent border-none cursor-pointer flex items-center justify-center p-0 outline-none"
                  >
                    <i className="fas fa-times-circle text-[13px]"></i>
                  </button>
                )}
              </div>

              <h3 className="font-poppins font-black text-slate-900 text-[12px] uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Policy Navigation</h3>
              
              <ul className="space-y-1 p-0 m-0 list-none max-h-[400px] overflow-y-auto pr-1">
                {sections.map(sec => {
                  const matches = getSectionMatches(sec.id)
                  return (
                    <li key={sec.id} className={`transition-all duration-300 ${!matches ? 'opacity-30 scale-95 pointer-events-none' : ''}`}>
                      <a
                        href={`#${sec.id}`}
                        onClick={(e) => scrollToSection(e, sec.id)}
                        className={`block px-3.5 py-2.5 rounded-xl text-[13.5px] font-bold tracking-wide transition-all duration-200 no-underline cursor-pointer border-l-3 ${
                          activeSec === sec.id
                            ? 'bg-[#0f4c5c]/5 text-[#0f4c5c] border-l-[#0f4c5c] pl-4.5 shadow-sm shadow-[#0f4c5c]/5'
                            : 'text-slate-600 hover:text-[#0f4c5c] hover:bg-slate-50 border-l-transparent'
                        }`}
                      >
                        {sec.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </aside>

            {/* Main Policy Copy */}
            <main className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/60 shadow-sm text-left space-y-12 font-medium text-slate-700 text-[14.5px]">
              
              {sections.map(sec => {
                const matches = getSectionMatches(sec.id)
                let iconClass = 'fa-info-circle'
                if (sec.id === 'info-collection') iconClass = 'fa-database'
                if (sec.id === 'info-usage') iconClass = 'fa-sliders-h'
                if (sec.id === 'data-security') iconClass = 'fa-shield-alt'
                if (sec.id === 'third-party') iconClass = 'fa-handshake'
                if (sec.id === 'cookies') iconClass = 'fa-cookie'
                if (sec.id === 'changes') iconClass = 'fa-edit'
                if (sec.id === 'contact') iconClass = 'fa-envelope'

                return (
                  <section 
                    key={sec.id} 
                    id={sec.id} 
                    className={`space-y-4 ScrollOffset transition-all duration-300 ${searchTerm && !matches ? 'hidden' : 'block animate-fade-in'}`}
                  >
                    <h2 className="text-xl font-bold font-poppins text-slate-900 flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="w-9 h-9 rounded-xl bg-[#0f4c5c]/10 text-[#0f4c5c] flex items-center justify-center text-sm shrink-0">
                        <i className={`fas ${iconClass}`}></i>
                      </span>
                      {sec.label}
                    </h2>

                    {/* Highly-Premium TL;DR Box */}
                    <div className="p-4 bg-[#fffcf5] border-l-4 border-[#d97706] rounded-r-xl my-4 text-slate-800 text-[13.5px] font-bold shadow-[0_2px_15px_rgba(217,119,6,0.02)] flex items-start gap-3">
                      <span className="text-[#d97706] shrink-0 mt-0.5"><i className="fas fa-star text-xs animate-pulse-slow"></i></span>
                      <p className="m-0 leading-relaxed"><span className="text-[#d97706] uppercase tracking-wider text-[11px] font-extrabold mr-1.5 font-poppins">TL;DR Summary:</span>{sec.tldr}</p>
                    </div>

                    {/* Section Body */}
                    {sec.id === 'introduction' && (
                      <div className="space-y-3.5">
                        <p>
                          Welcome to <strong>Shivani Digital Hub</strong> (hereafter referred to as "the Firm", "we", "us", or "our"). We are committed to safeguarding the confidentiality, security, and integrity of your corporate and personal data.
                        </p>
                        <p>
                          This Privacy Policy describes how we collect, use, store, protect, and share your personal and business information when you visit our website (the "Site") or utilize our professional corporate advisory and consulting services. By accessing our Site or submitting inquiries, you explicitly consent to the data practices described in this policy.
                        </p>
                      </div>
                    )}

                    {sec.id === 'info-collection' && (
                      <div className="space-y-3.5">
                        <p>
                          To provide our legal advisory, GST returns, company incorporations, and licensing services, we collect various types of information from our clients:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 font-semibold text-[13.5px]">
                          <li><strong>Personal Identification Data:</strong> First and last name, email addresses, 10-digit mobile contact numbers, and state of residence.</li>
                          <li><strong>KYC Documents:</strong> PAN Cards, Aadhaar Cards, passports, certificates of incorporation, bank check copies, utility bills, and other statutory documents provided to complete registrations.</li>
                          <li><strong>Establishment Records:</strong> Employee listings, salary rosters, lease deeds, electricity bills, and details regarding factory or shop operations.</li>
                          <li><strong>Digital Metadata:</strong> Internet Protocol (IP) address, browser type, device details, pages viewed, and referral links collected automatically for analytical purposes.</li>
                        </ul>
                      </div>
                    )}

                    {sec.id === 'info-usage' && (
                      <div className="space-y-3.5">
                        <p>
                          We utilize your collected personal and corporate details strictly for lawful purposes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 font-semibold text-[13.5px]">
                          <li><strong>Fulfilling Registrations:</strong> Completing online application forms and submitting dossiers on official government portals (MCA, DGFT, IP India, ESIC, EPFO, FSSAI, GSTN).</li>
                          <li><strong>Client Communications:</strong> Answering inquiries, routing WhatsApp notifications, providing status tracking, and mailing compliance alerts.</li>
                          <li><strong>Statutory Audits:</strong> Pre-validating documents to prevent rejection by government registrars and officers.</li>
                          <li><strong>System Optimization:</strong> Analysing traffic patterns to improve site user-friendliness, structure, and loading speeds.</li>
                        </ul>
                      </div>
                    )}

                    {sec.id === 'data-security' && (
                      <div className="space-y-3.5">
                        <p>
                          We implement robust, industry-standard cybersecurity measures to protect your documents, credentials, and data from unauthorized access, modification, exposure, or loss:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 font-semibold text-[13.5px]">
                          <li><strong>Encryption:</strong> Secure Socket Layer (SSL) encryption protocol is applied to all incoming web traffic and digital inquiry forms.</li>
                          <li><strong>Limited Access:</strong> Access to sensitive client folders and documents is strictly limited to authorized lawyers, Chartered Accountants (CAs), and Company Secretaries (CSs) assigned to your file.</li>
                          <li><strong>Storage Security:</strong> Digital assets and files are stored in highly secure, firewalled server environments with daily backups.</li>
                        </ul>
                      </div>
                    )}

                    {sec.id === 'third-party' && (
                      <div className="space-y-3.5">
                        <p>
                          We do not sell, rent, license, or trade client personal information or business data with any external commercial brokers or marketers.
                        </p>
                        <p>
                          Your information is shared strictly with <strong>Government Authorities</strong> (such as the Ministry of Corporate Affairs, Trademarks Registry, Income Tax Department, DGFT, and ESI/PF authorities) as required explicitly to process the registration, incorporation, or filings you have ordered.
                        </p>
                      </div>
                    )}

                    {sec.id === 'cookies' && (
                      <div className="space-y-3.5">
                        <p>
                          Our website uses minor text cookies to store user preferences, cache pages, and gather general traffic analytics. Cookies help us understand user interaction trends to enhance overall browsing experiences. You can choose to block or disable cookies within your personal browser settings, although doing so might limit some navigational features of the Site.
                        </p>
                      </div>
                    )}

                    {sec.id === 'changes' && (
                      <div className="space-y-3.5">
                        <p>
                          We reserve the right to revise or update this Privacy Policy at any time to comply with changes in national internet regulations, cyber-security policies, or internal modifications. The "Last Updated" date at the top will indicate when the latest revisions took effect. We recommend reviewing this page periodically to stay informed.
                        </p>
                      </div>
                    )}

                    {sec.id === 'contact' && (
                      <div className="space-y-3.5">
                        <p>
                          If you have any questions, security concerns, or complaints regarding this Privacy Policy or our client data practices, please contact us at:
                        </p>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mt-2 space-y-2.5 text-xs sm:text-sm font-bold text-slate-800">
                          <div className="flex items-center gap-3">
                            <i className="fas fa-map-marker-alt text-[#0f4c5c] shrink-0 text-sm"></i>
                            <span>5th Avenue, GF-12, Alwa Naka, GIDC Road, Manjalapur, Vadodara - 390 011, Gujarat, India</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <i className="fas fa-phone-alt text-[#0f4c5c] shrink-0 text-sm"></i>
                            <span>+91 79901 87675</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <i className="fas fa-envelope text-[#0f4c5c] shrink-0 text-sm"></i>
                            <span>support@shivanidigitalhub.com</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </section>
                )
              })}

            </main>

          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}
