/**
 * External dependencies
 */
import {
  compose,
  defaultProps as setDefaultProps,
  mapProps,
  withHandlers,
} from 'recompose'
import {
  noop,
  omit,
} from 'lodash'
import warning from 'warning'

const getScrollTop = () =>
  document.documentElement.scrollTop || document.body.scrollTop
const setScrollTop = position =>
  document.documentElement.scrollTop = document.body.scrollTop = position
const getOffsetTop = element => {
  const { top } = element.getBoundingClientRect()
  return top + getScrollTop()
}

const easeOutQuad = ( x, t, b, c, d ) => {
  return -c * ( t /= d ) * (  t - 2 ) + b
}

const scrollTo = ( element, { offset, duration, easing } ) => {
  const start = getScrollTop()
  const to = getOffsetTop( element ) + offset
  const change = to - start
  const increment = 20

  const animate = elapsedTime => {
    const elapsed = elapsedTime + increment
    const position = easing( null, elapsed, start, change, duration )

    setScrollTop( position )

    if ( elapsed < duration ) {
      setTimeout( () => { animate( elapsed ) }, increment )
    }
  }

  animate( 0 )
}

const animateScroll = ( id, animate ) => {
  const element = id ? document.getElementById( id ) : document.body
  warning(element, `Cannot find element: #${ id }`);
  scrollTo( element, animate )
}

const defaultProps = setDefaultProps( {
  to: '',
  afterAnimation: noop,
  beforeAnimation: noop,
  animate: {
    offset: 0,
    duration: 500,
    easing: easeOutQuad,
  }
} )

const onClick = ( { animate, beforeAnimation, afterAnimation, to } ) => event => {
  beforeAnimation( event )
  event.preventDefault()
  animateScroll( to, animate )
  afterAnimation()
}

export default compose(
  defaultProps,
  withHandlers( { onClick } ),
  mapProps( props => omit( props, 'animate', 'afterAnimation', 'beforeAnimation' ) ),
  mapProps( ( { to, ...rest } ) => ( { ...rest, to: `#${ to.replace( /^#/, '' ) }` } ) ),
)
