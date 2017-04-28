/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

export const buttonPropTypes = setPropTypes( {
  children: PropTypes.node,
  className: PropTypes.string,
  big: PropTypes.bool,
  buttonGroup: PropTypes.bool,
  light: PropTypes.bool,
  secondary: PropTypes.bool,
} )

export const buttonGroupPropTypes = setPropTypes( {
  className: PropTypes.string,
  children: PropTypes.node,
} )
