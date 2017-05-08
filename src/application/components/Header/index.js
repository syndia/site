/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
} from 'recompose'
import { Link } from 'phenomic'

/**
 * Internal dependencies
 */
import {
  getMetaDataContext,
} from '../../../helpers/phenomic'
import SociaLinks from '../../../components/Social'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  getMetaDataContext,
)

const Header = () => (
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
      <SociaLinks className={ styles.navPart2 } />
    </nav>
  </header>
)

export default enhance( Header )
