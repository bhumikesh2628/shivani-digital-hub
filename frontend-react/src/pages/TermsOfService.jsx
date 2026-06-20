import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

const sections = [
  { 
    id: 'agreement', 
    label: '1. Agreement Acceptance', 
    tldr: 'By accessing our services, you formally agree to be legally bound by these Firm terms and conditions.' 
  },
  { 
    id: 'disclaimer', 
    label: '2. Facilitator Disclaimer', 
    tldr: 'We are an independent professional advisory firm. We are not a government portal or department.' 
  },
  { 
    id: 'responsibilities', 
    label: '3. Client Responsibilities', 
    tldr: 'You warrant that all corporate records and KYC documents submitted to us are 100% authentic and valid.' 
  },
  { 
    id: 'payments', 
    label: '4. Payments & Government Fees', 
    tldr: 'Official government portal fees are strictly non-refundable. Consultation charges are earned upon file processing.' 
  },
  { 
    id: 'delays', 
    label: '5. Third-Party & Portal Delays', 
    tldr: 'We are not responsible for delays caused by government server down-time, officer review backlogs, or portal crashes.' 
  },
  { 
    id: 'ipr', 
    label: '6. Intellectual Property Rights', 
    tldr: 'All layouts, graphics, scripts, and content templates on this Site are the property of Shivani Digital Hub.' 
  },
  { 
    id: 'liability', 
    label: '7. Limitation of Liability', 
    tldr: 'Our total financial liability for any transaction is limited strictly to the professional fee paid to us.' 
  },
  { 
    id: 'jurisdiction', 
    label: '8. Governing Law & Jurisdiction', 
    tldr: 'All legal relations are governed by Indian law, with Vadodara, Gujarat as the exclusive court jurisdiction.' 
  },
]

