import { COMPANY, FOOTER } from '../../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-bg">
      <div className="mx-auto max-w-[1380px] px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold/40" />
            <span className="h-1 w-1 rounded-full bg-gold/50" aria-hidden="true" />
            <span className="h-px w-8 bg-gold/40" />
          </div>

          <p className="font-brand text-sm font-light tracking-[0.22em] text-text/90 sm:text-[0.9375rem]">
            {FOOTER.brand}
          </p>

          <div className="mt-6 flex flex-col items-center gap-2.5 sm:flex-row sm:gap-8">
            <a
              href={COMPANY.phoneHref}
              className="text-[0.8125rem] font-light tracking-wide text-muted transition-colors duration-300 hover:text-gold"
              dir="ltr"
            >
              {COMPANY.phone}
            </a>
            <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true" />
            <a
              href={COMPANY.emailHref}
              className="text-[0.8125rem] font-light tracking-wide text-muted transition-colors duration-300 hover:text-gold"
              dir="ltr"
            >
              {COMPANY.email}
            </a>
          </div>

          <p className="mt-8 text-[0.6875rem] font-light tracking-[0.18em] text-muted/45 uppercase sm:mt-10">
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
