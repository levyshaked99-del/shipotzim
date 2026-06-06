import { useEffect, useRef, useState } from 'react'
import { HERO, HERO_IMAGE } from '../../data/site'
import { Button } from '../ui/Button'
import { ScrollIndicator } from '../ui/ScrollIndicator'
import { TrustIndicators } from './TrustIndicators'

const HEADLINE_DELAYS = [320, 480, 640]

export function Hero() {
  const [imageReady, setImageReady] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [parallax, setParallax] = useState(0)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imageRef.current?.complete) setImageReady(true)
    const timer = requestAnimationFrame(() => setLoaded(true))

    const onScroll = () => {
      setParallax(Math.min(window.scrollY * 0.15, 60))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden" aria-label="עמוד ראשי">
      <div className="absolute inset-0 bg-bg" aria-hidden="true">
        <img
          ref={imageRef}
          src={HERO_IMAGE}
          alt=""
          className={`hero-image ${imageReady ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: `translate3d(0, ${parallax}px, 0)` }}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageReady(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/50 via-bg/12 to-transparent sm:from-bg/42 sm:via-bg/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_52%,rgba(199,116,46,0.06)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_50%,rgba(0,0,0,0.14)_100%)]" />
        <div className="hero-grain absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] flex-1 grid-cols-1 items-end px-5 pb-0 pt-[120px] sm:px-8 lg:grid-cols-5 lg:px-10 lg:pt-[140px]">
        <div className="flex flex-col items-end lg:col-span-2 lg:col-start-4">
          <p
            className={`mb-6 text-[0.65rem] font-light tracking-[0.28em] text-gold/80 uppercase transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mb-7 sm:text-[0.7rem] ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {HERO.eyebrow}
          </p>

          <h1 className="flex flex-col gap-1.5 font-display font-black leading-[0.94] tracking-[-0.02em] text-text sm:gap-2">
            {HERO.headline.map((line, index) => (
              <span
                key={line}
                className={`block transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                  loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                } ${
                  index < 2
                    ? 'text-[clamp(2.3rem,8.2vw,6.2rem)]'
                    : 'mt-1 text-[clamp(1.35rem,4.1vw,3rem)] font-bold text-muted/80 sm:mt-1.5'
                }`}
                style={{ transitionDelay: `${HEADLINE_DELAYS[index]}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>

          <div
            className={`mt-8 flex items-start gap-6 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mt-10 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '820ms' }}
          >
            <span
              className={`mt-1 hidden h-16 w-px origin-top bg-gradient-to-b from-gold via-gold/40 to-transparent sm:block ${
                loaded ? 'animate-[line-grow_1s_cubic-bezier(0.16,1,0.3,1)_0.95s_forwards]' : 'scale-y-0'
              }`}
              aria-hidden="true"
            />
            <p className="max-w-md text-base font-extralight leading-[1.8] text-muted sm:text-[1.0625rem] lg:text-[1.125rem]">
              {HERO.subtext}
            </p>
          </div>

          <div
            className={`mt-10 flex w-full flex-col gap-3.5 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mt-14 sm:w-auto sm:flex-row sm:gap-4 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '960ms' }}
          >
            <Button variant="primary" as="a" href="#contact" className="w-full sm:w-auto">
              {HERO.primaryCta}
            </Button>
            <Button
              variant="secondary"
              as="a"
              href="#projects"
              showArrow
              className="w-full sm:w-auto"
            >
              {HERO.secondaryCta}
            </Button>
          </div>
        </div>
      </div>

      <ScrollIndicator visible={loaded} />

      <div
        className={`relative z-10 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
        style={{ transitionDelay: '1080ms' }}
      >
        <TrustIndicators />
      </div>

      <div
        className="pointer-events-none absolute bottom-[200px] left-6 hidden h-32 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent 2xl:block"
        aria-hidden="true"
      />
    </section>
  )
}
