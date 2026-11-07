import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type SharedProps = {
  variant?: ButtonVariant
  children: ReactNode
  showArrow?: boolean
  className?: string
  /** Refined hover/focus motion and colors (Hero CTAs). */
  polished?: boolean
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
    href?: never
  }

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

/** Burnt copper primary — shared by navbar, hero, contact CTAs */
const primaryFill =
  'bg-[#C47732] text-[#111111] border border-[#C47732]/90 hover:bg-[#D58A43] hover:border-[#D58A43] active:bg-[#AD6429] active:border-[#AD6429]'

const variantStyles: Record<ButtonVariant, string> = {
  primary: `${primaryFill} shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_4px_20px_rgba(196,119,50,0.18)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_28px_rgba(213,138,67,0.22)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_12px_rgba(173,100,41,0.2)]`,
  secondary:
    'bg-white/[0.02] text-text border border-white/12 hover:border-gold/35 hover:bg-white/[0.05] hover:text-text backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'bg-transparent text-muted hover:text-text border border-transparent',
}

const polishedPrimary = `${primaryFill} shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_4px_16px_rgba(196,119,50,0.16)] hover:brightness-[1.03] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_6px_22px_rgba(213,138,67,0.22)] active:translate-y-0 active:brightness-100 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_10px_rgba(173,100,41,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D58A43]/75 motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0`

const polishedSecondary =
  'bg-white/[0.02] text-text/95 border border-white/12 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/28 hover:text-text hover:-translate-y-0.5 active:translate-y-0 active:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/45 motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0'

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 stroke-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
      fill="none"
      aria-hidden="true"
    >
      <path d="M10 3L5 8l5 5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    children,
    className = '',
    showArrow = false,
    polished = false,
    as = 'button',
    ...rest
  } = props

  const base = polished
    ? 'group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[0.8125rem] font-medium tracking-[0.06em] transition-[transform,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] rounded-none will-change-transform motion-reduce:transition-none'
    : 'group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[0.8125rem] font-medium tracking-[0.06em] transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-none will-change-transform'

  const variantClass = polished
    ? variant === 'primary'
      ? polishedPrimary
      : variant === 'secondary'
        ? polishedSecondary
        : variantStyles[variant]
    : variantStyles[variant]

  const classes = `${base} ${variantClass} ${className}`

  const content = (
    <>
      {children}
      {showArrow && <ArrowIcon />}
    </>
  )

  if (as === 'a') {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
    const isInternal = href.startsWith('/') && !href.startsWith('//')

    if (isInternal) {
      return (
        <Link to={href} className={classes} {...(anchorProps as object)}>
          {content}
        </Link>
      )
    }

    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
