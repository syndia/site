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
  ScrollButton,
} from '../../../../../components/Button'
import {
  ChevronIcon,
} from '../../../../../components/Svg/Icon'

/**
 * Module dependencies
 */
import styles from './index.css'

export default compose(
  setDisplayName( 'ScrollDownButton' ),
  withProps( {
    to: 'content',
    className: styles.scrollDownButton,
    white: true,
    transparent: true,
    svg: true,
    children: <ChevronIcon down size={ 32 } strokeWidth={ 1.5 } />,
  } ),
)( ScrollButton )
