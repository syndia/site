export const AUD = 'AUD'
export const BRL = 'BRL'
export const CAD = 'CAD'
export const EUR = 'EUR'
export const GBP = 'GBP'
export const JPY = 'JPY'
export const USD = 'USD'


export const CURRENCIES = new Map([
  [AUD, { symbol: '$', grouping: ',', decimal: '.', precision: 2 }],
  [BRL, { symbol: 'R$', grouping: ',', decimal: '.', precision: 2 }],
  [CAD, { symbol: 'C$', grouping: ',', decimal: '.', precision: 2 }],
  [EUR, { symbol: '€', grouping: '.', decimal: ',', precision: 2 }],
  [GBP, { symbol: '£', grouping: ',', decimal: '.', precision: 2 }],
  [JPY, { symbol: '¥', grouping: ',', decimal: '.', precision: 0 }],
  [USD, { symbol: 'S', grouping: ',', decimal: '.', precision: 2 }],
])
