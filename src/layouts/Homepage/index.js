/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import Page from '../Page'

/**
 * Module dependencies
 */
import sections from './sections'
import tracks from './tracks'

/**
 * Style dependencies
 */
import styles from './index.css'

const Homepage = props => (
    <Page
      className={ styles.homepage }
      autoRows="minmax(100px, auto)"
      gap="0"
      tracks={ tracks } { ...props }
      sections={ sections }
    />
)

export default Homepage
