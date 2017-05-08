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

const Label = ( {
  className,
  children, ...rest,
} ) => (
  <label
    { ...rest }
    className={ cx( {
      [ className ]: className,
      [ styles.label ]: true,
    } ) }
  >
    { children }
  </label>
)

export default Label
