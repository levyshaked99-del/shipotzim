import { useEffect } from 'react'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { QuoteForm } from '../components/sections/QuoteForm'
import { QuoteHero } from '../components/sections/QuoteHero'

export function QuotePage() {
  useEffect(() => {
    document.title = 'קבלת הצעת מחיר | אבני'
    window.scrollTo(0, 0)
    return () => {
      document.title = 'אבני | בנייה יוקרתית ושיפוצים'
    }
  }, [])

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <QuoteHero />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  )
}
