export const SMALLER_THEN_480 = '<480px'
export const SMALLER_THEN_660 = '<660px'
export const SMALLER_THEN_960 = '<960px'
export const LARGER_THEN_480 = '>480px'
export const LARGER_THEN_660 = '>660px'
export const LARGER_THEN_960 = '>960px'
export const BETWEEN_480_660 = '480px-660px'
export const BETWEEN_660_960 = '660px-960px'
export const BETWEEN_480_960 = '480px-960px'

export const BREAKPOINTS = new Map([
  [SMALLER_THEN_480, screenWidth => screenWidth <= 480],
  [SMALLER_THEN_660, screenWidth => screenWidth <= 660],
  [SMALLER_THEN_960, screenWidth => screenWidth <= 960],
  [LARGER_THEN_480, screenWidth => screenWidth > 480],
  [LARGER_THEN_660, screenWidth => screenWidth > 660],
  [LARGER_THEN_960, screenWidth => screenWidth > 960],
  [BETWEEN_480_660, screenWidth => screenWidth > 480 && screenWidth <= 660],
  [BETWEEN_660_960, screenWidth => screenWidth > 660 && screenWidth <= 960],
  [BETWEEN_480_960, screenWidth => screenWidth > 480 && screenWidth <= 960],
])
