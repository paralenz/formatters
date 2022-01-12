import { KELVIN } from '../constants'
import { formattedTemperature } from '../formattedTemperature'

describe('formattedTemperature', () => {
  it('should have add celcius unit', () => {
    expect(formattedTemperature(KELVIN, 'C')).toEqual('0.0 °C')
  })

  it('should have add ferienheit unit', () => {
    expect(formattedTemperature(KELVIN, 'F')).toEqual('32.0 °F')
  })

  it('should have ONE decimal', () => {
    const [, decimal] = formattedTemperature(KELVIN, 'C').split('.')
    expect(decimal.replace(/\D/g, '').length).toEqual(1)
  })

  it('should return undefined', () => {
    expect(formattedTemperature(null, 'C')).toBeUndefined()
  })

  it('should return -273.15', () => {
    expect(formattedTemperature(0, 'C')).toEqual('-273.1 °C')
  })

  it('should return -459.7', () => {
    expect(formattedTemperature(0, 'F')).toEqual('-459.7 °F')
  })

  it('should return 100 celcius', () => {
    expect(formattedTemperature(KELVIN + 100, 'C')).toEqual('100.0 °C')
  })
})
