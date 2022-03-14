import { formattedWeight } from '../formatted-weight'

describe('formattedWeight', () => {
  describe('unit', () => {
    it('should contain kg', () => {
      expect(formattedWeight(100, 'kg', true)).toEqual('100.0 kg')
    })
    it('should contain lbs', () => {
      expect(formattedWeight(100, 'lbs', true)).toEqual('220.5 lbs')
    })
  })

  describe('includeUnit', () => {
    it('should contain unit', () => {
      expect(formattedWeight(100, 'kg', true)?.endsWith('kg')).toEqual(true)
    })
    it('should NOT contain unit', () => {
      expect(formattedWeight(100, 'kg', false)?.endsWith('kg')).toEqual(false)
    })
  })

  it('should return correct value (kg)', () => {
    expect(formattedWeight(100, 'kg')?.endsWith('kg')).toEqual(true)
  })
  it('should return correct value (lbs)', () => {
    expect(formattedWeight(100, 'lbs')?.endsWith('lbs')).toEqual(true)
  })
})
