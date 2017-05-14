/* eslint-disable react/prop-types, react/display-name */

/**
 * External dependencies
 */
import React from 'react'
import createFragment from 'react-addons-create-fragment'
import {
  isArray,
  isObject,
} from 'lodash'
import {
  Link,
} from 'phenomic'

const createDescriptionFragments = description => {
  if ( isArray( description ) ) {
    return description.map( item => <dd>{ item }</dd> )
  }

  return <dd>{ description }</dd>
}

const createTermFragment = ( term, descriptions ) => {
  if ( isObject( descriptions ) && descriptions.href ) {
    term = <Link to={ descriptions.href }>{ term }</Link>
    descriptions = descriptions.descriptions
  }

  return createFragment( {
    term: <dt>{ term }</dt>,
    descriptions: createDescriptionFragments( descriptions ),
  } )
}

export const createDescriptionsList = descriptionList => {
  const terms = Object.keys( descriptionList )

  return (
    <dl>
      { terms.map( term => createTermFragment( term, descriptionList[ term ] ) ) }
    </dl>
  )
}
