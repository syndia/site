/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  defaultProps,
  mapProps,
  withHandlers,
  withState,
} from 'recompose'
import {
  map,
} from 'lodash'
import cx from 'classnames'

/**
 * Internal dependencies
 */
import {
  withCollectionState,
  withImagePreload,
} from '../../../helpers'

/**
 * Module dependencies
 */
import Lightbox from '../Lightbox'
import GalleryItem from './Item'

/**
 * Style dependencies
 */
import styles from './index.css'

const createImagesList = ( { images, gap, height, openLightbox } ) => map( images, ( image, index ) => (
  <GalleryItem
    key={ index }
    index={ index }
    item={ image }
    gap={ gap }
    height={ height }
    openLightbox={ openLightbox }
  />
) )

const Gallery = ( {
  currentItem, images,
  closeLightbox, lightboxState,
  getNextItem, getPreviousItem, getItem,
  handleClickItem,
  showThumbnails,
  className, ...rest
} ) => (
  <section
    ref={ index => this.gallery = index }
    className={ className }
  >
    <div className={ styles.collection }>
      { createImagesList( { images, ...rest } ) }
    </div>
    <Lightbox
      currentImage={ currentItem }
      images={ images }
      isOpen={ lightboxState.isOpen }
      onClickImage={ handleClickItem }
      onClickNext={ getNextItem }
      onClickPrevious={ getPreviousItem }
      onClickThumbnail={ getItem }
      onClose={ closeLightbox }
      showThumbnails={ showThumbnails }
      showCloseButton
    />
  </section>
)

export default compose(
  withImagePreload,
  withCollectionState,

  // Lightbox state
  withState( 'lightboxState', 'setLightboxState', { isOpen: false, isOpening: false, timeout: null } ),

  defaultProps( {
    gap: { column: 0.5, row: 0.5, unit: 'rem' },
  } ),
  mapProps( ( {
    className,
    ...rest,
  } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.gallery ]: true,
    } )

    return {
      ...rest,
      className: classes,
    }
  } ),

  withHandlers( {
    // Lightbox handlers
    openLightbox: ( { setCurrentItem, setLightboxState } ) => ( index, event ) => {
      event.preventDefault()
      setCurrentItem( index )

      const timeout = setTimeout( () => setLightboxState( { isOpen: true, isOpening: false } ), 400 )
      setLightboxState( { isOpen: true, isOpening: true, timeout } )
    },
    closeLightbox: ( { setCurrentItem, lightboxState, setLightboxState } ) => () => {
      setCurrentItem( 0 )

      clearTimeout( lightboxState.timeout )
      setLightboxState( { isOpen: false, isOpening: false, timeout: null } )
    },
  } ),

  withHandlers( {
    // Image handlers
    handleClickItem: ( { currentItem, setCurrentItem, images, getNextItem } ) => () => {
      if ( currentItem === images.length - 1 ) {
        return
      }
      getNextItem( { currentItem, setCurrentItem } )
    },
  } ),
  )( Gallery )
