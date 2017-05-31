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
import { ScrollButton } from '../../../../../internals/ScrollButton'
import { INCOGNITO } from '../../../../../internals/Button/kinds'
import { ChevronIcon } from '../../../../../components/Svg/Icon'

/**
 * Module dependencies
 */
import styles from './index.css'

export default compose(
  setDisplayName( 'ScrollDownButton' ),
  withProps( {
    to: 'content',
    className: styles.scrollDownButton,
    kind: INCOGNITO,
    children: <ChevronIcon down size={ 32 } strokeWidth={ 1.5 } />,
  } ),
)( ScrollButton )
