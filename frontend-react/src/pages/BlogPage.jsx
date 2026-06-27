import { useEffect } from 'react'
import { Header, Footer, Blog } from '../components'

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
