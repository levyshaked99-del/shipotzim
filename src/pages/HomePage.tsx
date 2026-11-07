import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'
import { FinalCta } from '../components/sections/FinalCta'
import { Hero } from '../components/sections/Hero'
import { TrustIndicators } from '../components/sections/TrustIndicators'
import { Services } from '../components/sections/Services'
import { Testimonials } from '../components/sections/Testimonials'
import { WorkProcess } from '../components/sections/WorkProcess'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      target?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <FeaturedProjects />
        <WorkProcess />
        <Services />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
