import React from 'react'
import PropTypes from 'prop-types'
import { componentFromProp, compose, defaultProps, getContext, mapProps, setDisplayName, setPropTypes } from 'recompose'
import { omit } from 'lodash'
import cx from 'classnames'

import KIND, { ALL as KINDS } from './kinds'

import styles from './index.css'

const HOC = compose(
  getContext({ buttonGroup: PropTypes.bool }),

  setDisplayName('Button'),

  setPropTypes({
    children: PropTypes.node,
    icon: PropTypes.node,
    component: PropTypes.string,
    active: PropTypes.bool,
    transparent: PropTypes.bool,
    kind: PropTypes.oneOf(Array.from(KINDS)),
  }),

  defaultProps({ component: 'button', kind: KIND, active: false, transparent: false }),

  mapProps(props => omit(props, 'buttonGroup')),
  mapProps(({
    active, kind, transparent, icon, className, children, ...rest,
  }) => ({
    ...rest,
    className: cx({
      [className]: className,
      [styles[kind]]: true,
      [styles.reset]: true,
      [styles.root]: true,
      [styles.active]: active,
      [styles.transparent]: transparent,
    }),
    children: typeof children === 'string'
      ? <span role="button">{ children }</span>
      : icon ? icon : children,
  })),
)

export const Button = HOC(componentFromProp('component'))
