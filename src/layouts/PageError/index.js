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

/**
 * Internal dependencies
 */
import Page from '../Page'
import {
  Main,
} from '../../components/Section'
import { GoBackButton } from '../../internals/GoBack'

/**
 * Module dependencies
 */
import tracks from './tracks'
import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  setDisplayName( 'PageError' ),
  withPropTypes,
  defaultProps( {
    error: 404,
    errorText: 'Page Not Found',
  } ),
)

const PageError = ( { error, errorText } ) => (
  <Page
    head={ {
      title: 'Error',
      fullscreen: true,
    } }
    tracks={ tracks }
  >
    <Main>
      <div className={ styles.container }>
        <div className={ styles.oops }>
          { "Waiting " }<em>{ "for this" }</em>{ " page..." }
          <br />
          <span>{ "...is like sunshine at night" }</span>
        </div>
        <div className={ styles.text }>
          <p className={ styles.title }>
            <strong>{ error }</strong>
            { " " }
            { errorText }
          </p>
          {
            error === 404 &&
            <div>
              { "Sorry about that. " }
              { " Do not hesitate to report this page." }
            </div>
          }
        </div>
      </div>
      <GoBackButton className={ styles.goBackButton } />
    </Main>
  </Page>
)

export default enhance( PageError )
