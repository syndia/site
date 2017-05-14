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
  ChevronIcon,
} from '../Svg/Icon'

/**
 * Module dependencies
 */
import Button from '../Button'

export default compose(
  setDisplayName( 'LightboxNextButton' ),
  withProps( {
    transparent: true,
    svg: true,
    children: <ChevronIcon size={ 32 } right />,
  } ),
)( Button )
