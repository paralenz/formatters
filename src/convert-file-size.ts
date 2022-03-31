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

  convert (size: number) {
    const fromUnit = this.units.indexOf(this.fromUnit)
    const toUnit = this.units.indexOf(this.toUnit)
    let result: number | string = 0

    if (fromUnit < 0 || toUnit < 0) throw new Error('Error: Incorrect units')
    if (fromUnit === toUnit) return size

    result = fromUnit < toUnit
      ? size / (Math.pow(this.baseSize, (toUnit - fromUnit)))
      : size * (Math.pow(this.baseSize, (fromUnit - toUnit)))

    return result
    }
  }
}
