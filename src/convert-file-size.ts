import { ONE_KILOBYTE } from './constants'
import { FileSizeUnit } from './types'

export class ConvertFileSize {
  private fromUnit: FileSizeUnit = 'B'
  private toUnit: FileSizeUnit = 'B'
  private readonly units: FileSizeUnit[] = ['B', 'KB', 'MB', 'GB', 'TB']
  private postUnit = false
  private postDecimals = 0

  from (unit: FileSizeUnit): this {
    this.fromUnit = unit

    return this
  }

  to (unit: FileSizeUnit): this {
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

  convert (size: number, from = this.fromUnit): string {
    const fromUnit = this.units.indexOf(from)
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
