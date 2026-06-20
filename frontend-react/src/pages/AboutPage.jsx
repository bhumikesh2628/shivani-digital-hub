import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "About Us | Shivani Digital Hub"
  }, [])


  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  )
}
