import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import useScrollReveal from './hooks/useScrollReveal'
import { Header, Hero, Services, About, WhyUs, Contact, Footer, FloatingButtons, LiveChat } from './components'

// Lazy-load page components to resolve the Vite large chunk warning and optimize load times
const PrivateLimitedCompany = lazy(() => import('./pages/PrivateLimitedCompany'))
const PublicLimitedCompany = lazy(() => import('./pages/PublicLimitedCompany'))
const ISOCertification = lazy(() => import('./pages/ISOCertification'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const ImportExportCode = lazy(() => import('./pages/ImportExportCode'))
const FssaiFoodLicense = lazy(() => import('./pages/FssaiFoodLicense'))
const GstServices = lazy(() => import('./pages/GstServices'))
const TrademarkServices = lazy(() => import('./pages/TrademarkServices'))
const ConsumerComplaint = lazy(() => import('./pages/ConsumerComplaint'))
const RtiFiling = lazy(() => import('./pages/RtiFiling'))
const IncomeTaxReturn = lazy(() => import('./pages/IncomeTaxReturn'))
const GstReturnFiling = lazy(() => import('./pages/GstReturnFiling'))
const SoleProprietorship = lazy(() => import('./pages/SoleProprietorship'))
const EpfCompliances = lazy(() => import('./pages/EpfCompliances'))

// Newly integrated routes (previously unrouted page components)
const LimitedLiabilityPartnership = lazy(() => import('./pages/LimitedLiabilityPartnership'))
const OnePersonCompany = lazy(() => import('./pages/OnePersonCompany'))
const Section8Company = lazy(() => import('./pages/Section8Company'))
const NidhiCompany = lazy(() => import('./pages/NidhiCompany'))
const EsicRegistration = lazy(() => import('./pages/EsicRegistration'))
const CopyrightRegistration = lazy(() => import('./pages/CopyrightRegistration'))
const TrademarkObjection = lazy(() => import('./pages/TrademarkObjection'))
const TrademarkRenewal = lazy(() => import('./pages/TrademarkRenewal'))
const FssaiRenewal = lazy(() => import('./pages/FssaiRenewal'))
const ImportExportModification = lazy(() => import('./pages/ImportExportModification'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))

function PageWrapper({ children }) {
  const location = useLocation()
  
  // Register scroll reveal globally for all card and container selectors on every route change!
  useScrollReveal('.svc-card, .why-card, .about-left, .about-right, .footer-col, .reveal-card, .reveal-item, #process div[class*="border-l-2"] > div', location.pathname)

  useEffect(() => {
    // Reset scroll position instantly on page change to avoid timing issues with animations
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  )
}

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  )
}


export default function App() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <i className="fas fa-circle-notch fa-spin text-4xl text-[#0f4c5c]"></i>
      </div>
    }>
      <Routes>

        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/private-limited-company" element={<PageWrapper><PrivateLimitedCompany /></PageWrapper>} />
        <Route path="/public-limited-company" element={<PageWrapper><PublicLimitedCompany /></PageWrapper>} />
        <Route path="/iso-certification" element={<PageWrapper><ISOCertification /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/blogs" element={<PageWrapper><BlogPage /></PageWrapper>} />

        {/* Routes for 10 custom service pages */}
        <Route path="/import-export-code" element={<PageWrapper><ImportExportCode /></PageWrapper>} />
        <Route path="/fssai-food-license" element={<PageWrapper><FssaiFoodLicense /></PageWrapper>} />
        <Route path="/gst-services" element={<PageWrapper><GstServices /></PageWrapper>} />
        <Route path="/trademark-services" element={<PageWrapper><TrademarkServices /></PageWrapper>} />
        <Route path="/consumer-complaint" element={<PageWrapper><ConsumerComplaint /></PageWrapper>} />
        <Route path="/rti-filing" element={<PageWrapper><RtiFiling /></PageWrapper>} />
        <Route path="/income-tax-return" element={<PageWrapper><IncomeTaxReturn /></PageWrapper>} />
        <Route path="/gst-return-filing" element={<PageWrapper><GstReturnFiling /></PageWrapper>} />
        <Route path="/sole-proprietorship" element={<PageWrapper><SoleProprietorship /></PageWrapper>} />
        <Route path="/epf-compliances" element={<PageWrapper><EpfCompliances /></PageWrapper>} />

        {/* Newly mapped routes for full layout consistency and functional integration */}
        <Route path="/limited-liability-partnership" element={<PageWrapper><LimitedLiabilityPartnership /></PageWrapper>} />
        <Route path="/one-person-company" element={<PageWrapper><OnePersonCompany /></PageWrapper>} />
        <Route path="/section-8-company" element={<PageWrapper><Section8Company /></PageWrapper>} />
        <Route path="/nidhi-company" element={<PageWrapper><NidhiCompany /></PageWrapper>} />
        <Route path="/esic-registration" element={<PageWrapper><EsicRegistration /></PageWrapper>} />
        <Route path="/copyright-registration" element={<PageWrapper><CopyrightRegistration /></PageWrapper>} />
        <Route path="/trademark-objection" element={<PageWrapper><TrademarkObjection /></PageWrapper>} />
        <Route path="/trademark-renewal" element={<PageWrapper><TrademarkRenewal /></PageWrapper>} />
        <Route path="/fssai-renewal" element={<PageWrapper><FssaiRenewal /></PageWrapper>} />
        <Route path="/import-export-modification" element={<PageWrapper><ImportExportModification /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
      </Routes>
      <FloatingButtons />
      <LiveChat />
    </Suspense>
  )
}
