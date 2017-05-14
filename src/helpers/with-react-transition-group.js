/**
 * External dependencies
 */
import {
  CSSTransitionGroup,
} from 'react-transition-group'
import {
  compose,
  defaultProps,
  mapProps,
} from 'recompose'
import cx from 'classnames'

export default compose(
  defaultProps( {
    component: 'div',
    duration: 200,
  } ),
  mapProps( ( { className, duration, transitionEnterTimeout, transitionLeaveTimeout, ...rest } ) => {
    const classes = cx( {
      [ className ]: className,
    } )

    return {
      ...rest,
      className: classes,
      transitionEnterTimeout: transitionEnterTimeout || duration,
      transitionLeaveTimeout: transitionLeaveTimeout || duration,
    }
  } ),
)( CSSTransitionGroup )