import * as C from '../constants'

describe('constants', () => {
  it('should match snpashot', () => {
    expect(C).toMatchSnapshot()
  })
  })