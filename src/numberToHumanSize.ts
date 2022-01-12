import { BYTE } from './constants'

/**
 * Convert bytes to human readbale size
 * @param {number} size The size in Bytes
 * @returns {string} The size in human readable size (KB, MB, GB)
 */
export const numberToHumanSize = (size: number): string | null => {
  if (!size) return null

  if (size < BYTE) return size + ' bytes'
  if (size < BYTE * BYTE) return (size / BYTE).toFixed(2) + ' KB'
  if (size < BYTE * BYTE * BYTE) return (size / BYTE / BYTE).toFixed(2) + ' MB'
  return (size / BYTE / BYTE / BYTE).toFixed(2) + ' GB'
}
