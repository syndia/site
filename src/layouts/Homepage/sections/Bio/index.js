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
      { "WordPress & Front-end Developer, John combines his education with 1 year commercial experience " }
      { "in Wordpress & front-end development to produce high-quality websites and exceptional user experience." }
      <br /><br />
      { "WordPress & Front-end Developer." }
      <br />
      { "Available June 2017. " }
      <Link to="hire"><strong>{ " Hire Now >>" }</strong></Link>
    </p>
  </Track>
)

export default Bio
