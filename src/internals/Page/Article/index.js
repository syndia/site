import React from 'react'
import PropTypes from 'prop-types'
import { compose, mapProps, setDisplayName, setPropTypes } from 'recompose'
import cx from 'classnames'

import styles from './index.css'

const HOC = compose(
  setDisplayName('Article'),
  setPropTypes({
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
  }),
  mapProps(({ className, ...rest }) => ({
    ...rest,
    className: cx({
      [className]: className,
      [styles.root]: true,
    })
  }))
)

const Component = ({ className, title, children }) => (
  <article className={ className }>
    { title && <h2>{ title }</h2> }
    { children }
  </article>
)

export const Article = HOC(Component)
