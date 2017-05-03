/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
} from 'recompose'
import {
  Link
} from 'phenomic'

/**
 * Internal dependencies
 */
import Button from '../../components/Button'
import {
  DateComponent,
} from '../../components/DateTime'

/**
 * Module dependencies
 */
import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  withPropTypes,
)

const PagePreview = ( { __url, title, date, description } ) => (
  <div className={ styles.wrapper }>
    <Link to={ __url } className={ styles.title }>
      { title }
    </Link>
    <div className={ styles.meta }>
      {
        date && <DateComponent value={ new Date( date ) } />
      }
    </div>
    <div className={ styles.description }>
      { description }
      { " " }
    </div>
    <Button
      component={ Link }
      to={ __url }
      secondary
      className={ styles.readMore }
    >
      { "Read More →" }
    </Button>
  </div>
)

export default enhance( PagePreview )
