import { useEffect } from 'react'

export default function useScrollReveal(selector, trigger) {
  useEffect(() => {
    // Wait a brief moment for the page to stabilize and scroll-to-top to complete
    const timeout = setTimeout(() => {
      const els = document.querySelectorAll(selector)
      if (!els.length) return

      els.forEach((el, i) => {
        // Only apply hidden styling if it is not already visible
        if (!el.classList.contains('reveal-visible')) {
          el.classList.add('reveal-hidden')
          el.style.transitionDelay = `${(i % 4) * 0.08}s`
        }
      })

      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden')
            entry.target.classList.add('reveal-visible')
            obs.unobserve(entry.target)
          }
        })
      }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })

      els.forEach(el => {
        if (!el.classList.contains('reveal-visible')) {
          obs.observe(el)
        }
      })
    }, 150)

    return () => clearTimeout(timeout)
  }, [selector, trigger])
}
