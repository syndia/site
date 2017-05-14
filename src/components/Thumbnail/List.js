/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  setPropTypes,
} from 'recompose'

/**
 * Module dependencies
 */
import Thumbnail from './Item'

const ThumbnailList = ( { className, currentImage, images, onClickThumbnail } ) => (
  <ul className={ className }>
    { images.map( ( image, index ) => (
      <Thumbnail
        { ...image }
        active={ index === currentImage }
        component="li"
        index={ index }
        key={ `thumbnail-${ index }` }
        onClick={ onClickThumbnail }
      />
    ) ) }
  </ul>
)

export default compose(
  setPropTypes( {
    currentImage: PropTypes.number,
    images: PropTypes.array,
    onClickThumbnail: PropTypes.func.isRequired,
  } ),
)( ThumbnailList )
