/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
} from 'recompose'
import { Link } from 'phenomic'
import Svg from 'react-svg-inline'

/**
 * Internal dependencies
 */
import {
  getMetaDataContext,
} from '../../../helpers/phenomic'

import twitterSvg from '../icons/iconmonstr-twitter-1.svg'
import gitHubSvg from '../icons/iconmonstr-github-1.svg'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  getMetaDataContext,
)

const Header = ( { metadata: { pkg } } ) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.link }
          to={ "/" }
        >
          { "Home" }
        </Link>
        <Link
          className={ styles.link }
          to={ "/blog" }
        >
          { "Blog" }
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.twitter &&
          <a
            href={ `https://twitter.com/${ pkg.twitter }` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
            { "Twitter" }
          </a>
        }
        {
          pkg.repository &&
          <a
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup />
            { "GitHub" }
          </a>
        }
      </div>
    </nav>
  </header>
)

export default enhance( Header )
