/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

export const pagePropTypes = setPropTypes( {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
} )

export const heroPropTypes = setPropTypes( {
  children: PropTypes.any,
  fullscreen: PropTypes.bool,
  head: PropTypes.object,
} )
