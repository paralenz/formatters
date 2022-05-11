import { convertDepth } from './convert-depth'
import { DepthUnit, DistanceUnit } from './types'

export const formattedDepth = (depth: number | null, unit: DistanceUnit | DepthUnit = 'm'): string | null => {
  if (!depth) return null

  return `${convertDepth(depth, unit)} ${unit}`
}
