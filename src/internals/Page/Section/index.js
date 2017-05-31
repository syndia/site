import React, { createElement } from 'react'
import  PropTypes from 'prop-types'
import { compose, mapProps, setDisplayName, setPropTypes } from 'recompose'
import { range } from 'lodash'
import cx from 'classnames'

import styles from './index.css'

const HOC = compose(
  setDisplayName('Section'),

  setPropTypes({
    children: PropTypes.node.isRequired,
    hash: PropTypes.string,
    headline: PropTypes.string,
    title: PropTypes.string.isRequired,
    headingLevel: PropTypes.oneOf(range(1, 5)),
  }),

  mapProps(({ headingLevel, className, ...rest }) => ({
    ...rest,
    className: cx({ [className]: className, [styles.root]: true }),
    header: `h${ headingLevel + 1 }`,
  })),
)

const Component = ({ header, hash, title, headline, children, className, ...rest }) => (
  <section { ...rest } className={ className }>
    <header>
      { headline &&<h6 className={ styles.headline }>{ headline }</h6> }
      { createElement( header,
        { dangerouslySetInnerHTML: { __html: hash ? <a href={ `#${ hash }` }>{ title }</a> : title } },
      ) }
    </header>
    { children }
  </section>
)

export const Section = HOC(Component)
