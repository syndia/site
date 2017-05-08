/**
 * External dependencies
 */
import {
  compose,
  withProps,
} from 'recompose'
import {
  Link,
} from 'phenomic'

/**
 * Internal dependencies
 */
import {
  withScrollAnimation,
} from '../../../helpers'

/**
 * Module dependencies
 */
import Button from '../DefaultButton'

export default compose(
  withScrollAnimation,
  withProps( { component: Link } ),
)( Button )
