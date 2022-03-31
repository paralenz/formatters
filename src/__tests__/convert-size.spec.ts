import { ConvertFileSize } from '../convert-file-size'

describe('ConvertFileSize', () => {
  it('bytes->bytes', () => {
    expect(new ConvertFileSize().from('B').to('B').convert(1)).toEqual(1)
  });
  
  it('KB->KB', () => {
    expect(new ConvertFileSize().from('KB').to('KB').convert(1)).toEqual(1)
  });
  
  it('byte->KB', () => {
    expect(new ConvertFileSize().from('bytes').to('KB').convert(1000)).toEqual(1)
  });
  
  it('KB->MB', () => {
    expect(new ConvertFileSize().from('KB').to('MB').convert(1000)).toEqual(1)
  });

  it('MB->GB', () => {
    expect(new ConvertFileSize().from('MB').to('GB').convert(1000)).toEqual(1)
  });
  
  it('KB->bytes', () => {
    expect(new ConvertFileSize().from('KB').to('bytes').convert(1)).toEqual(1000)
  });
  
  it('MB->KB', () => {
    expect(new ConvertFileSize().from('MB').to('KB').convert(1)).toEqual(1000)
  });
  
  
  it('GB->MB', () => {
    expect(new ConvertFileSize().from('GB').to('MB').convert(1)).toEqual(1000)
  });
  
  it('GB->KB', () => {
    expect(new ConvertFileSize().from('GB').to('KB').convert(1)).toEqual(1e+6)
  });
  
  it('GB->byte', () => {
    expect(new ConvertFileSize().from('GB').to('bytes').convert(1)).toEqual(1e+9)
  });
  
  

  
})