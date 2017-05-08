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

const Legend = ( {
  className,
  children, ...rest,
} ) => (
  <legend
    { ...rest }
    className={ cx( {
      [ className ]: className,
      [ styles.legend ]: true,
    } ) }
  >
    { children }
  </legend>
)

export default Legend
