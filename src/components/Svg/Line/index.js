/* eslint-disable react/prop-types */

// [TODO]: styling

/**
 * External dependencies
 */
import React from 'react'

/**
 * Module dependencies
 */
import styles from './index.css'

const line = ( ...args ) => args.map(
  ( [ x, y ], i ) => {
    return i === 0
      ? `M${ x } ${ y }`
      : x === 'z'
        ? 'z'
        : `L${ x } ${ y }`
  }
).join( ' ' )

export const Line = ( {
  path,
  paths = [],
  size = 16,
  stroke = 'currentColor',
  strokeWidth = 2,
  style,
  debug,
  ...rest,
} ) => {
  const sx = {
    display: 'inline-block',
    verticalAlign: 'middle',
    overflow: 'visible',
    ...style,
  }

  return (
    <svg
      { ...rest }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={ size }
      height={ size }
      fill='none'
      stroke={ stroke }
      strokeWidth={ strokeWidth }
      style={ sx }
    >
      <g className={ styles.line } fill="none">
        { path && <path d={ line( ...path ) } /> }
        { paths.map( ( p, i ) => <path key={ Number( i ) * 1 } d={ line( ...p ) } /> ) }
      </g>
      {
        debug &&
          <g className={ styles.debug } strokeWidth={ 1 / 8 } opacity={ 1 / 2 } stroke="magenta">
            <path d={ line( [ 0, 0 ], [ 16, 16 ], [ 0, 16 ], [ 'z' ] ) } />
            <path d={ line( [ 8, 0 ], [ 8, 16 ] ) } />
            <path d={ line( [ 0, 8 ], [ 16, 8 ] ) } />
          </g>
      }
    </svg>
  )
}

export default Line
