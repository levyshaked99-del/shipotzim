import { useEffect } from 'react'
import { COMPANY, NAV_ITEMS } from '../../data/site'
import { Button } from '../ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-bg/90 backdrop-blur-lg transition-opacity duration-500 lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav
        className={`fixed top-0 right-0 z-50 flex h-full w-[min(100%,340px)] flex-col border-l border-glass-border bg-bg/97 backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="תפריט ניווט נייד"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-white/[0.05] px-7 py-6">
          <div className="flex flex-col gap-0.5">
            <span className="font-brand text-2xl font-light tracking-[0.3em] text-text">
              {COMPANY.name}
            </span>
            <span className="text-[0.625rem] font-light tracking-[0.2em] text-muted/60">
              {COMPANY.tagline}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-gold"
            aria-label="סגור תפריט"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none">
              <path d="M6 6l12 12M18 6L6 18" strokeWidth="1.25" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-0.5 px-5 py-10">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className={`block border-b border-white/[0.03] px-3 py-5 text-[1.125rem] font-extralight tracking-wide text-muted transition-all duration-300 hover:pr-5 hover:text-text ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: isOpen ? `${100 + index * 50}ms` : '0ms' }}
              >
                <span className="mr-3 text-[0.625rem] font-light tracking-[0.2em] text-gold/50">
                  0{index + 1}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-5 border-t border-white/[0.05] px-7 pb-12 pt-8">
          <a
            href={COMPANY.phoneHref}
            className="text-center text-sm font-light tracking-[0.1em] text-muted transition-colors hover:text-gold"
            dir="ltr"
          >
            {COMPANY.phone}
          </a>
          <Button variant="primary" as="a" href="#contact" className="w-full" onClick={onClose}>
            קבלת הצעת מחיר
          </Button>
        </div>
      </nav>
    </>
  )
}
