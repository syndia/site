/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

export const pagesListPropTypes = setPropTypes( {
  pages: PropTypes.array.isRequired,
} )
