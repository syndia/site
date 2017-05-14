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

/**
 * Module dependencies
 */
import Button from '../DefaultButton'

export default compose(
  setDisplayName( 'CloseButton' ),
  withProps( {
    transparent: true,
    svg: true,
    white: true,
    children: <XIcon />,
  } ),
)( Button )
