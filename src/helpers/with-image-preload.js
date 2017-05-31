import {
  branch,
  compose,
  lifecycle,
  mapProps,
  renderComponent,
  withHandlers,
  withState,
} from 'recompose'
import {
  isArray,
} from 'lodash'

import { loadImage } from '../utilities/image'
import withLoadingState from './with-loading-state'

export default compose(
  withLoadingState,

  mapProps(({ isLoaded, onLoad, ...rest }) => ({
    ...rest,
    isReady: isLoaded,
    onSuccess: onLoad,
  })),

  withState('isMounted', 'setIsMounted', false),

  branch(
    ({ loadingIndicator, isReady }) => loadingIndicator && !isReady,
    ({ loadingIndicator }) => renderComponent(loadingIndicator),
  ),

  withHandlers({
    loadImages: () => sources => {
      const collection = isArray(sources) ? sources : [sources]
      const promises = collection.map( source => loadImage(source.src || source ))
      return Promise.all(promises).catch(error => {
        console.warn(error.message) // eslint-disable-line no-console
      })
    },

    handleSuccess: ({ isReady, isMounted, onSuccess }) => () => {
      if (isReady || ! isMounted) { return }
      if (onSuccess) { onSuccess() }
    },
    handleError: ({ isMounted, hasError, onError }) => () => {
      if (! hasError || ! isMounted) { return }
      if (onError) { onError() }
    },
  } ),

  lifecycle( {
    componentDidMount() {
      this.props.setIsMounted(true)
      if (!this.props.isReady) {
        this.props.loadImages(this.props.images)
          .then(this.props.handleSuccess, this.props.handleError)
      }
    },

    componentWillUnmount() {
      this.props.setIsMounted(false)
    }
  }),
)
