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

import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  setDisplayName( 'Button' ),
  withPropTypes,
  defaultProps( {
    component: 'button',
  } ),
  mapProps( props => omit( props, 'buttonGroup' ) ),
  mapProps( ( {
    primary, secondary, big, svg,
    currentColor, transparent ,black, grey, white,
    className, children, ...rest,
  } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.button ]: true,
      [ styles.primary ]: primary,
      [ styles.secondary ]: secondary,
      [ styles.svg ]: svg,
      [ styles.black ]: black,
      [ styles.grey ]: grey,
      [ styles.white ]: white,
      [ styles.transparent ]: transparent,
      [ styles.big ]: big,
      [ styles.currentColor ]: currentColor,
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
