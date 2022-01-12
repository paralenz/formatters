export type DistanceUnit = 'm' | 'ft'
export type TemperatureUnit = 'C' | 'F'
export type PressureUnit = 'bar' | 'psi'
export type WeightUnit = 'kg' | 'lbs'

export {convertDepth} from './src/convertDepth'
export {formattedDepth} from './src/formattedDepth'
export {formattedPressure} from './src/formattedPressure'
export {formattedTemperature} from './src/formattedTemperature'
export {formattedWeight} from './src/formattedWeight'

export * from './src/constants'