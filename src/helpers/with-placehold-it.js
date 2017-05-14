/**
 * External dependencies
 */
import {
  compose,
  defaultProps as setDefaultProps,
  getDisplayName,
  mapProps,
  setDisplayName,
} from 'recompose'

const uri = 'https://placehold.it'

const defaultProps = setDefaultProps( {
  format: 'png',
  width: '150',
} )

export default InnerComponent => compose(
  setDisplayName( `withPlaceholdIt(${ getDisplayName( InnerComponent )}` ),
  defaultProps,
  mapProps( ( { source, format, height, width, ...rest } ) => {
    const imageHeight = height || width

    return {
      ...rest,
      src: source || `${ uri }/${ width }x${ imageHeight }.${ format }`,
      width: ! rest.sizes && width,
      height: ! rest.sizes && imageHeight,
    }
  } ),
)( InnerComponent )
