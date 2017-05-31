import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, mapProps, setDisplayName, setPropTypes, withHandlers } from 'recompose'
import { noop, size } from 'lodash'
import cx from 'classnames'

import { Button } from '../Button'

import styles from './index.css'

const HOC = compose(
  setDisplayName('CallToAction'),

  defaultProps({ onClick: noop }),

  setPropTypes({
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    description: PropTypes.string,
    text: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
  }),

  mapProps(({ className, ...rest }) => ({
    ...rest,
    className: cx({ [className]: className, [styles.root]: true }),
  })),

  withHandlers({
    handleClick: ({ onClick }) => event => {
      if (onClick) { onClick(event) }
    }
  }),
)

const Component = ({ text, title, description, list, handleClick, className }) => (
  <div className={ className }>
    <div className={ styles.info}>
      <div className={ styles.title }>{ title }</div>
      { description &&
        <div className={ styles.description }>{ description }</div>
      }
      {
        size( list ) > 0 &&
        <ul className={ styles.list }>
          { list.map((item, index) =>
            <li key={ index }>{ item }</li>
          ) }
        </ul>
      }
    </div>
    { text &&
      <Button onClick={ handleClick }>{ text }</Button>
    }
  </div>
)

export const CallToAction = HOC(Component)
