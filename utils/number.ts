function formatter(options: Intl.NumberFormatOptions) {
  return Intl.NumberFormat('en-US', options).format;
}

export function toCurrency(value: number, fractionDigits: number = 2) {
  return formatter({
    currency: 'USD',
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
    style: 'currency',
  })(value);
}

export function toPercent(value: number, fractionDigits: number = 2) {
  return formatter({
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
    style: 'percent',
  })(value);
}
