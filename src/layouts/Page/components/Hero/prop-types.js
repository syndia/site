/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

export default setPropTypes( {
  children: PropTypes.any,
  fullscreen: PropTypes.bool,
  head: PropTypes.object,
} )
