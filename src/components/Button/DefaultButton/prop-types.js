/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

export default setPropTypes( {
  children: PropTypes.node,
  className: PropTypes.string,
  big: PropTypes.bool,
  buttonGroup: PropTypes.bool,
  light: PropTypes.bool,
  secondary: PropTypes.bool,
} )
