/* eslint-disable react/prop-types */

/**
 * Internal dependencies
 */
import React from 'react'
import {
  compose,
} from 'recompose'

/**
 * Internal dependencies
 */
import {
  DateComponent,
} from '../../components/DateTime'
import LatestPosts from '../../components/LatestPosts'
import Page from '../Page'

/**
 * Module dependencies
 */
import  withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  withPropTypes,
)

const Post = props => (
  <Page
    { ...props }
    header={
      <div>
        <header className={ styles.header }>
          {
            props.head.date &&
              <DateComponent value={ new Date( props.head.date ) } />
          }
        </header>
      </div>
    }
  >
    <hr />
    <LatestPosts />
  </Page>
)

export default enhance( Post )
