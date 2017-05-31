/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  defaultProps,
} from 'recompose'
import cx from 'classnames'

/**
 * Style dependencies
 */
import styles from './index.css'

const HOC = compose(
  defaultProps( {
    instanceId: 0,
    size: 16,
  } ),
)

const Spinner = ( { instanceId, size, ...rest } ) => (
  <svg
    { ...rest }
    xmlns="http://www.w3.org/2000/svg"
    width={ size }
    height={ size }
    fill='none'
    className={ styles.spinner }
    xmlSpace="preserve"
  >
		<defs>
			<mask id={ `maskBorder${ instanceId }` }>
				<rect x="0" y="0" width="100%" height="100%" fill="white" />
				<circle r="46%" cx="50%" cy="50%" fill="black" />
			</mask>
			<mask id={ `maskDonut${ instanceId }` }>
				<rect x="0" y="0" width="100%" height="100%" fill="black" />
				<circle r="46%" cx="50%" cy="50%" fill="white" />
				<circle r="30%" cx="50%" cy="50%" fill="black" />
			</mask>
			<mask id={ `maskLeft${ instanceId }` }>
				<rect x="0" y="0" width="50%" height="100%" fill="white" />
			</mask>
			<mask id={ `maskRight${ instanceId }` }>
				<rect x="50%" y="0" width="50%" height="100%" fill="white" />
			</mask>
		</defs>
		<circle
			className={ styles.spinner__border }
			r="50%"
			cx="50%"
			cy="50%"
			mask={ `url( #maskBorder${ instanceId } )` }
		/>
		<g mask={ `url( #maskDonut${ instanceId } )` }>
			<g mask={ `url( #maskLeft${ instanceId } )` }>
				<rect
					className={ cx( [ styles.spinner__progress, 'is-left' ] ) }
					x="0"
					y="0"
					width="50%"
					height="100%"
					style={ { animationName: 'rotate-spinner__left', transformOrigin: `${ size / 2 }` } }
				/>
			</g>
			<g mask={ `url( #maskRight${ instanceId } )` }>
				<rect
					className={ cx( [ styles.spinner__progress, 'is-right' ] ) }
					x="50%"
					y="0"
					width="50%"
					height="100%"
					style={ { animationName: 'rotate-spinner__right', transformOrigin: `${ size / 2 }` } }
				/>
			</g>
		</g>
  </svg>
)

export default HOC(Spinner)
