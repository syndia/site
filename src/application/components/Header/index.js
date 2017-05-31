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
import { getMetaDataContext } from '../../../helpers/phenomic'
import Navigation from '../../../components/Navigation'
import SocialLinks from '../../../components/Social'
import { BurgerButton } from '../../../internals/BurgerButton'

/**
 * Style dependencies
 */
import styles from './index.css'

const HOC = compose(
  getMetaDataContext,
)

const Header = ({ onBurgerClick }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <BurgerButton onClick={ onBurgerClick } />
      <Navigation className={ styles.navPart1 } />
      <SocialLinks className={ styles.navPart2 } />
    </nav>
  </header>
)

export default HOC( Header )
