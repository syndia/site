/* eslint-disable react/prop-types */

import React, { Children, cloneElement } from 'react'
import { compose, lifecycle, setDisplayName } from 'recompose'
import cx from 'classnames'

import withConfig from '../../helpers/with-config'

import { PaginationControls } from './Controls'

import styles from './index.css'

export const Pagination = compose(
  setDisplayName('Pagination'),

  withConfig({
    limit: 10,
    offset: 0,
    i18n: {
      previous: 'previews',
      next: 'next'
    }
  }),

  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props.offset !== nextProps.offset && this.props.onChange) {
        this.props.onChange(nextProps)
      }
    }
  }),
)(({
  current, total, metadata: { limit, offset }, entityType = 'Articles',
  style, config, className, children, ...rest,
})  => (
  <div className={ cx(styles.root, className) } style={ style }>
    <header>
      <span>Showing</span>
      <strong>
        <span> { 1 + offset }</span>
        <span>-</span>
        <span>{ offset + total < limit ? total : limit }</span>
      </strong>
      <span> of</span>
      <strong> { total.toLocaleString() }</strong>
      <span> { entityType }</span>
    </header>

    { Children.map( children, child => cloneElement( child, {
      ...child.props,
      ...rest,
    }))}

    <footer className={ styles.footer }>
      <PaginationControls
        config={ config }
        current={ Math.ceil(current / limit) + 1 }
        total={ Math.ceil(total / limit) } { ...rest }
      />
    </footer>
  </div>
))
