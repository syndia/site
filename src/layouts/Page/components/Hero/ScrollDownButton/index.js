/**
 * External dependencies
 */
import React from 'react'

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

const ScrollDownButton = () => (
  <ScrollButton className={ styles.scrollDownButton } to="content">
    <ChevronIcon down size={ 32 } strokeWidth={ 1.5 } />
  </ScrollButton>
)

export default ScrollDownButton
