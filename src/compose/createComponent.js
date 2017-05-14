/**
 * External dependencies
 */
import {
  DOM
} from 'react'
import { node } from 'prop-types'
import {
  compose,
  setDisplayName,
  setPropTypes,
  withProps,
} from 'recompose'

export default ( {
  component = DOM.div,
  name,
  propTypes = { children: node },
  className,
} ) => compose(
  setDisplayName( name ),
  setPropTypes( propTypes ),
  withProps( { className } ),
)( component )
