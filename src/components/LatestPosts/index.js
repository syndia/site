/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React, { PropTypes } from 'react'
import {
  compose,
  getContext,
  setDisplayName,
} from 'recompose'
import enhanceCollection from 'phenomic/lib/enhance-collection'

/**
 * Internal dependencies
 */
import PagesList from '../../components/PagesList'

/**
 * Module dependencies
 */
import {
  latestPostsPropTypes as withPropTypes,
} from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const defaultNumberOfPosts = 6

const getCollection = getContext ( {
  collection: PropTypes.array.isRequired,
} )

const LatestPosts = ( { collection, ...props } ) => {
  const latestPosts = enhanceCollection( collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  } )
  .slice( 0, props.numberOfPosts || defaultNumberOfPosts )

  return (
    <div>
      <h2 className={ styles.latestPosts }>
        { "Latest Posts" }
      </h2>
      <PagesList pages={ latestPosts } />
    </div>
  )
}

const enhance = compose(
  setDisplayName( 'CollectionContext' ),
  getCollection,

  setDisplayName( 'LatestPost' ),
  withPropTypes,
)

export default enhance( LatestPosts )
