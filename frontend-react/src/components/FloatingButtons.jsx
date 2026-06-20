import { useState, useEffect } from 'react'

export default function FloatingButtons() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Premium Floating Call Button - Bottom-Left Corner */}
      <a 
        href="tel:+917990187675" 
        aria-label="Call Us"
        className="fixed bottom-6 left-4 sm:left-7 z-[9999] w-[44px] sm:w-[54px] h-[44px] sm:h-[54px] rounded-full bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center text-xl sm:text-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-pulse"
      >
        <i className="fas fa-phone"></i>
      </a>

      {/* Premium Floating WhatsApp Button - Stacked above Call Button */}
      <a 
        href="https://wa.me/917990187675" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 sm:bottom-26 left-4 sm:left-7 z-[9999] w-[44px] sm:w-[54px] h-[44px] sm:h-[54px] rounded-full bg-[#25d366] text-white flex items-center justify-center text-xl sm:text-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Back to Top Button - Bottom-Right Corner, Stacked above Chat Trigger */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-24 sm:bottom-26 right-4 sm:right-7 z-[9999] w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full bg-gradient-to-br from-[#0f4c5c] to-[#1a7a8a] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg cursor-pointer ${
          show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  )
}
