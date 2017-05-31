import React from 'react'
import { compose, defaultProps, setDisplayName, mapProps } from 'recompose'
import cx from 'classnames'

import withConfig from '../../helpers/with-config'

import styles from './count.css'

const HOC = compose(
  setDisplayName('CommentsCount'),

  defaultProps({ count: 0 }),

  withConfig({
    first: {
      display: true,
    },
  }),

  mapProps(({ count, config, className, ...rest }) => ({
    ...rest,
    count,
    config,
    countPhrase: count < 1 ? config.i18n.none : count === 1 ? `${ count } ${ config.i18n.single }` : `${ count } ${ config.i18n.multiple }`,
    className: cx({ className, [styles.root]: true })
  })),
)

const Component = ({ count, countPhrase, config, className }) => (
  <div className={ className }>
    <span className={ styles.phrase }>{ countPhrase }</span>
    { count === 0 && config.first.display && ` - ${ config.i18n.first }` }
  </div>
)

export const CommentsCount = HOC(Component)
