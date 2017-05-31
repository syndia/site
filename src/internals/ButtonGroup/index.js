import React from 'react'
import PropTypes from 'prop-types'
import { compose, setDisplayName, withContext } from 'recompose'
import cx from 'classnames'

import styles from './index.css'

export const HOC = compose(
  setDisplayName('ButtonGroup'),
  withContext(
    { buttonGroup: PropTypes.bool },
    () => ({ buttonGroup: true }),
  )
)

const Component = (({ className, children, ...rest }) => (
  <div { ...rest } className={ cx({ [className]: className, [styles.root]: true })}>
    { children }
  </div>
))

export const ButtonGroup = HOC(Component)
