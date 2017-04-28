/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  defaultProps,
  setDisplayName,
} from 'recompose'
import {
  Link
} from 'phenomic'

/**
 * Internal dependencies
 */
import Button from '../../../../components/Button'

/**
 * Module dependencies
 */
import ScrollDownButton from './ScrollDownButton'
import {
  heroPropTypes as withPropTypes,
} from '../../prop-types'

/**
 * Style dependencies
 */
import pageStyles from '../../index.css'
import styles from './index.css'

const Hero = ( { children, head, fullscreen } ) => (
  <div
    className={ styles.hero }
    style={ head.hero && {
      width: fullscreen && '100%',
      height: fullscreen && '100vh',
      background: `#111 url(${ head.hero }) 50% 50% / cover`,
    } }
  >
    <div
      className={ styles.header }
      style={ head.hero && {
        height: fullscreen && '100%',
        padding: fullscreen && '30vh',
      } }
    >
      <div className={ pageStyles.wrapper }>
        <h1 className={ styles.heading }>{ head.title }</h1>
        {
          head.cta &&
          <Button
            component={ Link }
            to={ head.cta.link }
            className={ styles.cta }
            light
            { ...head.cta.props }
          >
            { head.cta.label }
          </Button>
       }
       { children }
       { fullscreen && <ScrollDownButton /> }
      </div>
    </div>
  </div>
)

const enhance = compose(
  setDisplayName( 'Hero' ),
  withPropTypes,
  defaultProps( {
    fullscreen: false,
  } ),
)

export default enhance( Hero )
