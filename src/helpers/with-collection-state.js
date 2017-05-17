/**
 * External dependencies
 */
import {
  compose,
  withHandlers,
  withState,
} from 'recompose'

export default compose(
  withState( 'currentItem', 'setCurrentItem', 0 ),
  withHandlers( {
    getPreviousItem: ( { currentItem, setCurrentItem } ) => () => setCurrentItem( currentItem - 1 ),
    getNextItem: ( { currentItem, setCurrentItem } ) => () => setCurrentItem( currentItem + 1 ),
    getItem: ( { setCurrentItem } ) => index => setCurrentItem( index ),
  } ),
)
