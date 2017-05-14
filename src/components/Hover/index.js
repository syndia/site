/**
 * External dependencies
 */
import { Children, cloneElement } from 'react'
import {
  compose,
  withHandlers,
  withState,
} from 'recompose'

const HoverComponent = ( { onMouseLeave, onMouseMove, children } ) => cloneElement(
  Children.only( children, { onMouseLeave, onMouseMove } ),
)

export default compose(
  withState( 'isHovered', 'setIsHovered', false ),

  withHandlers( {
    onMouseMove: ( { setIsHovered } ) => () => setIsHovered( true ),
    onMouseLeave: ( { setIsHovered } ) => () => setIsHovered( false ),
  } ),
)( HoverComponent )
