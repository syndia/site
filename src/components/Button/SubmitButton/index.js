/**
 * External dependencies
 */
import {
  Children,
} from 'react'
import {
  compose,
  defaultProps,
  mapProps,
  setDisplayName,
} from 'recompose'
import cx from 'classnames'

/**
 * Module dependencies
 */
import Button from '../DefaultButton'

/**
 * Style dependencies
 */
import styles from './index.css'

export default compose(
  setDisplayName( 'SubmitButton' ),
  defaultProps( {
    isSubmitting: false,
    isPrimary: true,
    type: 'submit'
  } ),
  mapProps( ( {
    isSubmitting, isPrimary,
    className, children, ...rest,
  } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.button ]: true,
    } )
    const defaultButtonAction = isSubmitting ? 'Saving' : 'Save'

    return {
      ...rest,
      primary: isPrimary,
      className: classes,
      children: Children.count( children ) ? children : defaultButtonAction,
    }
  } ),
)( Button )
