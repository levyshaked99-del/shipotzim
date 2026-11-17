import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY, NAV_ITEMS, QUOTE_ROUTE } from '../../data/site'
import { Button } from '../ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const nodes = [...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)]
      if (nodes.length === 0) return

      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

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
        ref={panelRef}
        className={`fixed inset-0 z-50 flex flex-col bg-bg transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        aria-label="תפריט ניווט נייד"
        aria-hidden={!isOpen}
      >
        <div className="flex min-h-[60px] items-center justify-between border-b border-white/[0.05] px-5 pt-[env(safe-area-inset-top)] sm:px-7">
          <div className="flex min-h-[44px] flex-col justify-center gap-0.5 py-2">
            <span className="font-brand text-2xl font-light tracking-[0.3em] text-text">
              {COMPANY.name}
            </span>
            <span className="text-xs font-light tracking-[0.18em] text-muted/70 sm:text-[0.625rem]">
              {COMPANY.tagline}
            </span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center text-muted transition-colors hover:text-gold"
            aria-label="סגור תפריט"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none">
              <path d="M6 6l12 12M18 6L6 18" strokeWidth="1.25" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-0 overflow-y-auto px-4 py-8 sm:px-6 sm:py-10">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={onClose}
                className={`flex min-h-[52px] items-center border-b border-white/[0.03] px-3 py-3 text-lg font-extralight tracking-wide text-muted transition-all duration-300 hover:text-text sm:min-h-[56px] sm:text-[1.125rem] ${
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: isOpen ? `${80 + index * 40}ms` : '0ms' }}
              >
                <span className="ml-3 text-xs font-light tracking-[0.16em] text-gold/55">
                  0{index + 1}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 border-t border-white/[0.05] px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-7 sm:gap-5 sm:px-7 sm:pt-8">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex min-h-[44px] items-center justify-center text-base font-light tracking-[0.08em] text-muted transition-colors hover:text-gold"
            dir="ltr"
          >
            {COMPANY.phone}
          </a>
          <Button variant="primary" as="a" href={QUOTE_ROUTE} className="w-full !min-h-[48px]" onClick={onClose}>
            קבלת הצעת מחיר
          </Button>
        </div>
      </nav>
    </>
  )
}