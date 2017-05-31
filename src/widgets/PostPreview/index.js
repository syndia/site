/* eslint-disable react/prop-types */

import React from 'react'
import {
  compose, mapProps,
  pure, setDisplayName, withHandlers,
} from 'recompose'
import cx from 'classnames'

import { withConfig, withHooks } from '../../helpers'
import { DateComponent } from '../../internals/DateTime'

import styles from './index.css'

const Author = ({ name, text, config, ...rest }) => config.display && Boolean(name) && (
  <span className={ cx(styles.author) } { ...rest }>
    { text && `${ text } ` }
    { name }
  </span>
)

const Title = ({ text, config, ...rest }) => config.display && Boolean(text) && (
  <h2 className={ cx(styles.title) } { ...rest }>
    { text }
  </h2>
)

const Description = ({ text, config, ...rest }) => config.display && Boolean(text) && (
  <section className={ cx(styles.description) } { ...rest }>
    { text }
  </section>
)

const ReadMore = ({ text, config, ...rest }) => config.display && Boolean(text) && (
  <span className={ cx(styles.more) } { ...rest }>
    { text }
  </span>
)

export const HOC = compose(
  setDisplayName('Post'),

  pure,

  withConfig({
    title: {
      lines: 3,
      display: true,
    },
    description: {
      line: 3,
      display: true,
    },
    author: {
      display: true,
    },
    date:{
      display: true,
    },
    tags: {
      display: true,
    },
    more: {
      display: true,
    }
  }),

  mapProps(({ config, __url, ...rest }) => ({ ...rest, config, postUrl: __url })),

  withHandlers({
    onClick: ({ onClick, ...rest }) => event => {
      if (onClick) {
        event.preventDefault()
        return onClick(rest)
      }
    }
  }),

  withHooks('item'),
)

export const Component = (({
  postUrl,
  title,
  description,
  authors,
  date,
  tags,
  onClick,
  config,
}) => (
  <a
    onClick={ onClick }
    href={ postUrl }
    className={ cx({
      [styles.root]: true,
      [styles.simple]: config.compact,
      [styles.featured]: config.featured,
    }) }
  >
    <article className={ styles.preview }>
      <header>
        {
          !config.featured &&
          <div className={ styles.meta }>
            {
              authors && authors.length > 0 &&
              <Author name={ authors[0] } config={ config.author } />
            }
            {
              config.date.display &&
              <DateComponent value={ new Date(date) } />
            }
          </div>
        }
        <Title text={ title } config={ config.title } />
      </header>
      <Description text={ description } config={ config.description } />
      {
        !config.compact && config.featured && <ReadMore text={ config.i18n.more } config={ config.more } />
      }
      {
        config.tags.display && tags && Boolean(tags.totalTags) &&
        <footer className={ styles.footer }>
        </footer>
      }
    </article>
  </a>
))

export const PostPreview = HOC(Component)
