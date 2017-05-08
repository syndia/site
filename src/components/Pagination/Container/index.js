/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React, { Children, cloneElement } from 'react'
import {
  compose,
  lifecycle,
  withHandlers,
  withState,
} from 'recompose'

/**
 * Module dependencies
 */
import PaginationControls from '../Controls'
import PaginationHeader from '../Header'

const initialState = {
  first: 10,
  offset: 0,
}

const withPagination = InnerComponent => compose(
  withState( 'pagination', 'setPagination', initialState ),
  withHandlers( {
    updatePagination: ( { pagination, setPagination, first, offset } ) => () => setPagination( { ...pagination, first, offset } )
  } ),
)( InnerComponent )

const enhance = compose(
  withPagination,
  lifecycle( {
    componentWillReceiveProps( nextProps ) {
      if ( this.props.offset !== nextProps.offset && this.props.onChange ) {
        this.props.onChange( nextProps )
      }
    }
  } ),
)

const PaginationContainer = ( { isLoading, children, ...rest } ) => (
  <div>
    <PaginationHeader { ...rest } />
    { Children.map( children, child => cloneElement( child, {
      ...child.props,
      ...rest,
    } ) ) }
    <footer>
      { isLoading && <span className="spinner">...loading...</span> }
      <PaginationControls { ...rest } />
    </footer>
  </div>
)

export default enhance( PaginationContainer )