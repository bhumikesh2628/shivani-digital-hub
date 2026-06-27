import { useEffect } from 'react'
import { Header, Footer, Contact } from '../components'

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
