import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type SharedProps = {
  variant?: ButtonVariant
  children: ReactNode
  showArrow?: boolean
  className?: string
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

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-bg border border-gold/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_4px_20px_rgba(199,116,46,0.2)] hover:bg-gold-dark hover:border-gold-dark hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_28px_rgba(216,131,54,0.28)] hover:-translate-y-0.5 active:bg-gold-active active:border-gold-active active:translate-y-0 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_12px_rgba(184,106,39,0.22)]',
  secondary:
    'bg-white/[0.02] text-text border border-white/12 hover:border-gold/35 hover:bg-white/[0.05] hover:text-text backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'bg-transparent text-muted hover:text-text border border-transparent',
}

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
    as = 'button',
    ...rest
  } = props

  const base =
    'group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[0.8125rem] font-medium tracking-[0.06em] transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-none will-change-transform'

  const classes = `${base} ${variantStyles[variant]} ${className}`

  const content = (
    <>
      {children}
      {showArrow && <ArrowIcon />}
    </>
  )

  if (as === 'a') {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
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
