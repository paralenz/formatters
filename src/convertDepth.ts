import round from 'lodash.round'
import { DistanceUnit } from '..'
import { METERS_TO_FEET_RATIO } from './constants'

/**
 * Convert depth of a session to either meters or feet
 *
 * @param {number} depth The depth of the session
 * @param {DistanceUnit} unit The unit of the user. Default: m
 */
export const convertDepth = (depth: number, unit: DistanceUnit = 'm'): string => {
  return round(unit === 'm' ? depth : (depth * METERS_TO_FEET_RATIO), 2).toFixed(1)
}
