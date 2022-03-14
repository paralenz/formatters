import { formattedName } from "../formatted-name"

describe('formattedName', () => {
  describe('NO user', () => {
    it('should return null', () => {
      expect(formattedName(null)).toBeNull()
    })
  })

  describe('first, middle and last name', () => {
    it('should return formatted name', () => {
      expect(formattedName({ firstName: 'John', middleName: 'D.', lastName: 'Doe' })).toEqual('John D. Doe')
    })
  })

  describe('first and last name', () => {
    it('should return formatted name', () => {
      expect(formattedName({ firstName: 'John', lastName: 'Doe' })).toEqual('John Doe')
    })
  })

  describe('first and middle name', () => {
    it('should return formatted name', () => {
      expect(formattedName({ firstName: 'John', middleName: 'D.' })).toEqual('John D.')
    })
  })

  describe('only first name', () => {
    it('should return formatted name', () => {
      expect(formattedName({ firstName: 'John' })).toEqual('John')
    })
  })

  describe('only middle name', () => {
    it('should return formatted name', () => {
      expect(formattedName({ middleName: 'D.' })).toEqual('D.')
    })
  })

  describe('only last name', () => {
    it('should return formatted name', () => {
      expect(formattedName({ lastName: 'Doe' })).toEqual('Doe')
    })
  })
})
