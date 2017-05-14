/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  mapProps,
} from 'recompose'
import cx from 'classnames'

/**
 * Internal dependencies
 */
import {
  withHover,
} from '../../helpers'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  withHover,
  mapProps( ( {
    className,
    ...rest,
  } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.tile ]: true,
    } )

    return {
      ...rest,
      className: classes,
    }
  } ),
)

const Tile = ( { item, className, ...rest } ) => (
  <div
    { ...rest }
    key={ ( { index } ) => () => this.tile = index }
    className={ className }
  >
    <Toolbar />
    <TagsList />
    <Overlay />
    <ViewPort>
      <Image
        key={ ( { index } ) => () => this.image = index }
        src={ item.thumbnail }
        title={ item.caption }
      />
    </ViewPort>
  </div>
)
