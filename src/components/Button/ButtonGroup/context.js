/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  compose,
  getContext,
  getDisplayName,
  setDisplayName,
  withContext,
} from 'recompose'

export const withButtonGroupContext = withContext(
  { buttonGroup: PropTypes.bool },
  ( /* props */ ) => ( { buttonGroup: true } ),
)

export const getButtonGroupContext = InnerComponent => compose(
  setDisplayName( `getButtonGroupContext(${ getDisplayName( InnerComponent ) })` ),
  getContext( { buttonGroup: PropTypes.bool } )
)( InnerComponent )
