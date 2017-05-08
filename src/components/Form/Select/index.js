/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  defaultProps,
} from 'recompose'
import cx from 'classnames'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  defaultProps( {
    isError: false,
  } ),
)

const Select = ( {
  isError,
  className,
  children, ...rest,
} ) => (
  <select
    { ...rest }
    className={ cx( {
      [ className ]: className,
      [ styles.fieldset ]: true,
      [ styles.error ]: isError,
    } ) }
  >
    { children }
  </select>
)

export default enhance( Select )
