/**
 * External dependencies
 */
import React from 'react'
import PropTypes from 'prop-types'
import {} from 'recompose'
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
 * Style dependencies
 */
import styles from './index.css'

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

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
