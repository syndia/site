/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import {
  Grid,
} from '../../../../components/Grid'

/**
 * Module dpendencies
 */
import PostPreview from '../PostPreview'

/**
 * Style dependencies
 */
import styles from './index.css'

const PostsList = ( { posts } ) => (
  <Grid
    className={ styles.list }
    templateRows={ `repeat(${ Math.ceil( posts.length / 2 ) }, 1fr)` }
    templateColumns="repeat(2, 1fr)"
    gap="5px 5px"
    justifyContent="stretch"
    justifyItems="stretch"
    alignContent="center"
    autoColumns="30px"
    autoRows="30px"
    autoFlow="row"
  >
    { posts.map( post =>
      <PostPreview
        key={ post.title }
        post={ post }
      />
    ) }
  </Grid>
)

export default PostsList
