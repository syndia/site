/**
 * External dependencies
 */
import {
  bool,
  string,
} from 'prop-types'
import Modal from 'react-modal'
import {
  compose,
  defaultProps,
  mapProps,
  setDisplayName,
  setPropTypes,
  withHandlers,
} from 'recompose'
import cx from 'classnames'

/**
 * Internal dependencies
 */
import {
} from '../../helpers'

/**
 * Style dependencies
 */
import styles from './index.css'

const enhance = compose(
  setDisplayName( 'BaseDialog' ),
  setPropTypes( {
    autoFocus: bool,
    isFullScreen: bool,
    isVisible: bool,
    label: string,
  } ),
  defaultProps( {
    autoFocus: true,
    isFullScreen: true,
    label: '',
  } ),
  mapProps( ( {
    close, isFullScreen, isVisible, label, leaveTimeout,
    className, ...rest,
  } ) => {
    const classes = cx( {
      [ className ]: className,
      [ styles.card ]: true,
    } )

    const overlayClasses = cx( {
      [ styles.backdrop ]: true,
      [ styles.fullScreen ]: isFullScreen,
    } )

    return {
      ...rest,
      className: classes,
      overlayClassName: overlayClasses,
      isOpen: isVisible,
      onRequestClose: close,
      closeTimeoutMS: leaveTimeout,
      contentLabel: label,
      role: 'dialog'
    }
  } ),
  withHandlers( {
    close: props => action => {
      if ( props.onDialogClose ) {
        props.onDialogClose( action )
      }
    },
  } ),
)

export default enhance( Modal )
