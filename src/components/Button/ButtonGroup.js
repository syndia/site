/* eslint-disable react/prop-types */

/**
 * External dependenies
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  withContext,
} from 'recompose'
import cx from 'classnames'

/**
 * Module dependencies
 */
import {
  buttonGroupPropTypes as withPropTypes,
} from './prop-types'
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
  withContext(
    { buttonGroup: PropTypes.bool },
    ( /* props */ ) => ( { buttonGroup: true } ),
  ),
)( ButtonGroup )
