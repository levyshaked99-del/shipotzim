import { TRUST_STATS } from '../../data/site'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { CountUpStat } from '../ui/CountUpStat'
import { TrustIcon } from '../ui/TrustIcon'

export function TrustIndicators() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.2)

  return (
    <div ref={ref} className="trust-indicators-panel w-full">
      <div className="mx-auto max-w-[1380px] px-0 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-px bg-white/[0.06] lg:flex lg:gap-0 lg:bg-transparent">
          {TRUST_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`lg:flex lg:flex-1 lg:items-stretch ${
                index > 0 ? 'lg:border-l lg:border-white/[0.06]' : ''
              }`}
            >
              <div className="group flex w-full min-w-0 flex-col items-center justify-center gap-1.5 px-3 py-4 text-center transition-[background-color] duration-300 hover:bg-white/[0.03] sm:gap-2.5 sm:px-5 sm:py-6 lg:gap-3 lg:px-12 lg:py-9">
                <div className="flex h-4 items-center justify-center sm:h-5">
                  <TrustIcon
                    type={stat.icon}
                    className="h-4 w-4 stroke-[1.1] opacity-55 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_rgba(199,116,46,0.35)] sm:h-[18px] sm:w-[18px]"
                  />
                </div>
                <CountUpStat
                  value={stat.value}
                  animate={isVisible}
                  className="font-display text-[1.625rem] font-extralight tracking-tight text-text sm:text-3xl lg:text-4xl"
                />
                <span className="text-[0.5625rem] font-light leading-snug tracking-[0.12em] text-muted/80 sm:text-[0.625rem] sm:tracking-[0.14em] lg:text-[0.6875rem]">
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
