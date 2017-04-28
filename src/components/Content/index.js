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
  contentPropTypes as withPropTypes,
} from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const Content = props => (
  <div className={ styles.content }>
    { props.children }
  </div>
)

const enhance = compose(
  withPropTypes,
)
export default enhance( Content )
