import { DistanceUnit } from '.'
import { convertDepth } from './convertDepth'

/**
 * Format the depth of a session. This will append the unit
 * @param {number} depth Format the depth of a session
 * @param {DistanceUnit} unit The unit of the user
 */
export const formattedDepth = (depth: number, unit: DistanceUnit = 'm'): string | null => {
  if (!depth) return null

  return `${convertDepth(depth, unit)} ${unit}`
}
