/**
 * External dependencies
 */
import React from 'react'

/**
 * Module dependencies
 */
import LatestPosts from '../../../../components/LatestPosts'

/**
 * Style dependencies
 */
import styles from './index.css'

const Sidebar = () => (
  <div className={ styles.sidebar } style={ { gridArea: 'sidebar', justifySelf: 'auto', alignSelf: 'auto' } }>
    <LatestPosts className={ styles.list } compact />
  </div>
)

export default Sidebar
