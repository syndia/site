/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  withProps,
} from 'recompose'

/**
 * Internal dependencies
 */
import {
  Track,
} from '../../../../components/Grid'
import Navigation from '../../../../components/Navigation'

/**
 * Style dependencies
 */
import styles from './index.css'

const FooterNavigation = props => (
  <Track
    { ...props }
    className={ styles.navigation }
    area="navigation"
    align="auto"
    justify="auto"
  />
)

export default compose(
  withProps( {
    withDescriptions: true,
    component: Navigation,
  } ),
)( FooterNavigation )
