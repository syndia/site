/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'

/**
 * Module dependencies
 */
import createShapes from '../createShapes'
import Line from '../Line'

const getDirection = props => Object.keys( props ).reduce(
  ( a, b ) => a || ( props[ b ] ? b : null ), null
)

const getShape = strokeWidth => ( {
  name,
  up,
  down,
  left,
  right,
} ) => {
  const shapes = createShapes( strokeWidth )
  const direction = getDirection( { up, down, left, right } ) || 'right'

  if ( ! shapes[ name ] ) {
    return shapes.x
  }

  return shapes[ name ][ direction ] || shapes[ name ]
}

export const Icon = ( {
  name = 'x',
  up,
  down,
  left,
  right,
  ...rest,
} ) => {
  const shape = getShape( rest.strokeWidth )( { name, up, down, left, right } )

  return (
    <Line { ...rest } paths={ shape } />
  )
}

export const ArrowIcon = props => <Icon { ...props } name="arrow" />;
export const BurgerIcon = props => <Icon { ...props } name="burger" />;
export const ChevronIcon = props => <Icon { ...props } name='chevron' />;
export const MinusIcon = props => <Icon { ...props } name="minus" />;
export const PlusIcon = props => <Icon { ...props } name="plus" />;
export const XIcon = props => <Icon { ...props } name="x" />;
