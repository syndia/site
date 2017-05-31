import { numberFormat } from '../formatting/number'

import { CURRENCIES } from './constants'

export { AUD, BRL, CAD, EUR, GBP, JPY, USD } from './constants'

export const getCurrencyDefaults = code => CURRENCIES.get(code) || null

export const formatCurrency = (number, code, options = {}) => {
  const currencyDefaults = getCurrencyDefaults(code)

  if (!currencyDefaults || isNaN(number)) return null

  const { decimal, grouping, precision, symbol } = { ...currencyDefaults, ...options }
  const sign = number < 0 ? '-' : ''
  const value = numberFormat(Math.abs(number), {
    decimals: precision, thousandsSeperator: grouping, decimalPoint: decimal,
  })

  return `${ sign }${ symbol}${ value }`
}