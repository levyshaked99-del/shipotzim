import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { FeaturedProjects } from './components/sections/FeaturedProjects'
import { Hero } from './components/sections/Hero'
import { FinalCta } from './components/sections/FinalCta'
import { WorkProcess } from './components/sections/WorkProcess'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <WorkProcess />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
