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

const Navigation = () => (
  <Track className={ styles.navigation } component="nav" area="navigation" align="auto" justify="auto">
    <dl>
      <dt><Link to="about">About</Link></dt>
      <dd>Learn about John's skills and workflow</dd>
      <dt><Link to="/">Portfolio</Link></dt>
      <dd>View John's web development work</dd>
      <dt><Link to="testimonials">Testimonials</Link></dt>
      <dd>Read client recommendations</dd>
      <dt><Link to="blog">Articles</Link></dt>
      <dd>Read web related articles, opinions { "&" } tutorials</dd>
      <dt><Link to="contact">Contact</Link></dt>
      <dd>Send a general message</dd>
      <dt><Link to="hire">Hire John</Link></dt>
      <dd>Enquire about hiring John</dd>
    </dl>
  </Track>
)

export default Navigation
