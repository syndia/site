import React from 'react'

import {
  Track,
} from '../../../../components/Grid'
import {
  ChevronIcon,
} from '../../../../components/Svg/Icon'
import { Banner } from '../../../../widgets/Banner'

/**
 * Style dependencies
 */
import styles from './index.css'

const AboutCallToAction = () => (
  <Track className={ styles.cta } component="section" area="about__cta" align="auto" justify="auto">
    <Banner
      title="Over Syndia"
      to="/about"
      icon={ <ChevronIcon className={ styles.icon } size={ 22 } strokeWidth={ 3 } /> }
      className={ styles.banner }
    />
  </Track>
)

export default AboutCallToAction
