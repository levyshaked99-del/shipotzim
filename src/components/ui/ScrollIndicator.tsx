interface ScrollIndicatorProps {
  visible: boolean
}

export function ScrollIndicator({ visible }: ScrollIndicatorProps) {
  return (
    <div
      className={`pointer-events-none absolute bottom-[148px] left-1/2 z-10 hidden -translate-x-1/2 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:block ${
        visible ? 'opacity-[0.35]' : 'opacity-0'
      }`}
      style={{ bottom: '156px' }}
      aria-hidden="true"
    >
      <div className="scroll-mouse flex flex-col items-center gap-2">
        <div className="flex h-9 w-[22px] items-start justify-center rounded-full border border-white/20 pt-1.5">
          <span className="scroll-wheel block h-1.5 w-0.5 rounded-full bg-gold/70" />
        </div>
        <span className="text-[0.6rem] font-light tracking-[0.22em] text-muted/60 uppercase">
          גלילה
        </span>
      </div>
    </div>
  )
}
