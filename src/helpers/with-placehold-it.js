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
  mapProps( ( { src, format, size, height, width, ...rest } ) => {
    const imageHeight = size || height || width

    return {
      ...rest,
      src: src || `${ uri }/${ size || width }x${ imageHeight }.${ format }`,
      width: ! rest.sizes && width,
      height: ! rest.sizes && imageHeight,
    }
  } ),
)( InnerComponent )
