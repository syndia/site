/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
} from 'recompose'

/**
 * Internal dependencies
 */
import Container from '../components/Container'
import DefaultHeadMeta from '../components/DefaultHeadMeta'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

/**
 * Module dependencies
 */
import {
  appContainerPropTypes as withPropTypes,
} from './prop-types'

/**
 * Style dependencies
 */
import './index.global.css'
import './highlight.global.css'

const AppContainer = props => (
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
)

const enhance = compose(
  withPropTypes,
)

export default enhance( AppContainer )
