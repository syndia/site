/* eslint-disable react/prop-types */
/**
 * External dependencies
 */
import React from 'react'
import {
  Link,
} from 'phenomic'

const Header = ( { categories } ) => (
  <div style={ { gridArea: 'header', justifySelf: 'auto', alignSelf: 'auto' } }>
    <Link to={ "/categories/all" }>All</Link>{ ", "}
    {
      categories &&
      categories.map( category => (
        { category }
      ) )
    }
  </div>
)

export default Header
