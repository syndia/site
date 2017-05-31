/* eslint-disable react/prop-types */

import React from 'react'
import { compose, defaultProps, setDisplayName } from 'recompose'

import { withHooks } from '../../../helpers'
import { Pagination } from '../../../widgets/Pagination'
import { Grid } from '../../../widgets/Grid'
import { PostsList } from '../../../lists/PostsList'

import styles from './index.css'

export const ResultsLayout = compose(
  setDisplayName('ResultsLayout'),

  defaultProps({
    columns: {
      facets: 4,
      posts: 8,
    }
  }),

  withHooks('results'),
)(({
  config,
  isMobile,
  onPostClick,
  onPageChange,
  items,
  metadata,
  columns,
}) => (
  <div>
    {
      ! isMobile &&
      <Pagination
        className={ styles.pagination }
        onChange={ onPageChange }
        config={ config.pagination }
        metadata={ metadata }
        total={ Math.ceil(items.length / metadata.limit) }
        current={ Math.ceil( metadata.offset / metadata.limit ) + 1 }
      >
        <Grid columns={ columns }>
          <PostsList
            config={{
              ...config,
              ...config.postsGrid,
            }}
            trackClass={ styles.post }
            items={ items }
            onPostClick={ onPostClick }
          />
        </Grid>
      </Pagination>
    }
  </div>
))