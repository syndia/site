import PropTypes  from 'prop-types'
import {
  compose, setDisplayName, getContext, withHandlers,
  componentFromProp, defaultProps, mapProps,
} from 'recompose'
import { omit } from 'lodash'

export default compose(
  setDisplayName( 'Link' ),

  defaultProps( { component: 'a' } ),

  getContext( { location: PropTypes.object } ),

  withHandlers( {
    onClick: ( { location, ...props } ) => event => {
      event.preventDefault()
      if ( location ) {
        location.navigate( props )
      }
    }
  } ),

  mapProps( props => omit( props, 'location' ) ),
)( componentFromProp( 'component' ) )
