import { ONE_KILOBYTE } from '..'
import { numberToHumanSize } from '../number-to-human-size'

describe('numberToHumanSize', () => {
    it('should return null', () => {
        expect(numberToHumanSize(null)).toBeNull()
    })
    
    it('should fileSize in bytes', () => {
        expect(numberToHumanSize(ONE_KILOBYTE - 1)).toBe('1023 bytes')
    })
    
    it('should fileSize in KB', () => {
        expect(numberToHumanSize(ONE_KILOBYTE)).toBe('1.00 KB')
        expect(numberToHumanSize(ONE_KILOBYTE * 2.9)).toBe('2.90 KB')
    })
    
    it('should fileSize in MB', () => {
        expect(numberToHumanSize(ONE_KILOBYTE * (1024 * 2.3))).toBe('2.30 MB')
    })
    
    it('should fileSize in GB', () => {
        expect(numberToHumanSize(ONE_KILOBYTE * 1024 * 1024 * 12.5)).toBe('12.50 GB')
    })
})