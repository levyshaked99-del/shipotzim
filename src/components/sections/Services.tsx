import { SERVICES } from '../../data/site'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { ServiceCard } from '../ui/ServiceCard'

export function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.12)

  return (
    <section
      id="services"
      ref={ref}
      className="border-t border-white/[0.05] bg-bg py-16 sm:py-24 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
        <header
          className={`mb-8 max-w-2xl transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mb-12 lg:mb-14 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4 flex items-center gap-4 sm:mb-5">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[0.65rem] font-light tracking-[0.28em] text-gold/80 uppercase">
              {SERVICES.eyebrow}
            </span>
          </div>

          <h2
            id="services-heading"
            className="font-display text-[clamp(1.75rem,4.8vw,3.25rem)] font-black leading-[1.08] tracking-tight text-text"
          >
            {SERVICES.title}
          </h2>

          <p className="mt-4 text-[0.9375rem] font-extralight leading-[1.75] text-muted sm:mt-5 sm:text-[1.0625rem] lg:max-w-xl">
            {SERVICES.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {SERVICES.items.map((service, index) => (
            <div
              key={service.id}
              className={`transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ServiceCard title={service.title} description={service.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
