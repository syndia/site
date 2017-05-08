/* eslint-disable react/prop-types */

/**
 * External dependenies
 */
import React from 'react'
import {
  compose,
} from 'recompose'
import cx from 'classnames'

/**
 * Module dependencies
 */
import withPropTypes from './prop-types'
import {
  withButtonGroupContext as withContext,
} from './context'
/**
 * Style dependencies
 */
import styles from './index.css'

const ButtonGroup = ( {
  className,
  children,
  ...rest,
} ) => {
  const classes = cx( {
    [ className ]: className,
    [ styles.group ]: true,
  } )

  return (
    <div { ...rest } className={ classes }>
      { children }
    </div>
  )
}

export default compose(
  withPropTypes,
  withContext,
)( ButtonGroup )
