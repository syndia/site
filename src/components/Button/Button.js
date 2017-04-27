/**
 * External dependenies
 */
import React from "react"
import PropTypes from 'prop-types'
import {
  componentFromProp,
  compose,
  defaultProps,
  getContext,
  mapProps,
  setDisplayName,
  setPropTypes,
} from 'recompose'
import {
  omit,
} from 'lodash'
import cx from 'classnames'

/**
 * Module dependencies
 */
import styles from './index.css'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  big: PropTypes.bool,
  buttonGroup: PropTypes.bool,
  light: PropTypes.bool,
  secondary: PropTypes.bool,
}

const getButtonGroup = getContext( {
  buttonGroup: PropTypes.bool,
} )

const enhance = compose(
  getButtonGroup,
  setDisplayName( 'Button' ),
  setPropTypes( propTypes ),
  defaultProps( { component: 'button' } ),
  mapProps( props => omit( props, 'buttonGroup' ) ),
  mapProps( ( {
    big, light, secondary,
    className, children, ...rest,
  } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.button ]: true,
      [ styles.big ]: big,
      [ styles.light ]: light,
      [ styles.secondary ]: secondary,
    } )

    return {
      ...rest,
      children: typeof children === 'string'
        ? <span className={ classes } role="button">{ children }</span>
        : children,
    }
  } ),
)

export default enhance( componentFromProp( 'component' ) )
