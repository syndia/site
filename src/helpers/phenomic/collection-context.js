/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  compose,
  getContext,
  getDisplayName,
  setDisplayName,
} from 'recompose'

export const getCollectionContext = InnerComponent => compose(
  setDisplayName( `getCollectionContext(${ getDisplayName( InnerComponent ) })` ),
  getContext( { collection: PropTypes.array.isRequired } )
)( InnerComponent )
