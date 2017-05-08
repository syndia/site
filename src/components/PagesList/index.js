/* eslint-disable react/prop-types */

/**
 * External dependenies
 */
import React from 'react'
import {
  compose,
} from 'recompose'

/**
 * Internal dependencies
 */
import PagePreview from '../PagePreview'

/**
 * Module dependencies
 */
import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import styles from "./index.css"

const enhance = compose(
  withPropTypes,
)

const PagesList = ( { pages, compact } ) => {
  return (
    <div>
      {
      pages.length
      ? (
        <ul className={ styles.list }>
          {
          pages.map( page => (
            <li key={ page.title }><PagePreview compact={ compact } { ...page } /></li>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

export default enhance( PagesList )
