/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import Image from '../Image'

/**
 * Module dependencies
 */
import Caption from './Caption'

export {
  Caption,
}

const Figure = ( { children, captionProps, imageProps, ...rest } ) => (
  <figure { ...rest }>
    { children }
    { imageProps && <Image { ...imageProps } /> }
    { captionProps && <Caption { ...captionProps } /> }
  </figure>
)

export default Figure
