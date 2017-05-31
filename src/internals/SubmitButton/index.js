import { Children } from 'react'
import { compose, defaultProps, mapProps, setDisplayName } from 'recompose'
import cx from 'classnames'

import { Button } from '../Button'

import styles from './index.css'

export const SubmitButton = compose(
  setDisplayName('SubmitButton'),

  defaultProps({
    isSubmitting: false,
    isPrimary: true,
    type: 'submit',
  }),

  mapProps(({ isSubmitting, isPrimary, config, className, children, ...rest }) => ({
    ...rest,
    primary: isPrimary,
    className: cx({ [className]: className, [styles.root]: true }),
    children: Children.count(children) ? children : isSubmitting ? config.i18n.saving : config.i18n.save
  })),
)(Button)
