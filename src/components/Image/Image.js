/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import { DOM } from 'react'
import {
  compose, lifecycle, mapProps,
  onlyUpdateForKeys, pure, withState,
} from 'recompose'
import { omit } from 'lodash'
import cx from 'classnames'

import { canUseDom } from '../../utilities/dom'

import styles from './image.css'

const ImageComponent = compose(
  pure,

  withState('isLoading', 'setIsLoading', true),
  withState('isMounted', 'setIsMounted', true),

  lifecycle({
    componentWillMount() {
      const img = canUseDom() ? new Image() : {}
      img.onload = () => this.props.isMounted && this.props.setIsLoading(false)
    },
    componentWillUnmount() {
      this.props.setIsMounted(false)
    }
  }),

  mapProps(props => omit(props, ['placeholder', 'setIsLoading', 'isMounted', 'setIsMounted'])),
  mapProps(({ index, isLoading, className, src, ...rest }) => ({
    ...rest,
    key: index && `image-${ index }`,
    src: /* isLoading ? void 0 : */ src,
    className: cx(className, isLoading && styles.loading || styles.loaded)
  })),

  onlyUpdateForKeys(['src']),
)(DOM.img)

export default ImageComponent
