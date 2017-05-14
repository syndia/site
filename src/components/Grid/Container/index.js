/**
 * External dependencies
 */
import {
  compose,
  componentFromProp,
  defaultProps,
  mapProps,
  setDisplayName,
} from 'recompose'
import cx from 'classnames'
import {
  template,
} from 'grid-template-parser'

/**
 * Internal dependencies
 */
import {
  withBounds,
} from '../../../helpers'

/**
 * Module dependencies
 */
//import Track from './Track'

/**
 * Style dependencies
 */
import styles from './index.css'

export default compose(
  withBounds( 'root', 'setRootElement' ),
  withBounds( 'screen' ),

  setDisplayName( 'GridContainer' ),
  defaultProps( {
    component: 'div',
    height: 'auto',
  } ),
  mapProps( ( {
    grid,
    templateRows, templateColumns, templateAreas,
    gap, rowGap, columnGap,
    autoRows, autoColumns, autoFlow,
    justifyItems, justifyContent,
    alignItems, alignContent,
    tracks,
    screen, root, boundsElement, setRootElement,
    className, ...rest,
  } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.grid ]: true,
    } )

    const cache = tracks

    if ( cache && cache.bigScreen ) {
      if ( root && root.width > 500 ) {
        tracks = cache.bigScreen
      } else {
        tracks = cache.smallScreen
      }
    }

    const gridTemplateRows = /* tracks && `repeat(${ tracks.height }, 1fr)` || */ templateRows
    const gridTemplateColumns = tracks && `repeat(${ tracks.width }, 1fr)` || templateColumns
    const gridTemplateAreas = tracks && template( tracks ) || templateAreas

    const style = {
      grid,
      gridTemplateRows,
      gridTemplateColumns,
      gridTemplateAreas,
      gridAutoRows: autoRows,
      gridAutoColumns: autoColumns,
      gridAutoFlow: autoFlow,
      gridRowGap: rowGap,
      gridColumnGap: columnGap,
      gridGap: gap,
      justifyContent,
      justifyItems,
      alignContent,
      alignItems,
    }

    return {
      ...rest,
      className: classes,
      ref: setRootElement,
      style,
    }
  } ),
)( componentFromProp( 'component' ) )
