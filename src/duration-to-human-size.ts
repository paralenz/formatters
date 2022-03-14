export const durationToHumanSize = (duration: number): string | null | void => {
  if (!duration) return null

  const h = Math.floor(duration / 3600)
  const m = Math.floor((duration % 3600) / 60)
  const s = Math.floor(duration % 60)

  if (h > 0) return `${h}h ${m}m ${s}s`
  if (m > 0) return `${m}m ${s}s`
  if (s > 0) return `${s}s`
}
