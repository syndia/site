/**
 * External dependencies
 */
import {
  componentFromProp,
  compose,
  defaultProps,
  mapProps,
  setDisplayName,
} from 'recompose'
import cx from 'classnames'

//import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  setDisplayName( 'Card' ),
  //withPropTypes,
  defaultProps( { tagName: 'div' } ),
  mapProps( ( {
    className, href, isCompact, tagName,
    ...rest,
  } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.card ]: true,
      [ styles.link ]: Boolean( href ),
      [ styles.compact ]: isCompact,
    } )

    return {
      ...rest,
      component: href ? 'a' : tagName,
      className: classes,
    }
  } ),
)

export default enhance( componentFromProp( 'component' ) )
