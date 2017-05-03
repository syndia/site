/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
} from 'recompose'

/**
 * Module dependencies
 */
import DefaultHeadMeta from '../DefaultHeadMeta'
import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import '../../../styles/index.global.css'
import '../../../styles/highlight.global.css'
import styles from './index.css'

const enhance = compose(
  withPropTypes,
)

const AppContainer = props => (
  <div className={ styles.container }>
    <DefaultHeadMeta />
    { props.children }
  </div>
)

export default enhance( AppContainer )
