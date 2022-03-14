import { BAR_TO_PSI_RATIO } from '../constants'
import { formattedPressure } from '../formatted-pressure'

describe('formattedPressure', () => {
  it('should return pressure in bar', () => {
    expect(formattedPressure(42, 'bar', false)).toEqual('42.0')
  })

  describe('includeUnit', () => {
    it('should return unit', () => {
      expect(formattedPressure(42, 'bar', true)).toEqual('42.0 bar')
    })
    it('should NOT return unit', () => {
      expect(formattedPressure(42, 'bar', false)).toEqual('42.0')
    })
  })

  describe('psi', () => {
    it('should return pressure in psi', () => {
      expect(formattedPressure(42, 'psi', false)).toEqual('609.2')
    })

    it('should multiply the pressure with BAR_TO_PSI_RATIO', () => {
      const result = (609.2 / BAR_TO_PSI_RATIO).toFixed(0)
      expect(result).toEqual('42')
    })
  })
})
