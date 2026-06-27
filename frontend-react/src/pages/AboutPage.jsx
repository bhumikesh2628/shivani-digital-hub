import { useEffect } from 'react'
import { Header, Footer, About } from '../components'

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
