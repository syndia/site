/**
 * External dependencies
 */
import {
  compose,
  mapProps,
  withHandlers,
  withState,
} from 'recompose'
import {
  memoize,
  omit,
} from 'lodash'

const createHoverProps = memoize( onMouseMove => memoize( onMouseLeave => ( {
  onMouseEnter: onMouseMove, onMouseMove, onMouseLeave,
} ) ) )

export default InnerComponent => compose(
  withState( 'isHovered', 'setIsHovered', false ),
  withHandlers( {
    onMouseMove: ( { setIsHovered, onMouseMove } ) => event => {
      setIsHovered( true )
      if ( onMouseMove ) {
        onMouseMove( event )
      }
    },
    onMouseLeave: ( { setIsHovered, onMouseLeave } ) => event => {
      setIsHovered( false )
      if ( onMouseLeave ) {
        onMouseLeave( event )
      }
    }
  } ),
  mapProps( props => omit( props, 'setIsHovered' ) ),
  mapProps( ( {
    onMouseMove,
    onMouseLeave,
   ...rest,
  } ) => ( {
    ...rest,
    hoverProps: createHoverProps( onMouseMove )( onMouseLeave )
  } ) ),
)( InnerComponent )
