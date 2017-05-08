/**
 * External dependenies
 */
import React from "react"
import {
  componentFromProp,
  compose,
  defaultProps,
  mapProps,
  setDisplayName,
} from 'recompose'
import {
  omit,
} from 'lodash'
import cx from 'classnames'

/**
 * Module dependencies
 */
import {
  getButtonGroupContext,
} from '../ButtonGroup/context'
import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  getButtonGroupContext,
  setDisplayName( 'Button' ),
  withPropTypes,
  defaultProps( {
    component: 'button',
  } ),
  mapProps( props => omit( props, 'buttonGroup' ) ),
  mapProps( ( {
    big, light, primary, secondary,
    className, children, ...rest,
  } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.button ]: true,
      [ styles.big ]: big,
      [ styles.light ]: light,
      [ styles.primary ]: primary,
      [ styles.secondary ]: secondary,
    } )

    return {
      ...rest,
      className: classes,
      children: typeof children === 'string'
        ? <span role="button">{ children }</span>
        : children,
    }
  } ),
)

export default enhance( componentFromProp( 'component' ) )
