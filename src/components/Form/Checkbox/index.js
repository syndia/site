/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import cx from 'classnames'

/**
 * Style dependencies
 */
import styles from './index.css'

const Checkbox = ( {
  className,
  ...rest,
} ) => (
  <input
    { ...rest }
    type="checkbox"
    className={ cx( {
      [ className ]: className,
      [ styles.checkbox ]: true,
    } ) }
  />
)

export default Checkbox
