/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  compose,
  getContext,
  getDisplayName,
  setDisplayName,
  withProps,
} from 'recompose'
import enhanceCollection from 'phenomic/lib/enhance-collection'

const getCollection = ( {
  collection, filter, sort, reverse,
  start, offset,
} ) => enhanceCollection( collection, {
  filter,
  sort,
  reverse,
} ).slice( start, offset )

export const getCollectionContext = InnerComponent => compose(
  setDisplayName( `getCollectionContext(${ getDisplayName( InnerComponent ) })` ),
  getContext( { collection: PropTypes.array.isRequired } ),
  withProps( {
    getCollection,
  } ),
)( InnerComponent )
