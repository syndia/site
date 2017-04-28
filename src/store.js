/**
 * External dependencies
 */
import {
  combineReducers,
} from 'redux'
import createStore from 'phenomic/lib/redux/createStore'
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from 'phenomic/lib/redux/modules'

const isBrowser = typeof window === 'object'

const extraMiddlewares = []

const enhancers = [
  isBrowser && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
].filter( Boolean )

const appReducer = combineReducers( {
  ...phenomicReducers,
} )

const store = createStore(
  appReducer,
  { ...( isBrowser ) && window.__INITIAL_STATE__ },
  extraMiddlewares,
  enhancers,
)

export default store
