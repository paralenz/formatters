import { durationToClockFormat } from '../duration-to-clock-format'

describe('durationToClockFormat', () => {
    it('should return null', () => {
        expect(durationToClockFormat(null)).toBeNull()
    });

    it('should convert 30000', () => {
        expect(durationToClockFormat(30000)).toBe('08:20:00')
    });

    it('should convert 47000', () => {
        expect(durationToClockFormat(47000)).toBe('13:03:20')
    });
    it('should convert 70085', () => {
        expect(durationToClockFormat(70085)).toBe('19:28:05')
    });
})
