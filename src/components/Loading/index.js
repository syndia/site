/**
 * External dependencies
 */
import React from 'react'
import Helmet from 'react-helmet'
import TopBarProgressIndicator from 'react-topbar-progress-indicator'

/**
 * Style dependencies
 */
import styles from './index.css'

TopBarProgressIndicator.config( {
  barColors: {
    "0": "#fff",
    "1.0": "#fff",
  },
  shadowBlur: 5,
} )

const Loading = () => (
  <div>
    <Helmet
      title={ "Loading..." }
    />
    <TopBarProgressIndicator />
    <div className={ styles.loader }>
      <div className={ styles.spinner } />
    </div>
  </div>
)

export default Loading
