import { formattedDepth } from '../formattedDepth'

describe('formattedDepth', () => {
  it('should set correct unit (m)', () => {
    expect(formattedDepth(42, 'm').endsWith(' m')).toEqual(true)
  })
  it('should set correct unit (ft)', () => {
    expect(formattedDepth(42, 'ft').endsWith(' ft')).toEqual(true)
  })
})
