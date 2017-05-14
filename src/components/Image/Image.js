/**
 * External dependencies
 */
import React from 'react'
import {
  array,
  oneOfType,
  string,
} from 'prop-types'
import {
  compose,
  lifecycle,
  mapProps,
  setPropTypes,
  withHandlers,
  withState,
} from 'recompose'
import cx from 'classnames'

/**
 * Internal dependencies
 */
import {
  withLoading,
  withPlaceholdIt
} from '../../helpers'

const cache = new Map()
const sourceList = new Map()

const ImageElement = props => ( <img { ...props } /> )

export default compose(
  withLoading,
  withPlaceholdIt,
  withState( 'currentIndex', 'setCurrentIndex', 0 ),
  setPropTypes( {
    alt: string,
    src: oneOfType( [ string, array ] ),
  } ),
  mapProps( ( { className, index, ...rest } ) => {
    const classes = cx( {
      [ className ]: className
    } )

    return {
      ...rest,
      className: classes,
      key: index && `image-${ index }`
    }
  } ),
  withHandlers( {
    onLoad: ( { currentIndex, setIsLoaded } ) => () => {
      cache.set( sourceList.get( currentIndex ), true )

      if ( this.image ) {
        setIsLoaded( true )
      }
    },
    onError: ( { currentIndex }) => () => {
      cache.set( sourceList.get( currentIndex ), false )

     if ( ! this.image ) {
        return false
      }

      for ( var nextIndex = this.props.currentIndex + 1; nextIndex < sourceList.length; nextIndex++ ) {
        let source = sourceList.get( nextIndex )

        if ( ! ( source in cache ) ) {
          this.props.setCurrentIndex( nextIndex )
          break
        }

        if ( cache.has( source ) ) continue
      }

      if ( nextIndex === sourceList.length ) {
        return this.props.setIsLoaded( true )
      }

      this.props.setImage( this.props )
    },
    setImage: ( { currentIndex, onLoad, onError } ) => () => {
      this.image = new Image()
      this.image.src = sourceList.get( currentIndex )
      this.image.onload = onLoad
      this.image.onerror = onError
    },
    unsetImage: () => () => {
      delete this.image.onerror
      delete this.image.onload
      delete this.image.src
      delete this.image
    }
  } ),
  lifecycle( {
    componentWillMount() {
      sourceList.set( 'image', this.props.src )
    },
    componentDidMount() {
      for ( var key of sourceList.keys() ) {
        if ( ! ( sourceList.get( key ) in cache ) ) {
          break
        }

        if ( cache.has( sourceList.get( key ) ) ) {
          this.props.currentIndex = key
          this.props.isLoading = false
          this.props.isLoaded = true
          return true
        }
      }

      if ( sourceList.length ) {
        this.props.setCurrentIndex( 0 )
        this.props.setIsLoaded( false )
        this.props.setHasError( false )
      } else {
        this.props.setIsLoaded( false )
      }

      if ( this.props.isLoading ) {
        this.props.setImage()
      }
    },
    componentWillUnmount() {
      if ( this.image ) {
        this.props.unsetImage()
      }
    },
  } ),
)( ImageElement )
