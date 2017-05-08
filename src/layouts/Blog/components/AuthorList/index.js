/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  Link,
} from 'phenomic'

/**
 * Internal dependencies
 */

const AuthorsList = ( { authors } ) => (
  <ul>
    {
      authors.map( author => (
        <li key={ author }>
          <Link to={ `/blog/author/${ encodeURIComponent( author ) }` }>
            { author }
          </Link>
        </li>
      ) )
    }
  </ul>
)

export default AuthorsList
