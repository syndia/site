import React from 'react'
import { compose, defaultProps, mapProps,setDisplayName, withProps } from 'recompose'
import cx from 'classnames'

import withBackLink from '../../helpers/with-back-link'

import { ChevronIcon } from '../../components/Svg/Icon'
import { Button } from '../../internals/Button'
import { INCOGNITO } from '../../internals/Button/kinds'

import styles from './index.css'

export const GoBackButton = compose(
  withBackLink,

  setDisplayName('GoBackButton'),

  defaultProps({ href: '#' }),

  mapProps(({ className, ...rest }) => ({
    ...rest,
    className: cx({ [className]: className, [styles.root]: true })
  })),

  withProps({ kind: INCOGNITO , children: <ChevronIcon left size={ 32 } strokeWidth={ 1.5 } /> }),
)(Button)
