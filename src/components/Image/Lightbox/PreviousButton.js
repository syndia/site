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
} from '../../Svg/Icon'
import Button from '../../Button'

export default compose(
  setDisplayName( 'LightboxPreviousButton' ),
  withProps( {
    transparent: true,
    svg: true,
    children: <ChevronIcon size={ 32 } left />,
  } ),
)( Button )
