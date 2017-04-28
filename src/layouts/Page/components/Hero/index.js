/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  defaultProps as setDefaultProps,
  setDisplayName,
  setPropTypes,
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
import pageStyles from '../../index.css'
import styles from './index.css'

const propTypes = {
  children: PropTypes.any,
  cta: PropTypes.object,
  fullscreen: PropTypes.bool,
  title: PropTypes.string,
}

const defaultProps = {
  fullscreen: false,
}

const Hero = ( { children, head } ) => (
  <div
    className={ styles.hero }
    style={ head.hero && {
      background: `#111 url(${ head.hero }) 50% 50% / cover`,
    } }
  >
    <div className={ styles.header }>
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
      </div>
    </div>
  </div>
)

export default compose(
  setDisplayName( 'Hero' ),
  setPropTypes( propTypes ),
  setDefaultProps( defaultProps ),
)( Hero )
