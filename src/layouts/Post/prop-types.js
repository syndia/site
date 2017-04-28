/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

export const postPropTypes = setPropTypes( {
  head: PropTypes.object.isRequired,
} )
