import { WORK_PROCESS } from '../../data/site'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function WorkProcess() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.12)

  return (
    <section
      id="process"
      ref={ref}
      className="border-t border-white/[0.05] bg-bg py-16 sm:py-24 lg:py-28"
      aria-labelledby="process-heading"
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
              איך אנחנו עובדים
            </span>
          </div>

          <h2
            id="process-heading"
            className="font-display text-[clamp(1.75rem,4.8vw,3.25rem)] font-black leading-[1.08] tracking-tight text-text"
          >
            {WORK_PROCESS.title}
          </h2>

          <p className="mt-4 text-[0.9375rem] font-extralight leading-[1.75] text-muted sm:mt-5 sm:text-[1.0625rem] lg:max-w-xl">
            {WORK_PROCESS.subtitle}
          </p>
        </header>

        <div className="relative">
          <div
            className="pointer-events-none absolute top-[2.75rem] hidden h-px bg-gradient-to-l from-transparent via-gold/25 to-transparent lg:block lg:right-0 lg:left-0"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-4 lg:gap-0">
            {WORK_PROCESS.steps.map((step, index) => (
              <li
                key={step.number}
                className={`relative transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:px-8 lg:first:pr-10 lg:last:pl-10 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                } ${index < WORK_PROCESS.steps.length - 1 ? 'lg:border-l lg:border-white/[0.06]' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {index < WORK_PROCESS.steps.length - 1 && (
                  <div
                    className="mb-6 h-px bg-gradient-to-l from-white/[0.08] to-transparent lg:hidden"
                    aria-hidden="true"
                  />
                )}

                <div className="group/step transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(0,0,0,0.22)]">
                  <span
                    className="font-display text-[clamp(3rem,7vw,5.5rem)] font-extralight leading-none tracking-tight text-gold/55 transition-[color,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/step:text-gold/65 group-hover/step:drop-shadow-[0_0_24px_rgba(199,116,46,0.35)]"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  <div className="mt-4 flex items-center gap-4">
                    <span className="h-px w-10 bg-gold/50 transition-[width,opacity] duration-500 group-hover/step:w-12 group-hover/step:opacity-100" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-[transform,box-shadow] duration-500 group-hover/step:scale-110 group-hover/step:shadow-[0_0_10px_rgba(199,116,46,0.45)]" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-text sm:text-[1.35rem]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm font-extralight leading-[1.85] text-muted/90 sm:text-[0.9375rem]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
