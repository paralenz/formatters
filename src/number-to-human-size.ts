import { ONE_KILOBYTE } from '.'

export const numberToHumanSize = (size: number | null): string | null => {
  if (!size) return null

  if (size < ONE_KILOBYTE) return size + ' bytes'
  if (size < ONE_KILOBYTE * ONE_KILOBYTE) return (size / ONE_KILOBYTE).toFixed(2) + ' KB'
  if (size < ONE_KILOBYTE * ONE_KILOBYTE * ONE_KILOBYTE) return (size / ONE_KILOBYTE / ONE_KILOBYTE).toFixed(2) + ' MB'
  return (size / ONE_KILOBYTE / ONE_KILOBYTE / ONE_KILOBYTE).toFixed(2) + ' GB'
}
