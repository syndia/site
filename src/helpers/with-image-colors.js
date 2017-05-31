/**
 * External dependencies
 */
import {
  compose,
  mapProps,
  withHandlers,
} from 'recompose'
import {
  omit,
} from 'lodash'

const PALETTE_SIZE = 5

const getContext = ( width, height ) => {
  const canvas = document.createElement( 'canvas' )
  canvas.setAttribute( 'width',  width / 10 )
  canvas.setAttribute( 'height', height / 10 )
  return canvas.getContext( '2d' )
}

const makeRGB = name => `rgb(${ name })`

const mapPalette = palette => {
  const arr = []
  for ( var prop in palette ) {
    arr.push( formatPaletteObject( prop, palette[ prop ] ) )
  }
  arr.sort( ( a, b ) => ( b.count - a.count ) )
  return arr
}

const formatPaletteObject = ( a, b ) => ( { name: makeRGB( a ), count: b } )

const fitPalette = ( arr, fitSize ) => {
  if ( arr.length > fitSize ) {
    return arr.slice( 0, fitSize )
  }

  for ( let i = arr.length -1; i < fitSize -1; i++ ) {
    arr.push( formatPaletteObject( '0,0,0', 0 ) )
    return arr
  }
}

export default compose(
  withHandlers( {
    onLoaded: ( { paletteSize, onColorSuccess } ) => data => {
      const exclude = []
      let colorCounts = {}
      let rgbString = ''
      let rgb = []

      paletteSize = paletteSize || PALETTE_SIZE

      let index = 0
      for (; index < data.length; index += 4 ) {
        rgb[ 0 ] = data[ index ]
        rgb[ 1 ] = data[ index + 1 ]
        rgb[ 2 ] = data[ index + 2 ]
        rgbString = rgb.join( ',' )

        if ( rgb.indexOf( undefined ) !== -1 || data[ index + 3 ] === 0 ) {
          continue
        }

        if ( exclude.indexOf( makeRGB( rgbString ) ) === -1 ) {
          if ( rgbString in colorCounts ) {
            colorCounts[ rgbString ] = colorCounts[ rgbString ] + 1
          } else {
            colorCounts[ rgbString ] = 1
          }
        }
      }

      if ( onColorSuccess ) {
        const palette = fitPalette( mapPalette( colorCounts ), paletteSize + 1  )
        onColorSuccess( {
          dominant: palette[ 0 ].name,
          secondary: palette[ 1 ].name,
          palette: palette.map( c => c.name ).slice( 1 )
        } )
      }
    } 
  } ),

  withHandlers( {
    onSuccess: ( { imageSource, onLoaded } ) => imageObject => {
      const width = imageObject.naturalWidth || 1000
      const height = imageObject.naturalHeight || 1000
      const context = getContext( width, height )
      context.drawImage( imageObject, 0, 0 )

      const imageData = context.getImageData( 0, 0, width, height )
      onLoaded( imageData.data )

      imageObject.src = imageSource
    },
  } ),

  mapProps( props => omit( props, 'onLoaded' ) ),
)
