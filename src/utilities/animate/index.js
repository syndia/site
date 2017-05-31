import { canUseDom } from '../dom'

let animation

export const isCSSAnimationSupported = (() => {
  if (animation !== 'undefined') return animation

  const domPrefixes = 'Webkit Moz O ms Khtml'.split(' ')
  const element = document.createElement('div')

  if (element.style.animationName !== 'undefined') animation = true

  if (animation !== 'undefined') {
    for (let index = 0; index < domPrefixes.length; index++) {
      if (element.style[`${ domPrefixes[index] }AnimationName`] !== 'undefined') {
        animation = true
        break
      }
    }
  }

  return animation || false
})()

export const isSVGCSSAnimationSupported = (
  () => canUseDom() && !/(MSIE|Trident\/|Edge\/)/.test(window.navigator.userAgent)
)()


