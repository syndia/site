/**
 * External dependencies
 */
import {
  componentFromProp,
  compose,
  defaultProps,
  setDisplayName,
  mapProps,
} from 'recompose'
import cx from 'classnames'

/**
 * Style dependencies
 */
import styles from './container.css'

export default compose(
  setDisplayName( 'GalleryContainer' ),
  defaultProps( {
    component: 'div',
    gap: { column: 0.5, row: 0.5, unit: 'rem' }
  } ),
  mapProps( ( { className, gap, ...rest } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.container ]: true,
    } )

    return {
      ...rest,
      className: classes,
      style: {
        padding: `${ gap.column }${ gap.unit } ${ gap.row }${ gap.unit }`,
      }
    }
  } ),
)( componentFromProp( 'component' ) )
