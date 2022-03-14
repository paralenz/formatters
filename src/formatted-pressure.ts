import round from 'lodash.round'
import { BAR_TO_PSI_RATIO } from './constants'
import { PressureUnit } from '.'

/**
 * Format the pressure of a session to either bar or psi.
 *
 * @param {number} pressure The pressure that needs to be formatted
 * @param {PressureUnit} unit The unit that the pressure should be converted to.Default: bar
 * @param {boolean} includeUnit Should the unit be appended. Default: true
 */
export const formattedPressure = (pressure: number, unit: PressureUnit = 'bar', includeUnit = true): string => {
  const inBar = round(pressure, 1).toFixed(1)
  const inPsi = round(pressure * BAR_TO_PSI_RATIO, 1).toFixed(1)
  const inBarWithUnits = inBar + (includeUnit ? ' bar' : '')
  const inPsiWithUnits = inPsi + (includeUnit ? ' psi' : '')

  return unit === 'bar' ? inBarWithUnits : inPsiWithUnits
}
