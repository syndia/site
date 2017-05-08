/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  lifecycle,
  mapProps,
  setDisplayName,
  withProps,
  withState,
} from 'recompose'
import {
  omit,
} from 'lodash'

/**
 * Internal dependencies
 */
import {
  getCollectionContext,
} from '../../helpers/phenomic/collection-context'
import PaginationContainer from '../../components/Pagination'
import Page from '../Page'

/**
 * Module dependencies
 */
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import PostsList from './components/PostsList'
import LatestPosts from '../../components/LatestPosts'
import tracks from './tracks'

const initialState = {
  data: {
    pagination: { total: 0 },
  },
  loading: true,
}

const enhance = compose(
  getCollectionContext,

  setDisplayName( 'Blog' ),
  withState( 'state', 'setState', initialState ),
  withProps( {
    filter: { layout: 'Post' },
    sort: 'date',
    reverse: true,
    fetchData: ( { getCollection, setState, ...rest } ) => {
      setState( state => ( { ...state, loading: true } ) )
      const posts = getCollection( { ...rest } )
      setState( () => ( { data: { posts, pagination: { total: posts.length } }, loading: false } ) )
    }
  } ),
  lifecycle( {
    componentDidMount() {
      this.props.fetchData( this.props )
    }
  } ),
  mapProps( props => omit( props,
    'filter', 'sort', 'reverse', 'start', 'offset',
    'setState', 'fetchData',
    'collection', 'getCollection',
  ) ),
)

const Blog = ( { head, state, ...props } ) => {
  const rest = props
  const { data, loading } = state

  return (
    <Page
      { ...rest }
      head={ head }
      tracks={ tracks }
      header={ <Header /> }
      sidebar={ <Sidebar /> }
      footer={ <Footer /> }
    >
      <PaginationContainer
        total={ data.pagination && data.pagination.total }
        onChange={ pageInfo => props.fetchData( { ...rest, ...pageInfo } ) }
        entityType="Articles"
        isLoading={ loading }
      >
        { data.posts && <PostsList posts={ data.posts } /> }
      </PaginationContainer>
      <LatestPosts />
    </Page>
  )
}

export default enhance( Blog )
