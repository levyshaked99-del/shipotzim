import { TRUST_STATS } from '../../data/site'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { CountUpStat } from '../ui/CountUpStat'
import { TrustIcon } from '../ui/TrustIcon'

export function TrustIndicators() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.2)

  return (
    <div
      ref={ref}
      className="w-full border-t border-white/[0.06] bg-bg/30 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-stretch justify-center lg:flex-nowrap lg:justify-between">
          {TRUST_STATS.map((stat, index) => (
            <div key={stat.label} className="flex items-stretch">
              {index > 0 && (
                <div
                  className="hidden w-px self-stretch bg-gradient-to-b from-transparent via-gold/15 to-transparent lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="group flex min-w-[140px] flex-1 flex-col items-center justify-center gap-3 px-5 py-7 text-center transition-[background-color] duration-300 hover:bg-white/[0.015] sm:min-w-[160px] sm:gap-3.5 sm:px-8 sm:py-9 lg:flex-none lg:px-12">
                <div className="flex h-5 items-center justify-center">
                  <TrustIcon
                    type={stat.icon}
                    className="h-[18px] w-[18px] stroke-[1.1] opacity-55 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_rgba(199,116,46,0.35)]"
                  />
                </div>
                <CountUpStat
                  value={stat.value}
                  animate={isVisible}
                  className="font-display text-[1.75rem] font-extralight tracking-tight text-text sm:text-4xl"
                />
                <span className="text-[0.625rem] font-light leading-snug tracking-[0.14em] text-muted/80 sm:text-[0.6875rem]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
