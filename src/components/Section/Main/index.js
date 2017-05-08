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
import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  withPropTypes,
)

const Content = props => (
  <main className={ styles.main }>
    { props.children }
  </main>
)

export default enhance( Content )
