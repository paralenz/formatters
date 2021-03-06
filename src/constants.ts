import { PressureUnit } from './index'

export const BAR_TO_PSI_RATIO = 14.5037738
export const METERS_TO_FEET_RATIO = 3.28084
export const LBS_TO_KG_RATIO = 2.20462262185
export const KELVIN = 273.15
export const ONE_KILOBYTE = 1024.0
export const PRESSURE: Record<PressureUnit, number> = {
  bar: 1,
  psi: 0.0689475729
}
