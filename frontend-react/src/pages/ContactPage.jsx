import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Contact Us | Shivani Digital Hub"
  }, [])


  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  )
}
