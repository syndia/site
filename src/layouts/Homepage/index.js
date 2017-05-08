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

const Homepage = props => (
    <Page
      gap="0"
      tracks={ tracks } { ...props }
      sections={ sections }
    />
)

export default Homepage
