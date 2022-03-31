import { ONE_KILOBYTE } from '.'

type Unit = 'GB' | 'MB' | 'KB' | 'B' | 'TB'

export class ConvertFileSize {
  private fromUnit: Unit = 'B'
  private toUnit: Unit = 'B'
  private readonly units: Unit[] = ['B', 'KB', 'MB', 'GB', 'TB']
  private postUnit = false
  private postDecimals = 0

  from (unit: Unit): this {
    this.fromUnit = unit

    return this
  }

  to (unit: Unit): this {
    this.toUnit = unit

    return this
  }

  decimals (num: number = this.postDecimals) {
    this.postDecimals = num
    return this
  }

  appendUnit () {
    this.postUnit = true
    return this
  }

  convert (size: number): string {
    const fromUnit = this.units.indexOf(this.fromUnit)
    const toUnit = this.units.indexOf(this.toUnit)
    let result: number | string = 0

    if (fromUnit < 0 || toUnit < 0) throw new Error('Error: Incorrect units')

    if (fromUnit === toUnit) {
      result = size
    } else {
      result = fromUnit < toUnit
        ? size / (Math.pow(ONE_KILOBYTE, (toUnit - fromUnit)))
        : size * (Math.pow(ONE_KILOBYTE, (fromUnit - toUnit)))
    }

    return this.postUnit
      ? `${result.toFixed(this.postDecimals)} ${this.toUnit}`
      : `${result.toFixed(this.postDecimals)}`
  }
}
