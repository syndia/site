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

/**
 * Style dependencies
 */
import styles from './index.css'

const AboutHashSection = () => (
  <Track id="about" className={ styles.about } component="section" area="about__hash" align="auto" justify="auto">
    <h2>
      { "I am creative website designer and passionate photographer, enthusiastic about" }
      { "new experiences, keen on travelling and discovering new places. I specialize in" }
      { "UI/UX design, illustration and brand identity to provide the best services for my clients." }
    </h2>
  </Track>
)

export default AboutHashSection
