import { parseStatValue, useCountUp } from '../../hooks/useCountUp'

interface CountUpStatProps {
  value: string
  animate: boolean
  className?: string
}

export function CountUpStat({ value, animate, className = '' }: CountUpStatProps) {
  const { prefix, target, suffix } = parseStatValue(value)
  const count = useCountUp(target, animate)

  return (
    <span className={`tabular-nums ${className}`}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
