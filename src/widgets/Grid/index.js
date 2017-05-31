import React, { Children } from 'react'
import { compose, createEagerFactory, pure, setDisplayName, withPropsOnChange } from 'recompose'
import cx from 'classnames'

import { withConfig } from '../../helpers'

import styles from './index.css'

const Track = createEagerFactory(({ className, children, columnClass, columnStyle }) => (
  <div className={ cx(styles.track, className, columnClass) } style={ columnStyle }>
    { children }
  </div>
))

const HOC = compose(
  pure,

  setDisplayName('Grid'),

  withPropsOnChange(['columns', 'children'], ({ children }) => {
    const classes = []
    return {
      children: Children.map(children, (child, index) => child &&
        Track({
          key: child.key,
          children: child,
          className: classes[index] || classes[0],
        })
      )
    }
  }),

  withConfig({
    grid: {
      gap: '1rem 1rem',
    }
  }),
)

const Component = (({ config, columns, children, className }) => (
  <div
    className={ cx(styles.wrapper, className) }
    style={ {
      gridTemplateColumns: `repeat(${ columns }, 1fr)`,
      gridGap: config.grid.gap
    } }
  >
    { children }
  </div>
))

export const Grid = HOC(Component)
