import { COMPANY } from '../../data/site'

/**
 * TODO: Replace WHATSAPP_* with the real business WhatsApp (intl digits in wa.me URL).
 * Phone links use COMPANY — update COMPANY.phone / phoneHref when the real number is ready.
 */
const WHATSAPP_DISPLAY = '050-000-0000'
const WHATSAPP_HREF = 'https://wa.me/9725000000000'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
      <path
        d="M8.5 4.5h2l1.5 5.5-2 1.2a10 10 0 005.3 5.3l1.2-2 5.5 1.5v2A2.5 2.5 0 0116 21C9.4 21 3 14.6 3 8A2.5 2.5 0 015.5 5.5z"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.3 2 11.7c0 2 .6 3.9 1.6 5.5L2 22l5-1.5A9.8 9.8 0 0012 21.5c5.5 0 10-4.3 10-9.7S17.5 2 12 2zm5.2 13.5c-.2.6-1.1 1.1-1.8 1.1-.5 0-1-.1-2.9-.9-2.4-1-4-3.3-4.1-3.5-.1-.2-1-1.3-1-2.4s.6-1.8 1-2.1c.3-.2.7-.3 1-.3.2 0 .4 0 .6.1.2 0 .5.1.7.7.2.6.7 2.1.8 2.2.1.1.1.3 0 .5-.1.2-.2.3-.4.5-.2.2-.4.3-.6.5-.2.2-.3.3-.5.5-.2.2-.1.4 0 .6.1.2.9 2.1 2.1 2.9 1.5.9 2.8 1.1 3.2 1.2.4.1.9.1 1.3-.1.4-.2 1.6-.7 1.8-1.4.2-.7.2-1.2.1-1.4-.1-.1-.3-.2-.6-.3z" />
    </svg>
  )
}

const fabClass =
  'flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-white/10 bg-bg/92 text-text shadow-[0_6px_24px_rgba(0,0,0,0.45)] backdrop-blur-md transition-[transform,background-color,border-color] duration-200 hover:border-gold/35 hover:bg-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60 active:scale-95 motion-reduce:transition-none'

export function FloatingContactFab() {
  return (
    <aside
      className="pointer-events-none fixed bottom-5 left-5 z-40 flex flex-col gap-2.5 pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] lg:hidden"
      aria-label="יצירת קשר מהיר"
    >
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={`pointer-events-auto ${fabClass} text-[#25D366]`}
        aria-label={`וואטסאפ ${WHATSAPP_DISPLAY} (מספר להחלפה)`}
      >
        <WhatsAppIcon />
      </a>
      <a
        href={COMPANY.phoneHref}
        className={`pointer-events-auto ${fabClass}`}
        aria-label={`התקשרות ${COMPANY.phone}`}
        dir="ltr"
      >
        <PhoneIcon />
      </a>
    </aside>
  )
}