export const getScrollTop = () => document.documentElement.scrollTop || document.body.scrollTop

export const setScrollTop = position => document.documentElement.scrollTop = document.body.scrollTop = position

export const getOffsetTop = element => {
  const { top } = element.getBoundingClientRect()
  return top + getScrollTop()
}
