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
  <Track id="solutions" className={ styles.solutions } component="section" area="solutions" align="auto" justify="auto">
    <h6>DIAM QUIS FERMENTUM</h6>
    <h2>
      Ik bied innovatieve oplossingen om uw creatieve projecten <em>voorspoedig</em> te maken
    </h2>
    <p>
      { "Nullam suscipit id ante bibendum bibendum. Vivamus interdum gravida justo id venenatis. " }
      { "Mauris eget dolor cursus , tempus velit sed, lobortis metus. Donec id tincidunt libero, " }
      { " eget dapibus quam. Aenean felis ex, blandit pretium pharetra eu." }
    </p>
    <ul>
      <li>Maak gebruik van flexibele frameworks om een robuuste synopsis te geven</li>
      <li>Samenwerkend denken om het algemeen te bevorderen</li>
      <li>Breng naar de tafel win-win overlevingsstrategieën</li>
      <li>Eigen vermogen waarborgen, vergroten voor gemeenschap eigendom</li>
    </ul>
  </Track>
)

export default AboutHashSection
