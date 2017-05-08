/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  setDisplayName,
} from 'recompose'
import enhanceCollection from 'phenomic/lib/enhance-collection'

/**
 * Internal dependencies
 */
import {
  getCollectionContext,
} from '../../helpers/phenomic'
import PagesList from '../../components/PagesList'

/**
 * Module dependencies
 */
import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const defaultNumberOfPosts = 6

const enhance = compose(
  getCollectionContext,

  setDisplayName( 'LatestPost' ),
  withPropTypes,
)

const LatestPosts = ( { collection, compact, className, ...props } ) => {
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
      <PagesList className={ className } pages={ latestPosts } compact={ compact } />
    </div>
  )
}

export default enhance( LatestPosts )
