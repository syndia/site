import React from 'react'
import { compose, createEagerElement, mapProps, setDisplayName, withPropsOnChange } from 'recompose'
import cx from 'classnames'

import { withCollectionFilter } from '../../helpers/phenomic/with-collection-filter'
import { withBounds } from '../../helpers'
import { Grid } from '../../widgets/Grid'
import { PostPreview } from '../../widgets/PostPreview'

import styles from './index.css'

const countColumns = width => {
  if (width > 700) return 2
  return 1
}

const HOC = compose(
  withCollectionFilter,

  setDisplayName('FeaturedPostsList'),

  withBounds('screen'),
  withPropsOnChange(['screen'], ({ items, screen }) => {
    const columns = countColumns(screen.width)

    return {
      columns: items.length < columns ? items.length : columns,
    }
  }),

  mapProps(({ className, ...rest }) => ({
    ...rest,
    className: cx({
      [className]: className,
      [styles.root]: true,
    }),
  })),
)

const Component = ({ items, columns, config, className, onPostClick }) => (
  <Grid className={ className } columns={ columns < 1 ? 2 : String(columns) }>
    <div className={ styles.featured }>
      {
        items.map((post, index) => index === 0 && createEagerElement(PostPreview, {
          ...post,
          key: `featured-post-${ post.id || index }`,
          config: {
            ...config.post,
            featured: true,
            onClick: onPostClick,
          }
        }))
      }
    </div>
    <ul>
      {
        items.map((post, index) => index >= 1 && createEagerElement(PostPreview, {
          ...post,
          key: `featured-post-${ post.id || index }`,
          config: {
            ...config.post,
            featured: true,
            compact: true,
            onClick: onPostClick,
          }
        }))
      }
    </ul>
  </Grid>
)

export const FeaturedPostsList = HOC(Component)
