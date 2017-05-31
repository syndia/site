/**
 * External dependencies
 */
import React from 'react'
import { compose, setDisplayName, withPropsOnChange } from 'recompose'

/**
 * Internal dependencies
 */
import { isDesktop, isMobile } from '../../utilities/viewport'
import { withBounds } from '../../helpers'
import Page from '../Page'

/**
 * Module dependencies
 */
import sections from './sections'
import tracks from './tracks'
/**
 * Style dependencies
 */
import styles from './index.css'

const getTracks = () => {
  if (isMobile()) {
    return tracks.phone
  }
  if (isDesktop()) {
    return tracks.desktop
  }
  return tracks.tablet
}

const HOC = compose(
  setDisplayName('Homepage'),

  withBounds('screen'),
  withPropsOnChange(['screen'], () => ({
    tracks: getTracks()
  })),
)

const Homepage = props => (
    <Page
      className={ styles.homepage }
      autoRows="minmax(100px, auto)"
      gap="0"
      { ...props }
      sections={ sections }
    />
)

export default HOC(Homepage)
