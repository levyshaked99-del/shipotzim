import { useEffect, useRef, useState } from 'react'
import { HERO, HERO_IMAGE, QUOTE_ROUTE } from '../../data/site'
import { Button } from '../ui/Button'
import { ScrollIndicator } from '../ui/ScrollIndicator'
const HEADLINE_MAIN_DELAYS = [280, 400]
const SUBTITLE_DELAY = 580
const DESCRIPTION_DELAY = 760

export function Hero() {
  const [imageReady, setImageReady] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [parallax, setParallax] = useState(0)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imageRef.current?.complete) setImageReady(true)
    const timer = requestAnimationFrame(() => setLoaded(true))

    const onScroll = () => {
      setParallax(Math.min(window.scrollY * 0.12, 40))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const [headlinePrimary, headlineSecondary, headlineSubtitle] = HERO.headline

  return (
    <section
      className="relative flex min-h-[86dvh] flex-col overflow-hidden lg:min-h-[100dvh]"
      aria-label="עמוד ראשי"
    >
      <div className="absolute inset-0 bg-bg" aria-hidden="true">
        <img
          ref={imageRef}
          src={HERO_IMAGE}
          alt=""
          width={1024}
          height={576}
          className={`hero-image ${imageReady ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: `translate3d(0, ${parallax}px, 0) scale(var(--hero-scale))`,
          }}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageReady(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/45 via-bg/8 to-transparent lg:from-bg/32 lg:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/15 to-transparent lg:hidden" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end pb-0 pt-[92px] sm:pt-[108px] lg:pt-[140px]">
        <div
          dir="rtl"
          className="hero-content pointer-events-auto absolute bottom-[4.5rem] left-5 flex w-[calc(100%-40px)] flex-col items-stretch text-right sm:bottom-[5rem] md:left-[5%] md:w-[min(420px,calc(100%-10%))] md:max-w-[420px] lg:bottom-[5.5rem] lg:left-[7.5%] lg:w-[480px] lg:max-w-[480px]"
        >
          <div
            className="pointer-events-none absolute -bottom-6 -left-5 -right-2 -top-10 bg-[radial-gradient(ellipse_at_15%_55%,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.22)_42%,transparent_72%)] sm:-left-8 sm:-right-4 lg:-left-12 lg:-right-16 lg:bg-[radial-gradient(ellipse_at_8%_50%,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.18)_45%,transparent_70%)]"
            aria-hidden="true"
          />

          <p
            className={`relative m-0 mb-3 w-full text-center text-[0.6rem] font-light tracking-[0.26em] text-text uppercase transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-[0.65rem] lg:text-[0.7rem] ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {HERO.eyebrow}
          </p>

          <span
            className={`relative mx-auto mb-6 block h-px w-11 bg-gradient-to-r from-transparent via-text/55 to-transparent sm:w-14 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '260ms' }}
            aria-hidden="true"
          />

          <h1 className="relative m-0 w-full p-0 text-right font-display font-black leading-[1.05] tracking-[-0.02em] text-text">
            <span
              className={`hero-headline-shadow block w-full text-right text-[clamp(1.5rem,6.2vw,5.5rem)] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:text-[clamp(2.05rem,7.4vw,5.75rem)] ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${HEADLINE_MAIN_DELAYS[0]}ms` }}
            >
              {headlinePrimary}
            </span>
            <span
              className={`hero-headline-shadow block w-full text-right text-[clamp(1.5rem,6.2vw,5.5rem)] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:text-[clamp(2.05rem,7.4vw,5.75rem)] ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${HEADLINE_MAIN_DELAYS[1]}ms` }}
            >
              {headlineSecondary}
            </span>
          </h1>

          <p
            className={`hero-subtitle-shadow relative m-0 mt-4 mb-6 w-full text-right text-[clamp(0.9375rem,3.1vw,2.75rem)] font-bold leading-[1.22] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${SUBTITLE_DELAY}ms` }}
          >
            {headlineSubtitle}
          </p>

          <p
            className={`hero-description-text relative m-0 mb-8 w-full text-right text-[0.875rem] font-extralight leading-[1.7] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-base lg:text-[1.0625rem] xl:text-[1.125rem] ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: `${DESCRIPTION_DELAY}ms` }}
          >
            {HERO.subtext}
          </p>

          <div
            className={`relative flex w-full flex-col gap-3 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:flex-row sm:items-center sm:justify-start sm:gap-4 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '960ms' }}
          >
            <Button
              variant="primary"
              polished
              as="a"
              href={QUOTE_ROUTE}
              className="w-full !h-[54px] !min-h-[54px] !px-6 !py-0 !text-xs sm:w-auto sm:!text-[0.8125rem]"
            >
              {HERO.primaryCta}
            </Button>
            <Button
              variant="secondary"
              polished
              as="a"
              href="#projects"
              showArrow
              className="w-full !h-[54px] !min-h-[54px] !px-6 !py-0 !text-xs sm:w-auto sm:!text-[0.8125rem]"
            >
              {HERO.secondaryCta}
            </Button>
          </div>
        </div>
      </div>

      <ScrollIndicator visible={loaded} />

      <div
        className="pointer-events-none absolute bottom-[200px] left-6 hidden h-32 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent 2xl:block"
        aria-hidden="true"
      />
    </section>
  )
}
