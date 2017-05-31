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
} from '../../internals/DateTime'

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

const Details = ( { __url, date, description }) => (
  <div>
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

const CompactDetails = () => (
  <div className={ styles.compact }>
    <div className={ styles.image }></div>
  </div>
)

const PagePreview = ( { __url, title, date, description, compact = false } ) => (
  <div className={ styles.wrapper }>
    <Link to={ __url } className={ styles.title }>
      { title }
    </Link>
    { ! compact
        ? <Details __url={ __url } date={ date } description={ description } />
        : <CompactDetails />
    }
  </div>
)

export default enhance( PagePreview )
