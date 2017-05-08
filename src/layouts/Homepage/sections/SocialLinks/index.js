/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import {
  Track,
} from '../../../../components/Grid'
import SocialList from '../../../../components/Social'

/**
 * Style dependencies
 */
import styles from './index.css'

const SocialLinks = () => (
  <Track className={ styles.social } component="section" area="social__links" align="auto" justify="auto">
    <SocialList list />
  </Track>
)

export default SocialLinks
