/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import {
  componentFromProp,
  compose,
  defaultProps,
  mapProps,
  setDisplayName,
  setPropTypes,
  withHandlers,
} from 'recompose'
import cx from 'classNames'

/**
 * Style dependencies
 */
import styles from './index.css'

export default compose(
  setDisplayName( 'Thumbnail' ),
  setPropTypes( {
    active: PropTypes.bool,
    index: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
  } ),
  defaultProps( {
    component: 'div',
  } ),
  mapProps( ( { active, className, src, ...rest } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.active ]: active,
    } )

    const style = {
      backgroundImage: `url("${ src }")`
    }

    return {
      ...rest,
      className: classes,
      style,
    }
  } ),
  withHandlers( {
    onClick: props => event => {
      event.preventDefault()
      event.stopPropagation()
      props.onClick( props.index )
    }
  } ),
)( componentFromProp( 'component' ) )
