import { convertFileSize } from '../convert-file-size'

describe('ConvertFileSize', () => {
  it('bytes->bytes', () => {
    expect(convertFileSize.from('B').to('B').convert(1)).toEqual('1')
  });
  
  it('KB->KB', () => {
    expect(convertFileSize.from('KB').to('KB').convert(1)).toEqual('1')
  });
  
  it('byte->KB', () => {
    expect(convertFileSize.from('B').to('KB').convert(1000)).toBe('1')
  });
  
  it('KB->MB', () => {
    expect(convertFileSize.from('KB').to('MB').convert(1000)).toEqual('1')
  });

  it('MB->GB', () => {
    expect(convertFileSize.from('MB').to('GB').convert(1000)).toEqual('1')
  });
  
  it('KB->bytes', () => {
    expect(convertFileSize.from('KB').to('B').convert(1)).toEqual('1024')
  });
  
  it('MB->KB', () => {
    expect(convertFileSize.from('MB').to('KB').convert(1)).toEqual('1024')
  });
  
  
  it('GB->MB', () => {
    expect(convertFileSize.from('GB').to('MB').convert(1)).toEqual('1024')
  });
  
  it('GB->KB', () => {
    expect(convertFileSize.from('GB').to('KB').convert(1)).toEqual('1048576')
  });
  
  it('GB->byte', () => {
    expect(convertFileSize.from('GB').to('B').convert(1)).toEqual('1073741824')
  });

  it('should should append the unit', () => {
    expect(convertFileSize.from('KB').to('MB').appendUnit().convert(1000)).toEqual('1 MB')
  });

  it('should should append X decimals', () => {
    expect(convertFileSize.from('KB').to('MB').decimals(3).convert(1000)).toEqual('0.977')
    expect(convertFileSize.from('KB').to('MB').decimals(1).convert(1000)).toEqual('1.0')
  });
})