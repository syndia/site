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

/**
 * Style dependencies
 */
import styles from './index.css'

const Bio = () => (
  <Track className={ styles.bio } component="section" area="bio" align="auto" justify="auto">
    <p>
      { "WordPress & Front-end Developer, John combineert zijn opleidingen met 1/2 jaar commerciële " }
      { "ervaring in Wordpress en front-end ontwikkeling om hoogwaardige websites en uitzonderlijke " }
      { "gebruikerservaring te produceren." }
      <br /><br />
      { "WordPress & Front-end Developer." }
      <br />
      { "Beschikbaar vanaf juni 2017. " }
      <Link to="hire"><strong>{ " Huur nu >>" }</strong></Link>
    </p>
  </Track>
)

export default Bio
