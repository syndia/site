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
import Lightbox from '../Lightbox'
import GalleryItem from './Item'

/**
 * Style dependencies
 */
import styles from './index.css'

const createItemsList = ( { items, gap, height, openLightbox } ) => map( items, ( item, index ) => (
  <GalleryItem
    key={ index }
    index={ index }
    item={ item }
    gap={ gap }
    height={ height }
    openLightbox={ openLightbox }
  />
) )

const Gallery = ( {
  currentItem, items,
  closeLightbox, lightboxState,
  gotoNextItem, gotoPreviousItem, gotoItem,
  handleClickItem,
  showThumbnails,
  className, ...rest
} ) => (
  <section
    ref={ index => this.gallery = index }
    className={ className }
  >
    <div className={ styles.collection }>
      { createItemsList( { items, ...rest } ) }
    </div>
    <Lightbox
      currentImage={ currentItem }
      images={ items }
      isOpen={ lightboxState.isOpen }
      onClickImage={ handleClickItem }
      onClickNext={ gotoNextItem }
      onClickPrevious={ gotoPreviousItem }
      onClickThumbnail={ gotoItem }
      onClose={ closeLightbox }
      showThumbnails={ showThumbnails }
      showCloseButton
    />
  </section>
)

export default compose(
  // Lightbox state
  withState( 'lightboxState', 'setLightboxState', { isOpen: false, isOpening: false, timeout: null } ),

  // Collection state
  withState( 'currentItem', 'setCurrentItem', 0 ),

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

    // Collection handlers
    gotoPreviousItem: ( { currentItem, setCurrentItem } ) => () => setCurrentItem( currentItem - 1 ),
    gotoNextItem: ( { currentItem, setCurrentItem } ) => () => setCurrentItem( currentItem + 1 ),
    gotoItem: ( { setCurrentItem } ) => index => setCurrentItem( index ),
  } ),

  withHandlers( {
    // Image handlers
    handleClickItem: ( { currentItem, setCurrentItem, items, gotoNextItem } ) => () => {
      if ( currentItem === items.length - 1 ) {
        return
      }
      gotoNextItem( { currentItem, setCurrentItem } )
    },
  } ),
  )( Gallery )
