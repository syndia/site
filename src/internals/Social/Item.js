import React from 'react'
import PropTypes from 'prop-types'
import { compose, mapProps, onlyUpdateForKeys, setPropTypes } from 'recompose'
import { memoize } from 'lodash'
import cx from 'classnames'

import withConfig from '../../helpers/with-config'

import * as Icons from './icons'
import { FACEBOOK, GITHUB, GOOGLE_PLUS, INSTAGRAM, LINKEDIN, TWITTER } from './providers'

import styles from './index.css'

const PROVIDER_REGEXP = new Map([
  [FACEBOOK, /facebook.com/],
  [GITHUB, /github.com/],
  [GOOGLE_PLUS, /plus.google.com/],
  [INSTAGRAM, /instagram.com/],
  [LINKEDIN, /linkedin.com/],
  [TWITTER, /twitter.com/],
])

const PROVIDER_NAMES = new Map([
  [FACEBOOK, 'Facebook'],
  [GITHUB, 'GitHub'],
  [GOOGLE_PLUS, 'Google Plus'],
  [INSTAGRAM, 'Instagram'],
  [LINKEDIN, 'LinkedIn'],
  [TWITTER, 'Twitter'],
])

const PROVIDER_ICONS = new Map([
  [FACEBOOK, <Icons.Facebook />],
  [GITHUB, <Icons.GitHub />],
  [GOOGLE_PLUS, <Icons.GooglePlus />],
  [LINKEDIN, <Icons.LinkedIn />],
  [TWITTER, <Icons.Twitter />],
])

const getProvider = memoize(url => {
  for (const [provider, regex] of PROVIDER_REGEXP) {
    if (regex.test(url)) {
      return provider
    }
  }
  return null
})

const HOC = compose(
  setPropTypes({
    children: PropTypes.node,
    link: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    showName: PropTypes.bool,
  }),

  withConfig({
    social: {
      i18n: {
        visitOn: 'Visit on',
      }
    }
  }),

  mapProps(({ config, className, ...rest }) => ({
    ...rest,
    config: { ...config.social },
    className: cx({
      [className]: className,
      [styles.item]: true,
    }),
  })),

  onlyUpdateForKeys('link'),
)

const Component = ({ link, title, showName, config, children, ...rest }) => {
  const provider = getProvider(link)
  const name = PROVIDER_NAMES.get(provider)

  if (!title) {
    title = `${ config.i18n.visitOn} ${ name }.`
  } else if (typeof title === 'function') {
    title = title(name)
  }

  return (
    <a { ...rest } target="_blank" href={ link } title={ title }>
      { PROVIDER_ICONS.get(provider) }
      { children }
      { showName && name }
    </a>
  )
}

export const SocialItem = HOC(Component)
