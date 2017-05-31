/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  setDisplayName,
  withProps,
} from 'recompose'

/**
 * Internal dependencies
 */
import {
  XIcon,
} from '../../Svg/Icon'
import Button from '../../Button'

export default compose(
  setDisplayName( 'LightboxCloseButton' ),
  withProps( {
    svg: true,
    transparent: true,
    children: <XIcon size={ 24 } strokeWidth={ 1 } />,
  } ),
)( Button )
