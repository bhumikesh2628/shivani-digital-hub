import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Our Blog | Shivani Digital Hub"
  }, [])


  return (
    <>
      <Header />
      <Blog />
      <Footer />
    </>
  )
}
