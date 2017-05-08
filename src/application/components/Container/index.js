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
import Header from '../Header'
import Footer from '../Footer'
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

const Container = props => (
  <div className={ styles.container }>
    <DefaultHeadMeta />
    <Header />
    { props.children }
    <Footer />
  </div>
)

export default enhance( Container )
