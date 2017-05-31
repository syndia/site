import { canUseDom } from '../dom'

import { BREAKPOINTS, SMALLER_THEN_480, LARGER_THEN_960 } from './constants'

export const getWindowInnerWidth = () => canUseDom() ? window.innerWidth : 769

export const isWithinBreakpoint = breakpoint => {
  const screenWidth = getWindowInnerWidth()

  if (!BREAKPOINTS.has(breakpoint)) {
    try {
      canUseDom() && window.console.warn('Undefined breakpoint used in `mobile-first-breakpoint`', breakpoint)
    } catch( err ) { /*...*/ }

    return undefined
  }

  return BREAKPOINTS.get(breakpoint)(screenWidth)
}

export const isMobile = () => isWithinBreakpoint(SMALLER_THEN_480)

export const isDesktop = () => isWithinBreakpoint(LARGER_THEN_960)
