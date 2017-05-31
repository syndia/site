/* eslint-disable react/prop-types */

import React from 'react'
import { compose, pure, withHandlers } from 'recompose'
import cx from 'classnames'

import Button from '../../components/Button'
import styles from './index.css'

const HOC = compose(
  pure,

  withHandlers({
    onClick: ({ changePage, page }) => () => changePage(page)
  }),
)

const Component = (({ label, onClick, active, className }) =>
  <Button onClick={ onClick } className={ cx(styles.item, active && styles.active, className) }>
    { String(label) }
  </Button>
)

export const ControlItem = HOC(Component)