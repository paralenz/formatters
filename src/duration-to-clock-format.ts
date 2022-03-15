export const durationToClockFormat = (duration: number | null): string | null | void => {
  if (!duration) return null

  const h = Math.floor(duration / 3600)
  const m = Math.floor((duration % 3600) / 60)
  const s = duration % 60

  if (h > 0) return `${`00${h}`.slice(-2)}:${`00${m}`.slice(-2)}:${`00${s}`.slice(-2)}`
  if (m > 0) return `${`00${m}`.slice(-2)}:${`00${s}`.slice(-2)}`
  if (s > 0) return `00:${`00${s}`.slice(-2)}`
}
