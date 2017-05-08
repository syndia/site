/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

export default setPropTypes( {
  pages: PropTypes.array.isRequired,
} )
