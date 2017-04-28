/**
 * External dependencies
 */
import React from 'react'
import {
  Route,
} from 'react-router'
import {
  PageContainer as PhenomicPageContainer
} from 'phenomic'

/**
 * Internal dependencies
 */
import AppContainer from './application/AppContainer'
import Page from './layouts/Page'
import PageError from './layouts/PageError'
import Homepage from './layouts/Homepage'
import Post from './layouts/Post'

const PageContainer = props => (
  <PhenomicPageContainer
    { ...props }
    layouts={ {
      Page,
      PageError,
      Homepage,
      Post,
    } }
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
