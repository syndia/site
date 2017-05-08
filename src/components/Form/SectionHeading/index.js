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

const SectionHeading = ( {
  className,
  children, ...rest,
} ) => (
  <h3
    { ...rest }
    className={ cx( {
      [ className ]: className,
      [ styles.heading ]: true,
    } ) }
  >
    { children }
  </h3>
)

export default SectionHeading
