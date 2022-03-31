import { ConvertFileSize } from '../convert-file-size'

describe('ConvertFileSize', () => {
  it('bytes->bytes', () => {
    expect(new ConvertFileSize().from('B').to('B').convert(1)).toEqual('1')
  });
  
  it('KB->KB', () => {
    expect(new ConvertFileSize().from('KB').to('KB').convert(1)).toEqual('1')
  });
  
  it('byte->KB', () => {
    expect(new ConvertFileSize().from('B').to('KB').convert(1000)).toBe('1')
  });
  
  it('KB->MB', () => {
    expect(new ConvertFileSize().from('KB').to('MB').convert(1000)).toEqual('1')
  });

  it('MB->GB', () => {
    expect(new ConvertFileSize().from('MB').to('GB').convert(1000)).toEqual('1')
  });
  
  it('KB->bytes', () => {
    expect(new ConvertFileSize().from('KB').to('B').convert(1)).toEqual('1024')
  });
  
  it('MB->KB', () => {
    expect(new ConvertFileSize().from('MB').to('KB').convert(1)).toEqual('1024')
  });
  
  
  it('GB->MB', () => {
    expect(new ConvertFileSize().from('GB').to('MB').convert(1)).toEqual('1024')
  });
  
  it('GB->KB', () => {
    expect(new ConvertFileSize().from('GB').to('KB').convert(1)).toEqual('1048576')
  });
  
  it('GB->byte', () => {
    expect(new ConvertFileSize().from('GB').to('B').convert(1)).toEqual('1073741824')
  });

  it('should should append the unit', () => {
    expect(new ConvertFileSize().from('KB').to('MB').appendUnit().convert(1000)).toEqual('1 MB')
  });

  it('should should append X decimals', () => {
    expect(new ConvertFileSize().from('KB').to('MB').decimals(3).convert(1000)).toEqual('0.977')
    expect(new ConvertFileSize().from('KB').to('MB').decimals(1).convert(1000)).toEqual('1.0')
  });
})