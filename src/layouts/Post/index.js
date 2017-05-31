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
import config from '../../config'
import {
  DateComponent,
} from '../../internals/DateTime'
import { CommentsList } from '../../lists/CommentsList'
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
    <CommentsList config={ config.comments } />
    <LatestPosts />
  </Page>
)

export default enhance( Post )
