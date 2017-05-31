import React from 'react'
import PropTypes from 'prop-types'
import { compose, mapProps, pure, setDisplayName, setPropTypes } from 'recompose'
import cx from 'classnames'

import styles from './index.css'

const HOC = compose(
  setDisplayName('Count'),

  pure,

  setPropTypes({
    count: PropTypes.number.isRequired,
  }),

  mapProps(({ className, ...rest }) => ({
    ...rest,
    className: cx({
      [className]: className,
      [styles.root]: true,
    })
  }))
)

const Component = ({ count, ...rest }) => (
  <span { ...rest }>{ Number(count) }</span>
)

export const Count = HOC(Component)
