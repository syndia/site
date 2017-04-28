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
import {
  containerPropTypes as withPropTypes,
} from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const Container = props => (
  <div className={ styles.container }>
    { props.children }
  </div>
)

const enhance = compose(
  withPropTypes,
)

export default enhance( Container )
