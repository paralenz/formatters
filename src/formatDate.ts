export const formatDate = (
  date: Date,
  laguageCode = 'en',
  options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }
): string => {
  return new Intl.DateTimeFormat(laguageCode, options).format(date)
}
