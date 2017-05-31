import React from 'react'
import { compose, defaultProps, mapProps, setDisplayName, withHandlers, withState } from 'recompose'
import cx from 'classnames'

import { Lightbox } from '../Lightbox'

import { Tile } from './Item'

import styles from './index.css'

const createImageList = ({ images, ...rest }) => images && images.map((image, index) =>
  <Tile
    { ...rest }
    image={ image }
    key={ `gallery-item-${ index }` }
    index={ index }
  />
)

const HOC = compose(
  setDisplayName('ImageGallery'),

  withState('currentImage', 'setCurrentImage', 0),

  withHandlers({
    getPreviousImage: ({ currentImage, setCurrentImage }) => () => setCurrentImage(currentImage -1),
    getNextImage: ({ currentImage, setCurrentImage }) => () => setCurrentImage(currentImage + 1),
    getImage: ({ setCurrentImage }) => index => setCurrentImage(index),
  }),

  withState('lightboxState', 'setLightboxState', { isOpen: false, isOpening: false, timeout: null }),

  defaultProps({ gap: { column: 0.5, row: 0.5, unit: 'rem' } }),

  mapProps(({ className, ...rest }) => ({
    ...rest,
    className: cx({ [className]: className, [styles.root]: true }),
  })),

  withHandlers({
    //Lightbox handlers
    openLightbox: ({ setCurrentImage, setLightboxState }) => (index, event) => {
      if (event) event.preventDefault()
      setCurrentImage( index )

      const timeout = setTimeout(() => setLightboxState({ isOpen: true, isOpening: false }), 400)
      setLightboxState({ isOpen: true, isOpening: true, timeout })
    },

    closeLightbox: ({ setCurrentImage, lightboxState, setLightboxState }) => () => {
      setCurrentImage(0)

      clearTimeout( lightboxState.timeout)
      setLightboxState({ isOpen: false, isOpening: false, timeout: null })
    }
  }),

  withHandlers({
    handleImageClick: ({ currentImage, setCurrentImage, images, getNextImage }) => () => {
      if (currentImage === images.length -  1) return null

      getNextImage({ currentImage, setCurrentImage })
    }
  }),
)

const Component = ({
  currentImage, images,
  closeLightbox, lightboxState,
  getNextImage, getPreviousImage, getImage,
  handleImageClick, showThumbnails,
  className, ...rest,
}) => (
  <div ref={ index => this.gallery = index } className={ className }>
    <div className={ styles.root }>
      { createImageList({ images, ...rest }) }
    </div>
    <Lightbox
      currentImage={ currentImage }
      images={ images }
      isOpen={ lightboxState.isOpen }
      onImageClick={ handleImageClick }
      onNextImageClick={ getNextImage }
      onPreviousImageClick={ getPreviousImage }
      onThumbnailClick={ getImage }
      onClose={ closeLightbox }
      showThumbnails={ showThumbnails }
      showCloseButton
    />
  </div>
)

export const ImageGallery = HOC(Component)
