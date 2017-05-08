/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  branch,
  compose,
  defaultProps,
  renderNothing,
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
import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import pageStyles from '../../index.css'
import styles from './index.css'

const enhance = compose(
  setDisplayName( 'Hero' ),
  withPropTypes,
  defaultProps( {
    fullscreen: false,
  } ),
  branch(
    ( { head: { hero } } ) => ! hero,
    renderNothing,
  )
)

const createButtons = buttons => buttons.map(
  ( button, index ) =>
    <Button
      key={ index }
      component={ Link }
      to={ button.link }
      className={ styles.cta }
      { ...button.props }
    >
      { button.label.toUpperCase() }
    </Button>
)

const Hero = ( { children, head, fullscreen } ) => (
  <div
    className={ styles.hero }
    style={ head.hero && {
      width: fullscreen && '100%',
      height: fullscreen && '100vh',
      background: typeof head.hero !== 'boolean' && `#111 url(${ head.hero }) 50% 50% / cover`,
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
        { head.cta && head.cta.teaser && <p className={ styles.teaser }>{ head.cta.teaser }</p> }
        {
          head.cta && ! head.cta.buttons &&
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
       {
         head.cta && head.cta.buttons && createButtons( head.cta.buttons )
       }
       { children }
       { fullscreen && <ScrollDownButton /> }
      </div>
    </div>
  </div>
)

export default enhance( Hero )
