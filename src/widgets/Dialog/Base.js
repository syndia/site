import Modal from 'react-modal'
import { compose, defaultProps, mapProps, setDisplayName, withHandlers } from 'recompose'
import cx from 'classnames'

import styles from './index.css'

const HOC = compose(
  setDisplayName('BaseDialog'),

  defaultProps({
    autoFocus: true,
    isFullScreen: true,
    label: '',
  }),

  mapProps(({
    close, isFullScreen, isVisible, label, leaveTimeout,
    className, ...rest,
  }) => ({
    ...rest,
    className: cx({ [className]: className, [styles.root]: true }),
    overlayClassName: cx({ [styles.backdrop]: true, [styles.fullScreen]: isFullScreen }),
    isOpen: isVisible,
    onRequestClose: close,
    closeTimeoutMS: leaveTimeout,
    contentLabel: label,
    role: 'dialog',
  })),

  withHandlers({
    close: props => action => {
      if (props.onDialogClose) props.onDialogClose(action)
    },
  }),
)

export const BaseDialog = HOC(Modal)
