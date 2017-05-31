/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose, lifecycle, mapProps, setDisplayName,
  withProps, withState,
} from 'recompose'
import { omit } from 'lodash'

/**
 * Internal dependencies
 */
import { getCollectionContext } from '../../helpers/phenomic/collection-context'
import { withMetaData } from '../../helpers/with-meta'
import { FeaturedPostsList } from '../../lists/FeaturedPostsList'
import Page from '../Page'

/**
 * Module dependencies
 */
import { ResultsLayout } from './ResultsLayout'
import Footer from './components/Footer'

import config from './config'
import tracks from './tracks'

const initialState = {
  data: {
    pagination: { total: 0 },
  },
  loading: true,
}

const HOC = compose(
  withMetaData,
  getCollectionContext,

  setDisplayName( 'Blog' ),
  withState( 'state', 'setState', initialState ),
  withProps( {
    filter: { layout: 'Post' },
    sort: 'date',
    reverse: true,
    fetchData: ( { metadata, getCollection, setState, ...rest } ) => {
      setState( state => ( { ...state, loading: true } ) )
      const posts = getCollection( { start: metadata.offset, offset: metadata.offset + metadata.limit, ...rest } )
      setState( () => ( { data: { posts, metadata: { ...metadata, total: posts.length } }, loading: false } ) )
    }
  } ),
  lifecycle( {
    componentDidMount() {
      this.props.fetchData( this.props )
    }
  } ),
  mapProps( props => omit( props,
    'filter', 'sort', 'reverse',
    'setState', 'fetchData',
    'collection', 'getCollection',
  ) ),
)

const Blog = ( { head, metadata, state, ...props } ) => {
  const rest = props
  const { data } = state

  return (
    <Page
      { ...rest }
      head={ head }
      tracks={ tracks }
      footer={ <Footer /> }
    >
      <FeaturedPostsList
        filter={ item => item.layout === 'Post' && item.featured === true }
        limit={ 4 }
        config={ config }
      />
      { data.posts && <ResultsLayout metadata={ metadata } items={ data.posts } config={ config } /> }
    </Page>
  )
}

export default HOC( Blog )
