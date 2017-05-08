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
import ApplicationContainer from './application'
import {
  Page,
  PageError,
  Homepage,
  Blog,
  Post,
} from './layouts'

const PageContainer = props => (
  <PhenomicPageContainer
    { ...props }
    defaultLayout={ 'Page' }
    layouts={ {
      Page,
      PageError,
      Homepage,
      Blog,
      Post,
    } }
  />
)

export default (
  <Route component={ ApplicationContainer }>
    <Route path="blog/author/:author" component={ Blog } />
    <Route path="blog/category/:category" component={ Blog } />
    <Route path="blog/tag/:tag" component={ Blog } />
    <Route path="*" component={ PageContainer } />
  </Route>
)
