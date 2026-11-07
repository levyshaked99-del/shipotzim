import { useEffect, useState } from 'react'
import { QUOTE } from '../../data/site'

export function QuoteHero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  return (
    <section
      className="relative overflow-hidden border-b border-white/[0.05] bg-bg pt-[100px] sm:pt-[120px] lg:pt-[140px]"
      aria-labelledby="quote-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(199,116,46,0.1)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      </div>

      <div className="relative z-10 mx-auto max-w-[720px] px-5 pb-10 text-center sm:px-8 sm:pb-12 lg:pb-14">
        <div
          className={`mb-6 flex items-center justify-center gap-4 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mb-8 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50 sm:w-12" />
          <span className="text-[0.65rem] font-light tracking-[0.28em] text-gold/80 uppercase">
            הצעת מחיר
          </span>
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50 sm:w-12" />
        </div>

        <h1
          id="quote-heading"
          className={`font-display text-[clamp(1.75rem,5.5vw,2.75rem)] font-black leading-[1.1] tracking-tight text-text transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '120ms' }}
        >
          {QUOTE.title}
        </h1>

        <p
          className={`mx-auto mt-5 max-w-lg text-[0.9375rem] font-extralight leading-[1.8] text-muted sm:mt-6 sm:text-base ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          } transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
          style={{ transitionDelay: '240ms' }}
        >
          {QUOTE.subtitle}
        </p>
      </div>
    </section>
  )
}
