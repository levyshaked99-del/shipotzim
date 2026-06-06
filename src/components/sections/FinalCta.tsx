import { COMPANY, FINAL_CTA } from '../../data/site'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Button } from '../ui/Button'

export function FinalCta() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.15)

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.05] bg-bg py-24 sm:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(199,116,46,0.12)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(199,116,46,0.06)_0%,transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
        <div className="cta-glow absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[520px] sm:w-[520px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[900px] px-5 text-center sm:px-8">
        <div
          className={`mb-10 flex items-center justify-center gap-5 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mb-12 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50 sm:w-16" />
          <span className="text-[0.65rem] font-light tracking-[0.28em] text-gold/80 uppercase">
            {FINAL_CTA.eyebrow}
          </span>
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50 sm:w-16" />
        </div>

        <h2
          id="contact-heading"
          className={`font-display text-[clamp(2rem,5.5vw,3.5rem)] font-black leading-[1.08] tracking-tight text-text transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '120ms' }}
        >
          {FINAL_CTA.headline}
        </h2>

        <p
          className={`mx-auto mt-7 max-w-2xl text-base font-extralight leading-[1.9] text-muted transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mt-8 sm:text-[1.0625rem] ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '240ms' }}
        >
          {FINAL_CTA.subheadline}
        </p>

        <div
          className={`mt-6 flex items-center justify-center gap-4 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mt-8 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '320ms' }}
        >
          <span className="h-px w-20 bg-gradient-to-l from-transparent via-gold/30 to-transparent" />
          <span className="h-1 w-1 rounded-full bg-gold/50" aria-hidden="true" />
          <span className="h-px w-20 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mt-12 sm:flex-row sm:gap-5 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <Button variant="primary" as="a" href="#contact" className="w-full sm:w-auto">
            {FINAL_CTA.primaryCta}
          </Button>
          <Button
            variant="secondary"
            as="a"
            href={COMPANY.phoneHref}
            className="w-full sm:w-auto"
          >
            {FINAL_CTA.secondaryCta}
          </Button>
        </div>

        <div
          className={`mt-12 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mt-14 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: '520ms' }}
        >
          <a
            href={COMPANY.phoneHref}
            className="text-lg font-light tracking-[0.06em] text-text/90 transition-colors duration-300 hover:text-gold sm:text-xl"
            dir="ltr"
          >
            {COMPANY.phone}
          </a>
          <p className="mt-2.5 text-[0.6875rem] font-extralight tracking-[0.1em] text-muted/55 sm:text-xs">
            {FINAL_CTA.availability}
          </p>
        </div>
      </div>
    </section>
  )
}
