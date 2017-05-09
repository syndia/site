/* eslint-disable react/prop-types, react/display-name */

/**
 * External dependencies
 */
import React from 'react'
import createFragment from 'react-addons-create-fragment'
import { Link } from 'phenomic'

/**
 * Internal dependencies
 */
import navigation from '../../config/navigation'
import {
  createDescriptionsList,
} from '../DescriptionsList'

const createNavigationFragment = ( label, item ) => createFragment( {
  item: <Link to={ item.href }>{ label }</Link>
} )

const createSimpleNavigation = map => {
  const items = Object.keys( map )

  return items.map(
    label => createNavigationFragment( label, map[ label ] )
  )
}

export default ( { className, withDescriptions, ...rest } ) =>  (
  <nav { ...rest } className={ className }>
    {
      withDescriptions
        ? createDescriptionsList( navigation )
        : createSimpleNavigation( navigation )
    }
  </nav>
)
