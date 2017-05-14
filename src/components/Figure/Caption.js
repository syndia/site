/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'

const Caption = ( { children, ...rest } ) => (
  <figcaption { ...rest }>
    { children }
  </figcaption>
)

export default Caption
