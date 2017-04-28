/**
 * Internal dependencies
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Internal dependencies
 */
import {
  DateComponent,
} from '../../components/DateTime'
import LatestPosts from '../../components/LatestPosts'
import Page from '../Page'

/**
 * Style dependencies
 */
import styles from './index.css'

const Post = ( props ) => (
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

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
