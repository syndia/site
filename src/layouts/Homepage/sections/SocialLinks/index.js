/**
 * External dependencies
 */
import React from 'react'
import Svg from 'react-svg-inline'
import {
  Link,
} from 'phenomic'


/**
 * Internal dependencies
 */
import {
  Track,
} from '../../../../components/Grid'
import twitterSvg from '../../../../application/components/icons/iconmonstr-twitter-1.svg'
import gitHubSvg from '../../../../application/components/icons/iconmonstr-github-1.svg'
import linkedInSvg from '../../../../application/components/icons/iconmonstr-linkedin-3.svg'


/**
 * Style dependencies
 */
import styles from './index.css'

const SocialLinks = () => (
  <Track className={ styles.social } component="section" area="social__links" align="auto" justify="auto">
    <ul>
      <li>
        <Link to={ "https://twitter.com/syndianl" }><Svg svg={ twitterSvg } cleanup /></Link>
        <p>{ "Follow @syndianl for web design & development articles, opinions and links" } </p>
      </li>
      <li>
        <Link to={ "https://github.com/syndia" }><Svg svg={ gitHubSvg } cleanup /></Link>
        <p>{ "View @syndia on Github for open-source projects" } </p>
      </li>
      <li>
        <Link to={ "https://linkedin.com/syndianl" }><Svg svg={ linkedInSvg } cleanup /></Link>
        <p>{ "View my LinkedIn profile" } </p>
      </li>
    </ul>
  </Track>
)

export default SocialLinks
