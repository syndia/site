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
import {
  pagesListPropTypes as withPropTypes,
} from './prop-types'

/**
 * Style dependencies
 */
import styles from "./index.css"

const PagesList = ( { pages } ) => {
  return (
    <div>
      {
      pages.length
      ? (
        <ul className={ styles.list }>
          {
          pages.map( page => (
            <li key={ page.title }><PagePreview { ...page } /></li>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

const enhance = compose(
  withPropTypes,
)

export default enhance( PagesList )
