type IconType = 'projects' | 'experience' | 'satisfaction' | 'timeline'

interface TrustIconProps {
  type: IconType
  className?: string
}

export function TrustIcon({ type, className = '' }: TrustIconProps) {
  const shared = `stroke-gold stroke-current ${className}`

  switch (type) {
    case 'projects':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path
            d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9.5z"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'experience':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path
            d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" strokeWidth="1.2" />
        </svg>
      )
    case 'satisfaction':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <path
            d="M12 21s-7-4.5-7-10a4 4 0 018 0 4 4 0 018 0c0 5.5-7 10-7 10z"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'timeline':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
          <circle cx="12" cy="12" r="9" strokeWidth="1.2" />
          <path d="M12 7v5l3 2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}
