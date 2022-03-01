export type DistanceUnit = 'm' | 'ft'
export type TemperatureUnit = 'C' | 'F'
export type PressureUnit = 'bar' | 'psi'
export type WeightUnit = 'kg' | 'lbs'

export { convertDepth } from './convertDepth'
export { formattedDepth } from './formattedDepth'
export { formattedPressure } from './formattedPressure'
export { formattedTemperature } from './formattedTemperature'
export { formattedWeight } from './formattedWeight'
export { numberToHumanSize } from './numberToHumanSize'
export { durationToHumanSize } from './durationToHumanSize'
export { durationToClockFormat } from './durationToClockFormat'
export { formatDate } from './formatDate'

export * from './constants'
