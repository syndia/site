import { DOM } from 'react'
import { compose, lifecycle, mapProps, onlyUpdateForKeys, pure, withState } from 'recompose'
import { omit } from 'lodash'
import cx from 'classnames'

import { loadImage } from '../../utilities/image'

import styles from './index.css'

const HOC = compose(
  pure,

  withState('isLoading', 'setIsLoading', true),
  withState('isMounted', 'setIsMounted', true),

  lifecycle({
    componentWillMount() {
      loadImage(this.props.src).then(this.props.setIsLoading(false) && this.props.setIsMounted(true))
    },

    componentWillUnmount() {
      this.props.setIsMounted(false)
    }
  }),

  mapProps(props => omit(props, ['placeholder', 'setIsLoading', 'isMounted', 'setIsMounted'])),
  mapProps(({ src, index, isLoading, className, ...rest }) => ({
    ...rest,
    key: index && `image-${ index }`,
    src: isLoading ? void 0 : src,
    className: cx({
      [className]: className,
      [styles.root]: true,
      [styles.loading]: isLoading,
      [styles.loaded]: !isLoading,
    }),
  })),

  onlyUpdateForKeys(['src']),
)

export default HOC(DOM.img)
