/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

export default setPropTypes( {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  sidebar: PropTypes.element,
  footer: PropTypes.element,
} )
