/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  string,
} from 'prop-types'
import {
  compose,
  mapProps,
  setPropTypes,
} from 'recompose'
import cx from 'classnames'

/**
 * Internal dependencies
 */

const ImageElement = ( { hasError, ...rest } ) => {
  if ( hasError ) {
    return null
  }

  return (
    <img { ...rest } />
  )
}

export default compose(
  setPropTypes( {
    alt: string,
    src: string,
    srcSet: string,
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
)( ImageElement )
