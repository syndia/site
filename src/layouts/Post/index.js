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
import {
  postPropTypes as withPropTypes,
} from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

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

const enhance = compose(
  withPropTypes,
)

export default enhance( Post )
