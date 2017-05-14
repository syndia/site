/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import Figure, { Caption } from '../Figure'

/**
 * Style dependencies
 */
import styles from './index.css'

const Logo = () => (
  <Figure className={ styles.logo }>
    <Caption style={ { display: 'none' } }>Syndia's Logo</Caption>
    <svg width="52" height="52" viewBox="0 0 52 52">
      <title>Syndia's Design Logo</title>
      <g fill="currentColor">
        <path className="circle" d="M6.188 26c0-10.938 8.875-19.813 19.813-19.813 10.938 0 19.813 8.875 19.813 19.813 0 10.938-8.875 19.813-19.813 19.813-10.938 0-19.813-8.875-19.813-19.813zm-5.188 0c0 13.813 11.188 25 25 25 13.813 0 25-11.188 25-25 0-13.813-11.188-25-25-25-13.813 0-25 11.188-25 25z"></path>
      </g>
    </svg>
  </Figure>
)

export default Logo
