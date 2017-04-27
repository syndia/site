/* eslint-disable react/prop-types */

/**
 * External dependenies
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  setPropTypes,
  withContext,
} from 'recompose'
import cx from 'classnames'

/**
 * Module dependencies
 */
import styles from './index.css'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

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
  setPropTypes( propTypes ),
  withContext(
    { buttonGroup: PropTypes.bool },
    ( /* props */ ) => ( { buttonGroup: true } ),
  ),
)( ButtonGroup )
