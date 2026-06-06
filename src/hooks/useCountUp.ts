import { useEffect, useState } from 'react'

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3
}

export function parseStatValue(value: string) {
  const match = value.match(/^([^0-9]*)(\d+)(.*)$/)
  return {
    prefix: match?.[1] ?? '',
    target: Number(match?.[2] ?? 0),
    suffix: match?.[3] ?? '',
  }
}

export function useCountUp(
  target: number,
  enabled: boolean,
  { duration = 2000 }: { duration?: number } = {},
) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled || target === 0) return

    let start: number | null = null
    let frame = 0

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.round(easeOutCubic(progress) * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, enabled, duration])

  return value
}
