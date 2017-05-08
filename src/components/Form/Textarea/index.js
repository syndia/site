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

const Textarea = ( {
  className,
  children, ...rest,
} ) => (
  <textarea
    { ...rest }
    className={ cx( {
      [ className ]: className,
      [ styles.textarea ]: true,
    } ) }
  >
    { children }
  </textarea>
)

export default Textarea
