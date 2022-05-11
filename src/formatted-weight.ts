import { LBS_TO_KG_RATIO } from './constants'
import { WeightUnit } from './types'

export const formattedWeight = (weight: number, unit: WeightUnit = 'kg', includeUnit = true): string | null => {
  if (!weight) return null

  const inKg = parseFloat(`${weight}`).toFixed(1)
  const inLbs = parseFloat(`${weight * LBS_TO_KG_RATIO}`).toFixed(1)
  const inKgWithUnits = inKg + (includeUnit ? ' kg' : '')
  const inLbsWithUnits = inLbs + (includeUnit ? ' lbs' : '')

  return unit === 'kg' ? inKgWithUnits : inLbsWithUnits
}
