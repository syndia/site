/**
 * External dependencies
 */
import React from 'react'
import {
  Link,
} from 'phenomic'

/**
 * Internal dependencies
 */
import {
  Track,
} from '../../../../components/Grid'
import {
  ChevronIcon,
} from '../../../../components/Svg/Icon'

/**
 * Style dependencies
 */
import styles from './index.css'

const Footer = () => (
  <Track className={ styles.cta } component="footer" area="footer" align="auto" justify="auto">
    <Link to="about">
      { "ABOUT SYNDIA " }
      <ChevronIcon size={ 22 } strokeWidth={ 3 } />
    </Link>
  </Track>
)

export default Footer
