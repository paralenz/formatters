import { durationToHumanSize } from '../duration-to-human-size'

describe('durationToHumanSize', () => {
    it('should return null', () => {
        expect(durationToHumanSize(null)).toBeNull()
    })
    
    it('should convert 960ms to 16m 0s', () => {
        expect(durationToHumanSize(960)).toBe('16m 0s')
    });
    
    it('should convert 4750 to 1h 19m 10s', () => {
        expect(durationToHumanSize(4750)).toBe('1h 19m 10s')
    });
    
    it('should convert 470000 to 130h 33m 20s', () => {
        expect(durationToHumanSize(470000)).toBe('130h 33m 20s')
    });
})