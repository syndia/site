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

export const getMetaDataContext = InnerComponent => compose(
  setDisplayName( `getMetaDataContext(${ getDisplayName( InnerComponent ) })` ),
  getContext( { metadata: PropTypes.object.isRequired } )
)( InnerComponent )
