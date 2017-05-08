/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  mapProps,
  pure,
  withHandlers,
  withProps,
} from 'recompose'
import {
  flow,
  omit,
  range,
} from 'lodash'

/**
 * Internal dependencies
 */
import Button, { ButtonGroup } from '../../Button'

const getRange = ( offset, total ) => {
  const min = offset - 3
  const max = offset + 5

  return range( min < 1 ? 1 : min, max > total ? total + 1 : max )
}

const Item = flow(
  pure,
  mapProps( props => omit( props, 'offset', 'pagination', 'setPagination', 'updatePagination', 'entityType' ) ),
  withProps( { Component: Button } ),
  withHandlers( {
    onClick: ( { updatePagination, offset } ) => () => updatePagination( { offset } )
  } ),
)( ( { Component, ...rest } ) => <Component { ...rest } /> )

const PaginationControls = ( {
  showFirst,
  showLast,
  showPrevious,
  showNext,
  visiblePages,
  current,
  total,
  className,
  ...rest,
} ) => (
  <ButtonGroup className={ className }>
    { showFirst && <Item offset={ 1 } { ...rest }>{ "<<" }</Item> }
    { showPrevious && <Item offset={ current - 1 } { ...rest }>{ "<" }</Item> }
    {
      visiblePages.map( page =>
        <Item
          { ...rest }
          key={ page }
          offset={ page }
          active={ current === page }
        >
          { String( page ) }
        </Item>
      )
    }
    { showNext && <Item offset={ current + 1 } { ...rest }>{ ">" }</Item> }
    { showLast && <Item offset={ total } { ...rest }>{ ">>" }</Item> }
  </ButtonGroup>
)

export default compose(
  withProps( ( { current, total } ) => ( {
    showFirst: current !== 1,
    showLast: current !== total,
    showPrevious: current > 2,
    showNext: total -2 > current,
    visiblePages: getRange( current, total ),
  } ) ),
)( PaginationControls )
