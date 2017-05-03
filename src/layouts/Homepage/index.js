/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import Page from '../Page'
import {
  Header,
  Footer,
  Main,
} from '../../components/Section'
import LatestPosts from '../../components/LatestPosts'

const Homepage = props => (
  <div>
    <Header />
    <Main>
      <Page { ...props } />
    </Main>
    <LatestPosts />
    <Footer />
  </div>
)

export default Homepage
