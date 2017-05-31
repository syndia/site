import React from 'react'
import { compose, lifecycle, mapProps, setDisplayName, withHandlers, withProps } from 'recompose'
import cx from 'classnames'

import { loadImage } from '../../utilities/image'

import { Dialog } from '../Dialog'

import { Header } from './Header'
import { LighboxImage } from './Item'
import { NextButton, PreviousButton } from './Buttons'

import styles from './index.css'

const HOC = compose(
  setDisplayName('Lightbox'),

  withProps({ isFullScreen: true }),

  mapProps(props => ({
    ...props,
    showNextButton: props.currentImage < props.images.length - 1,
    showPreviousButton: props.currentImage > 0,
    preloadNextImage: true,
  })),

  withHandlers({
    handleSuccess: ({ onSuccess }) => () => {
      if (onSuccess) { onSuccess() }
    },
    handleError: ({ onError }) => () => {
      if (onError) { onError() }
    },
  }),

  withHandlers({
    preloadImage: ({ images, handleSuccess, handleError }) => index => {
      const image = images[index]

      if (!image) return null

      const promise = loadImage(image.src || image)

      return promise
        .then(handleSuccess, handleError)
        .catch(error => console.warn(error.message)) // eslint-disable-line no-console
    },

    gotoNextImage: ({ currentImage, images, onNextImageClick }) => event => {
      if (currentImage === images.length - 1) return null

      if (event) {
        event.preventDefault()
        event.stopPropagation()
      }

      if (onNextImageClick) onNextImageClick(event)
    },

    gotoPreviousImage: ({ currentImage, onPreviousImageClick }) => event => {
      if (currentImage === 0) return null

      if (event) {
        event.preventDefault()
        event.stopPropagation()
      }

      if (onPreviousImageClick) onPreviousImageClick(event)
    }
  }),

  lifecycle({
    componentWillReceiveProps(nextProps) {
      // preload images
      if (nextProps.preloadNextImage) {
        const currentIndex = this.props.currentImage
        const nextIndex = nextProps.currentImage + 1
        const previousIndex = nextProps.currentImage - 1
        let preloadIndex

        if (currentIndex && nextProps.currentImage > currentIndex) {
          preloadIndex = nextIndex
        } else if (currentIndex && nextProps.currentImage < currentIndex) {
          preloadIndex = previousIndex
        }

        if (preloadIndex) {
          this.props.preloadImage(preloadIndex)
        } else {
          this.props.preloadImage(previousIndex)
          this.props.preloadImage(nextIndex)
        }
      }
    }
  }),
)

const Component = ({
  gotoNextImage, gotoPreviousImage, showNextButton, showPreviousButton,
  isOpen, onClose, showCloseButton, className, ...rest,
}) => (
  <Dialog
    { ...rest }
    className={ cx({ [className]: className, [styles.root]: true }) }
    isVisible={ isOpen }
    onClose={ onClose }
  >
    <Header onClose={ onClose } showCloseButton={ showCloseButton } />

    <LighboxImage { ...rest } />

    { showNextButton &&
      <NextButton
        onClick={ gotoNextImage }
        className={ styles.nextButton }
      />
    }
    { showPreviousButton &&
      <PreviousButton
        onClick={ gotoPreviousImage }
        className={ styles.previousButton }
       />
    }
  </Dialog>
)

export const Lightbox = HOC(Component)
