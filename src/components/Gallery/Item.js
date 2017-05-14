/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  mapProps,
} from 'recompose'
import cx from 'classnames'

/**
 * Internal dependencies
 */
import Image from '../Image'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  mapProps( ( { className, ...rest } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.item ]: true,
    } )

    return {
      ...rest,
      className: classes,
    }
  } ),
)

const GalleryItem = ( { className, gap, height, index, item, openLightbox } ) => {
  return (
    <a
      href={ item.src }
      onClick={ event => openLightbox( index, event ) }
      className={ className }
      style={ {
        height,
        padding: `${ gap.column }${ gap.unit } ${ gap.row }${ gap.unit }`,
      } }
    >
      <Image
        key={ `image-${ index }-${ item.src }` }
        source={ item.thumbnail }
        index={ index }
        height={ height }
        style={ { border: 0, display: 'block', height: 'auto', maxWidth: '100%', width: 'auto' } }
      />
    </a>
  )
}

export default enhance( GalleryItem )
