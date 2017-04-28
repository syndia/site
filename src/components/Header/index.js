/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  setDisplayName,
  getContext,
} from 'recompose'
import { Link } from 'phenomic'
import Svg from 'react-svg-inline'

/**
 * Internal dependencies
 */
import twitterSvg from '../icons/iconmonstr-twitter-1.svg'
import gitHubSvg from '../icons/iconmonstr-github-1.svg'

/**
 * Style dependencies
 */
import styles from './index.css'

const getMetaData = getContext ( {
  metadata: PropTypes.object.isRequired,
} )

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

const enhance = compose(
  setDisplayName( 'MetaDataContext' ),
  getMetaData,
  //setDisplayName( 'Header' ),
)

export default enhance( Header )
