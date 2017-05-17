/**
 * External dependencies
 */
import {
  branch,
  compose,
  lifecycle,
  mapProps,
  renderComponent,
  withHandlers,
  withState,
} from 'recompose'
import {
  isArray,
} from 'lodash'

/**
 * Internal dependencies
 */
import withLoadingState from './with-loading-state'

const hash = {}
const cache = []

const add = source => {
  if ( ! hash[ source ] ) {
    hash[ source ] = new Image()

    hash[ source ].crossOrigin = 'Anonymous'
    hash[ source ].src = source

    cache.push( hash[ source ] )
  }
  return hash[ source ]
}

const getImage = source => add( source )

const loadImage = source => {
  const image = getImage( source )

  return new Promise( ( resolve, reject ) => {
    const handleSuccess = () => { resolve( image ) }
    const handleError = () => {
      reject( new Error( `failed to preload ${ source }` ))
    }

    if ( image.complete ) {
      // image is loaded

      if ( image.naturalWidth && image.naturalHeight ) {
        handleSuccess()
      } else {
        let counter = 1
        const checkDimensions = setInterval( () => {
          if ( image.naturalWidth && image.naturalHeight ) {
            clearInterval( checkDimensions )
            handleSuccess()
          }
          if ( counter === 3 ) {
            clearInterval( checkDimensions )
            handleError()
          }
          counter++
        }, 50 )
      }
    } else {
      image.addEventListener( 'load', handleSuccess, false )
      image.addEventListener( 'error', handleError, false )
    }
  } )
}

export default compose(
  withLoadingState,
  mapProps( ( { isLoaded, onLoad, ...rest } ) => ( {
    ...rest,
    isReady: isLoaded,
    onSuccess: onLoad,
  } ) ),

  withState( 'isMounted', 'setIsMounted', false ),

  branch(
    ( { loadingIndicator, isReady } ) => loadingIndicator && ! isReady,
    ( { loadingIndicator } ) => renderComponent( loadingIndicator ),
  ),

  withHandlers( {
    loadImages: () => sources => {
      const collection = isArray( sources ) ? sources : [ sources ]
      const promises = collection.map( source => loadImage( source.src || source ) )
      return Promise.all( promises ).catch( error => {
        console.warn( error.message ) // eslint-disable-line no-console
      } )
    },

    handleSuccess: ( { isReady, isMounted, onSuccess } ) => () => {
      if ( isReady || ! isMounted ) { return }
      if ( onSuccess ) { onSuccess() }
    },
    handleError: ( { isMounted, hasError, onError } ) => () => {
      if ( ! hasError || ! isMounted ) { return }
      if ( onError ) { onError() }
    },
  } ),

  lifecycle( {
    componentDidMount() {
      this.props.setIsMounted( true )
      if ( ! this.props.isReady ) {
        this.props.loadImages( this.props.images )
          .then( this.props.handleSuccess, this.props.handleError )
      }
    },

    componentWillUnmount() {
      this.props.setIsMounted( false )
    }
  } ),
)
