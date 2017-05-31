/**
 * Exposes number format capability through i18n mixin
 *
 * @copyright Copyright (c) 2013 Kevin van Zonneveld (http://kvz.io) and Contributors (http://phpjs.org/authors).
 * @license See CREDITS.md
 * @see https://github.com/kvz/phpjs/blob/ffe1356af23a6f2512c84c954dd4e828e92579fa/functions/strings/number_format.js
 */

export const numberFormat = (number, decimals, decimalPoint, thousandsSeperator) => {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')

  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = (typeof thousandsSeperator === 'undefined') ? ',' : thousandsSeperator
  const dec = (typeof decimalPoint === 'undefined') ? '.' : decimalPoint
  let s = ''

  const toFixedFix = (n, prec) => {
    const k = Math.pow(10, prec)

    return String((Math.round(n * k) / k).toFixed(prec))
  }

  s = (prec ? toFixedFix(n, prec) : String(Math.round(n))).split('.')

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }

  return s.join(dec)
}