export default function TermsOfService() {
  useScrollReveal('.reveal-card')
  const [activeSec, setActiveSec] = useState('agreement')
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
    document.title = "Terms of Service | Shivani Digital Hub"
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
              Home <span className="mx-1 text-slate-400">»</span> Terms of Service
            </nav>
            <h1 className="text-3xl sm:text-4.5xl font-poppins font-black tracking-tight mb-3">
              Terms of Service
            </h1>
            <p className="text-slate-200 text-xs sm:text-[14.5px] max-w-2xl mx-auto font-medium mb-6">
              Last Updated: June 1, 2026. Please read these terms carefully before utilising our consulting services.
            </p>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs tracking-wider uppercase border border-white/20 hover:border-white/40 shadow-sm transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <i className="fas fa-print"></i> Print Terms Document
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
                  placeholder="Search terms..." 
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

              <h3 className="font-poppins font-black text-slate-900 text-[12px] uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Terms Navigation</h3>
              
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

            {/* Main Terms Copy */}
            <main className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/60 shadow-sm text-left space-y-12 font-medium text-slate-700 text-[14.5px]">
              
              {sections.map(sec => {
                const matches = getSectionMatches(sec.id)
                let iconClass = 'fa-file-contract'
                if (sec.id === 'disclaimer') iconClass = 'fa-landmark'
                if (sec.id === 'responsibilities') iconClass = 'fa-users-cog'
                if (sec.id === 'payments') iconClass = 'fa-wallet'
                if (sec.id === 'delays') iconClass = 'fa-exclamation-triangle'
                if (sec.id === 'ipr') iconClass = 'fa-copyright'
                if (sec.id === 'liability') iconClass = 'fa-gavel'
                if (sec.id === 'jurisdiction') iconClass = 'fa-balance-scale'

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
                    {sec.id === 'agreement' && (
                      <div className="space-y-3.5">
                        <p>
                          By accessing, browsing, or utilizing the services provided by <strong>Shivani Digital Hub</strong> via our website, WhatsApp channels, physical office, or telephone communications, you formally acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Service (the "Terms").
                        </p>
                        <p>
                          These Terms govern all legal consulting, company incorporation, tax advisory, licensing renewals, and intellectual property applications ordered through our Firm. If you do not agree with any part of these Terms, you must immediately cease accessing the Site or engaging our advisory services.
                        </p>
                      </div>
                    )}

                    {sec.id === 'disclaimer' && (
                      <div className="space-y-3.5">
                        <p>
                          <strong>Shivani Digital Hub is an independent corporate advisory consulting firm. We are not an official government department, ministry, or registrar agency.</strong>
                        </p>
                        <p>
                          We operate strictly as commercial facilitators, corporate consultants, and professional intermediaries assisting clients by reviewing KYC records, drafting legal portfolios, and managing files/submissions on authorized public government portals (MCA, DGFT, IP India, ESIC, EPFO, FSSAI, GSTN). The service fees charged represent professional consulting, processing, and management charges.
                        </p>
                      </div>
                    )}

                    {sec.id === 'responsibilities' && (
                      <div className="space-y-3.5">
                        <p>
                          To complete applications without delays or rejection, clients agree to the following obligations:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 font-semibold text-[13.5px]">
                          <li><strong>Data Authenticity:</strong> You warrant that all documents (PAN, Aadhaar, bank cheques, electricity bills, COI, partner deeds) and information provided are 100% authentic, correct, and legally valid under Indian law.</li>
                          <li><strong>Forbidden Content:</strong> You must not submit forged deeds, stolen identity files, or copyrighted/trademarks materials belonging to competitors for registrations under false pretenses.</li>
                          <li><strong>Prompt Responses:</strong> Respond promptly to any examination discrepancies, verification requests, or clarifications raised by our CS/CA team or government registrars.</li>
                        </ul>
                      </div>
                    )}

                    {sec.id === 'payments' && (
                      <div className="space-y-3.5">
                        <p>
                          Services are initiated only upon receipt of the agreed professional service payments.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 font-semibold text-[13.5px]">
                          <li><strong>Statutory Fees:</strong> Many filings require paying official Government statutory fees (such as stamp duty, trademark fees, FSSAI challan, etc.). These government fees are paid directly to respective portals and are strictly **non-refundable**.</li>
                          <li><strong>Professional Charges:</strong> Our consulting and drafting fees are professional service charges. Once drafting, document reviews, or portal submissions have commenced, professional charges are non-refundable.</li>
                          <li><strong>Taxes:</strong> All payments are subject to applicable goods and services taxes (GST) as mandated by Indian taxation laws.</li>
                        </ul>
                      </div>
                    )}

                    {sec.id === 'delays' && (
                      <div className="space-y-3.5">
                        <p>
                          While we strive to ensure quickest delivery (within our estimated processing days), the final approvals, license issuances, or registrations are entirely under the jurisdiction of the respective government officers, registrars, and departments.
                        </p>
                        <p>
                          <strong>Shivani Digital Hub is not liable for delayed processing, server downtime, portal crashes, unexpected legal amendments, or rejection of applications by the Ministry of Corporate Affairs, Trademarks Registry, DGFT, Food Safety Authority, labor department, or GSTN.</strong> No refunds are issued for delays arising from these governmental or technical factors.
                        </p>
                      </div>
                    )}

                    {sec.id === 'ipr' && (
                      <div className="space-y-3.5">
                        <p>
                          All content, graphics, logos, custom CSS, layout designs, and text written on this website are the intellectual property of Shivani Digital Hub. You must not copy, scrape, modify, redistribute, or reproduce any part of our website or its service templates for commercial purposes without our explicit written permission.
                        </p>
                      </div>
                    )}

                    {sec.id === 'liability' && (
                      <div className="space-y-3.5">
                        <p>
                          To the absolute maximum extent permitted under applicable Indian laws, the total collective liability of Shivani Digital Hub, its directors, lawyers, compliance officers, and employees for any claims, errors, damages, losses, or omissions arising from the website or our services shall not exceed the total professional fee paid by you to the Firm for that specific transaction.
                        </p>
                        <p>
                          We shall not be liable for any indirect, consequential, punitive, or remote damages, including loss of business profits, opportunities, reputation, or operational disruptions.
                        </p>
                      </div>
                    )}

                    {sec.id === 'jurisdiction' && (
                      <div className="space-y-3.5">
                        <p>
                          These Terms of Service, along with your engagement of our corporate consulting services, shall be governed by, interpreted, and construed in absolute accordance with the laws of the Republic of India.
                        </p>
                        <p>
                          Any legal disputes, arbitrations, lawsuits, or conflicts arising from these Terms or our services shall be subject exclusively to the jurisdiction of the competent courts located in <strong>Vadodara, Gujarat, India</strong>.
                        </p>
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
