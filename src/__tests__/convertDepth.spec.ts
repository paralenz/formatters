import { convertDepth } from '../convertDepth'

describe('convertDepth', () => {
  it('should convert to meter', () => {
    expect(convertDepth(42, 'm')).toEqual('42.0')
  })

  it('should convert to feet', () => {
    expect(convertDepth(42, 'ft')).toEqual('137.8')
  })

  it('should have ONE decimal', () => {
    const [, decimal] = convertDepth(42, 'ft')
    expect(decimal.length).toEqual(1)
  })
})
