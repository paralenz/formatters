type Unit = 'GB' | 'MB' | 'KB' | 'bytes'| 'TB'

export class ConvertFileSize {
  private fromUnit: Unit = 'bytes'
  private toUnit: Unit = 'bytes'
  private readonly units: Unit[] = ['bytes', 'KB', 'MB', 'GB']

  from (unit: Unit): this {
    this.fromUnit = unit

    return this
  }

  to (unit: Unit): this {
    this.toUnit = unit

    return this
  }

  toGb () { return this.to('GB') }
  toMm () { return this.to('MB') }
  toKk () { return this.to('KB') }
  toBytes () { return this.to('bytes') }
  fromGb () { return this.from('GB') }
  fromMb () { return this.from('MB') }
  fromKb () { return this.from('KB') }
  fromBytes () { return this.from('bytes') }

  convert (size: number) {
    const fromIndex = this.units.indexOf(this.fromUnit)
    const toIndex = this.units.indexOf(this.toUnit)

    if (fromIndex === toIndex) {
      return size
    }
  }
}
