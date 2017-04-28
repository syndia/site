/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

export const pagePreviewPropTypes = setPropTypes( {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
} )
