import round from 'lodash.round'
import { METERS_TO_FEET_RATIO } from './constants'
import { DepthUnit, DistanceUnit } from './types'

export const convertDepth = (depth: number, unit: DistanceUnit | DepthUnit = 'm'): string => {
  if (!depth) return '0'

  const result = unit === 'm' ? depth : (depth * METERS_TO_FEET_RATIO)
  return parseFloat(`${round(result, 2)}`).toFixed(1)
}
