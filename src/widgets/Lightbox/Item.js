import React from 'react'

import { Figure } from '../../internals/Figure'

import styles from './index.css'

export const LighboxImage = ({ currentImage, images, onImageClick }) => {
  if (!images || !images.length) return null

  const image = images[currentImage]
  let srcset
  let sizes

  if (images.scrset) {
    srcset = image.srcset.join()
    sizes = '100vw'
  }

  return (
    <Figure className={ styles.figure }>
      <img
        className={ styles.image }
        onClick={ Boolean(onImageClick) && onImageClick }
        sizes={ sizes }
        alt={ image.alt }
        src={ image.src }
        srcSet={ srcset }
      />
    </Figure>
  )
}
