/**
 * External dependencies
 */
import React from 'react'
import {
  branch,
  compose,
  renderNothing,
} from 'recompose'
import cx from 'classNames'

/**
 * Style dependencies
 */
import classes from './index.css'

const ImageCounter = ( { current, seperator, total } ) => (
  <div className={ cx( classes.counter ) }>
    { current }
    { seperator }
    { total }
  </div>
)

const FigureFooter = ( {
  caption,
  showCount, countCurrent, countSeperator, countTotal,
  ...rest
} ) => (
  <footer { ...rest }>
    { caption && (
        <figcaption className={ cx( classes.caption ) }>
          { caption }
        </figcaption>
    ) }
    { showCount && (
        <ImageCounter
          current={ countCurrent }
          seperator={ countSeperator }
          total={ countTotal }
        />
    ) }
  </footer>
)

export default compose(
  branch(
    ( { caption, showCount } ) => ! caption || ! showCount,
    renderNothing,
  ),
)( FigureFooter )
