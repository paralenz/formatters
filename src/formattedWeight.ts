import { LBS_TO_KG_RATIO } from './constants'
import { WeightUnit } from '.'

/**
 * Format the weight of a session
 *
 * @param weight The dive weight
 * @param {WeightUnit} unit The unit that the pressure should be converted to. Default: kg
 * @param {boolean} includeUnit Should the unit be appended. Default: true
 */
export const formattedWeight = (weight: number, unit: WeightUnit = 'kg', includeUnit = true): string => {
  if (!weight) return null

  const inKg = parseFloat(`${weight}`).toFixed(1)
  const inLbs = parseFloat(`${weight * LBS_TO_KG_RATIO}`).toFixed(1)
  const inKgWithUnits = inKg + (includeUnit ? ' kg' : '')
  const inLbsWithUnits = inLbs + (includeUnit ? ' lbs' : '')

  return unit === 'kg' ? inKgWithUnits : inLbsWithUnits
}
