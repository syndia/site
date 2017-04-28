/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import LatestPosts from '../../components/LatestPosts'
import Page from '../Page'

const Homepage = props => (
  <Page { ...props }>
    <LatestPosts />
  </Page>
)

export default Homepage
