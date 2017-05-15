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

const AboutCallToAction = () => (
  <Track className={ styles.cta } component="section" area="about__cta" align="auto" justify="auto">
    <Link to="about">
      { "OVER SYNDIA " }
      <ChevronIcon size={ 22 } strokeWidth={ 3 } />
    </Link>
  </Track>
)

export default AboutCallToAction
