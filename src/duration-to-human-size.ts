export const durationToHumanSize = (duratinInMs: number | null): string | null | void => {
  if (!duratinInMs) return null

  const h = Math.floor(duratinInMs / 3600)
  const m = Math.floor((duratinInMs % 3600) / 60)
  const s = Math.floor(duratinInMs % 60)

  if (h > 0) return `${h}h ${m}m ${s}s`
  if (m > 0) return `${m}m ${s}s`
  if (s > 0) return `${s}s`
}
