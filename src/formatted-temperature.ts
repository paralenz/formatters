import round from 'lodash.round'
import { KELVIN } from './constants'
import { TemperatureUnit } from './types'

export const formattedTemperature = (temperature: number | null, unit: TemperatureUnit = 'C') => {
  if (temperature === null) {
    return
  }

  return unit === 'C'
    ? `${round(temperature - KELVIN, 1).toFixed(1)} °C`
    : `${round(((temperature - KELVIN) * 9 / 5) + 32, 1).toFixed(1)} °F`
}
