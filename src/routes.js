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
      Post,
    } }
  />
)

export default (
  <Route component={ ApplicationContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
