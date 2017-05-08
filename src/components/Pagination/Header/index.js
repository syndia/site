/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'

/**
 * Style dependencies
 */
import styles from './index.css'

const PaginationHeader = ( { entityType, first = 1, offset = 0, total  } ) => (
  <header className={ styles.header }>
    <span>Showing</span>
    <strong>
      <span> { 1 + offset }</span>
      <span>-</span>
      <span>{ offset + first }</span>
    </strong>
    <span> of</span>
    <strong> { total.toLocaleString() }</strong>
    <span> { entityType }</span>
  </header>
)

export default PaginationHeader
