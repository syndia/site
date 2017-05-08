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

const FieldSet = ( {
  className,
  children, ...rest,
} ) => (
  <fieldset
    { ...rest }
    className={ cx( {
      [ className ]: className,
      [ styles.fieldset ]: true,
    } ) }
  >
    { children }
  </fieldset>
)

export default FieldSet
