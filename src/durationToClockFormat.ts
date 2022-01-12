import { MS_IN_AN_HOUR } from './constants'

/**
 * Format duration to human readble format
 * @param {number} duration The duration in ms
 * @returns The formatted duration in HH:MM:SS
 */
export const durationToClockFormat = (duration: number): string | null | void => {
  if (!duration) return null

  const h = Math.floor(duration / MS_IN_AN_HOUR)
  const m = Math.floor((duration % MS_IN_AN_HOUR) / 60)
  const s = duration % 60

  if (h > 0) return `${`00${h}`.slice(-2)}:${`00${m}`.slice(-2)}:${`00${s}`.slice(-2)}`
  if (m > 0) return `${`00${m}`.slice(-2)}:${`00${s}`.slice(-2)}`
  if (s > 0) return `00:${`00${s}`.slice(-2)}`
}
