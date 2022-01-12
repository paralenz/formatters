import { ONE_BYTE } from '.'

export const numberToHumanSize = (size: number): string | null => {
  if (!size) return null

  if (size < ONE_BYTE) return size + ' bytes'
  if (size < ONE_BYTE * ONE_BYTE) return (size / ONE_BYTE).toFixed(2) + ' KB'
  if (size < ONE_BYTE * ONE_BYTE * ONE_BYTE) return (size / ONE_BYTE / ONE_BYTE).toFixed(2) + ' MB'
  return (size / ONE_BYTE / ONE_BYTE / ONE_BYTE).toFixed(2) + ' GB'
}
