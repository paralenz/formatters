import round from 'lodash.round'
import { TemperatureUnit } from '.'
import { KELVIN } from './constants'

/**
 * Format the water temerature of a session
 *
 * @param {number} temperature The temperature of the water
 * @param {TemperatureUnit} unit The unit of the user. Defualt: C
 */
export const formattedTemperature = (temperature: number, unit: TemperatureUnit = 'C') => {
  if (temperature === null) {
    return
  }

  return unit === 'C'
    ? `${round(temperature - KELVIN, 1).toFixed(1)} °C`
    : `${round(((temperature - KELVIN) * 9 / 5) + 32, 1).toFixed(1)} °F`
}
