/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  setPropTypes,
} from 'recompose'

const { func, number } = PropTypes

export default setPropTypes( {
  total: number,
  current: number,
  action: func,
} )
