import { useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY, NAV_ITEMS, QUOTE_ROUTE } from '../../data/site'
import { useNavbarScroll } from '../../hooks/useNavbarScroll'
import { Button } from '../ui/Button'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const scrolled = useNavbarScroll(24)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5 lg:px-8">
        <div
          className={`mx-auto flex h-[60px] max-w-[1380px] items-center justify-between px-4 sm:h-[68px] sm:px-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? 'bg-[rgba(10,10,10,0.62)] backdrop-blur-[12px] border border-white/[0.07] shadow-[0_6px_28px_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.04)_inset]'
              : 'bg-[rgba(10,10,10,0.38)] backdrop-blur-[12px] border border-white/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.03)_inset]'
          }`}
        >
          <Link
            to="/"
            className="group flex shrink-0 flex-col justify-center gap-0.5"
            aria-label={`${COMPANY.name} — דף הבית`}
          >
            <span className="font-brand text-[1.2rem] font-light leading-none tracking-[0.32em] text-text sm:text-[1.5rem] sm:tracking-[0.35em]">
              {COMPANY.name}
            </span>
            <span className="hidden sm:block text-[0.625rem] font-light tracking-[0.22em] text-muted/70 uppercase">
              {COMPANY.tagline}
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-9" aria-label="ניווט ראשי">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative text-[0.75rem] font-light tracking-[0.1em] text-muted/90 hover:text-text transition-colors duration-300 after:absolute after:-bottom-1.5 after:right-0 after:h-px after:w-0 after:bg-gold/80 after:shadow-[0_0_8px_rgba(199,116,46,0.28)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-7">
            <a
              href={COMPANY.phoneHref}
              className="text-[0.75rem] font-light tracking-[0.08em] text-muted hover:text-gold transition-colors duration-300"
              dir="ltr"
            >
              {COMPANY.phone}
            </a>
            <Button variant="primary" as="a" href={QUOTE_ROUTE} className="!px-6 !py-3 !text-[0.7rem]">
              קבלת הצעת מחיר
            </Button>
          </div>

          <button
            type="button"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center text-text sm:h-11 sm:w-11"
            onClick={() => setMenuOpen(true)}
            aria-label="פתח תפריט"
            aria-expanded={menuOpen}
          >
            <span className="absolute w-px h-px overflow-hidden whitespace-nowrap">תפריט</span>
            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-5 bg-current transition-all duration-300" />
              <span className="block h-px w-5 bg-current transition-all duration-300" />
              <span className="block h-px w-[14px] bg-gold transition-all duration-300" />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
