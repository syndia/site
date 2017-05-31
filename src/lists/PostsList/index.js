/* eslint-disable react/prop-types */

import React from 'react'
import { compose, createEagerElement, setDisplayName, withPropsOnChange } from 'recompose'

import { withBounds, withHooks } from '../../helpers'
import { Grid } from '../../widgets/Grid'
import { PostPreview } from '../../widgets/PostPreview'

import styles from './index.css'

const countColumns = width => {
  if (width > 800) return 2
  return 1
}

const HOC = compose(
  setDisplayName('PostsList'),

  withBounds('screen'),
  withPropsOnChange(['screen'], ({ items, screen }) => {
    const columns = countColumns(screen.width)

    return {
      columns: items.length < columns ? items.length : columns,
    }
  }),

  withHooks('posts'),
  withHooks('grid'),
)

export const Component = ( {
  items,
  className,
  onPostClick,
  trackClass,
  config,
  columns,
} ) => (
  <div className={ styles.root }>
    {
      config.title && <h4 className={ styles.title }>{ config.title }</h4>
    }
    <Grid columns={ String(columns) } className={ className }>
      {
        items.map( (post, index) =>
          createEagerElement(PostPreview, {
            ...post,
            key: `post-${ post.id || index }`,
            config: {
              ...config.post,
            },
            onClick: onPostClick,
            trackClass,
          } )
        )
      }
    </Grid> 
  </div>
)

export const PostsList = HOC(Component)
