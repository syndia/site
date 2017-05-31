import React from 'react'
import { compose, mapProps, setDisplayName } from 'recompose'
import cx from 'classnames'

import Image from '../../internals/Image'

import styles from './index.css'

const HOC = compose(
  setDisplayName('Tile'),
  mapProps(({ className, ...rest }) => ({
    ...rest,
    className: cx({ [className]: className, [styles.tyle]: true }),
  })),
)

const Component = ({ className, gap, width, height, index, image, openLightbox }) => (
  <a
    href={ image.src }
    onClick={ event => openLightbox(index, event)}
    className={ className }
    style={ {
      height,
      padding: `${ gap.column }${ gap.unit } ${ gap.row }${ gap.unit }`,
    } }
  >
    <Image
      key={ `image-${ index }-${ image.src }` }
      src={ image.thumbnail }
      index={ index }
      width={ width }
      height={ height }
      className={ styles.thumbnail }
    />
  </a>
)

export const Tile = HOC(Component)
