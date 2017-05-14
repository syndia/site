/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  array,
  arrayOf,
  element,
  number,
  oneOfType,
  shape,
  string,
} from 'prop-types'
import {
  compose,
  lifecycle,
  setPropTypes,
  withHandlers,
  withProps,
} from 'recompose'

/**
 * Internal dependencies
 */
import Dialog from '../Dialog'
import Figure from '../Figure'
import Image from '../Image'

/**
 * Module dependencies
 */
import Header from './Header'
import NextButton from './NextButton'
import PreviousButton from './PreviousButton'

/**
 * Style dependencies
 */
import styles from './index.css'

const ImageCollection = ( {
  currentImage,
  images,
  onClickImage,
} ) => {
  if ( ! images || ! images.length ) {
    return null
  }

  const image = images[ currentImage ]

  let srcset
  let sizes

  if ( image.srcset ) {
    srcset = image.srcset.join()
    sizes = '100vw'
  }

  return (
    <Figure className={ styles.figure }>
      <Image
        className={ styles.image }
        onClick={ Boolean( onClickImage ) && onClickImage }
        sizes={ sizes }
        alt={ image.alt }
        src={ image.src }
        srcSet={ srcset }
      />
    </Figure>
  )
}

const Lightbox = ( {
  isOpen,
  gotoNext, gotoPrevious,
  onClose, showCloseButton,
  ...rest
} ) => (
  <Dialog
    { ...rest }
    className={ styles.lightbox }
    isVisible={ isOpen }
    onClose={ onClose }
  >
    <Header
      onClose={ onClose }
      showCloseButton={ showCloseButton }
    />

    <ImageCollection { ...rest } />

    <NextButton white onClick={ gotoNext } className={ styles.nextButton } />
    <PreviousButton white onClick={ gotoPrevious } className={ styles.previousButton } />
  </Dialog>
)

export default compose(
  setPropTypes( {
    currentImage: number,
    images: arrayOf(
      shape( {
        src: string.isRequired,
        srcset: array,
        caption: oneOfType( [ string, element ] ),
        thumbnail: string,
      } ),
    ).isRequired,
  } ),
  withProps( {
    isFullScreen: true,
  } ),
  withHandlers( {
    preloadImage: ( { images } ) => index => {
      const image = images[ index ]

      if ( ! image ) {
        return null
      }

      const img = new Image()
      img.src = image.src

      if ( image.srcset ) {
        img.srcset = image.srcset.join()
      }
    },

    gotoNext: ( { currentImage, images, onClickNext } ) => event => {
      if ( currentImage === images.length - 1) {
        return null
      }

      if ( event ) {
        event.preventDefault()
        event.stopPropagation()
      }

      if ( onClickNext ) {
        onClickNext()
      }
    },

    gotoPrevious: ( { currentImage, onClickPrevious } ) => event => {
      if ( currentImage === 0 ) {
        return null
      }

      if ( event ) {
        event.preventDefault()
        event.stopPropagation()
      }

      if ( onClickPrevious ) {
        onClickPrevious()
      }
    }
  } ),

  lifecycle( {
    componentWillReceiveProps( nextProps ) {
      // preload images
      if ( nextProps.preloadNextImage ) {
        const currentIndex = this.props.currentImage
        const nextIndex = nextProps.currentImage + 1
        const previousIndex = nextProps.currentImage - 1
        let preloadIndex

        if ( currentIndex && nextProps.currentImage > currentIndex ) {
          preloadIndex = nextIndex
        } else if ( currentIndex && nextProps.currentImage < currentIndex ) {
          preloadIndex = previousIndex
        }

        if ( preloadIndex ) {
          this.props.preloadImage( preloadIndex )
        } else {
          this.props.preloadImage( previousIndex )
          this.props.preloadImage( nextIndex )
        }
      }
    },
  } ),
)( Lightbox )
