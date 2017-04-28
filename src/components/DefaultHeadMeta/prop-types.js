/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

export const defaultHeadMetaPropTypes = setPropTypes( {
  meta: PropTypes.arrayOf( PropTypes.object ),
  scripts:  PropTypes.arrayOf( PropTypes.object ),
} )
