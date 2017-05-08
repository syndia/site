/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  mapProps,
  withProps,
} from 'recompose'
import cx from 'classnames'

/**
 * Internal dependencies
 */
import {
  withBackLink,
} from '../../../helpers'
import {
  ChevronIcon,
} from '../../../components/Svg/Icon'

/**
 * Module dependencies
 */
import Button from '../DefaultButton'

/**
 * Style dependencies
 */
import styles from './index.css'

export default compose(
  withBackLink,
  mapProps( ( { className, ...rest } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.goBackButton ]: true,
    } )

    return {
      ...rest,
      className: classes,
    }
  } ),
  withProps( {
    children: <ChevronIcon left size={ 24 } strokeWidth={ 1.5 } />,
  } ),
)( Button )
