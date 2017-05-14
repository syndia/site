/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
} from 'recompose'

/**
 * Internal dependencies
 */
import Navigation from '../../../components/Navigation'
import {
  getMetaDataContext,
} from '../../../helpers/phenomic'
import SocialLinks from '../../../components/Social'

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
      <Navigation className={ styles.navPart1 } />
      <SocialLinks className={ styles.navPart2 } />
    </nav>
  </header>
)

export default enhance( Header )
