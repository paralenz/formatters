import round from 'lodash.round'
import { LBS_TO_KG_RATIO } from './constants'
import { WeightUnit } from '..'

/**
 * Format the weight of a session
 *
 * @param weight The dive weight
 * @param {WeightUnit} unit The unit that the pressure should be converted to. Default: kg
 * @param {boolean} includeUnit Should the unit be appended. Default: true
 */
export const formattedWeight = (weight: number, unit: WeightUnit = 'kg', includeUnit = true): string => {
  const inKg = round(weight, 1).toFixed(1)
  const inLbs = round(weight * LBS_TO_KG_RATIO, 1).toFixed(1)
  const inKgWithUnits = inKg + (includeUnit ? ' kg' : '')
  const inLbsWithUnits = inLbs + (includeUnit ? ' lbs' : '')

  return unit === 'kg' ? inKgWithUnits : inLbsWithUnits
}
