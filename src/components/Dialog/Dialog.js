/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  bool,
  number,
  func,
} from 'prop-types'
import {
  compose,
  defaultProps,
  setDisplayName,
  setPropTypes,
  withHandlers,
} from 'recompose'
import {
  defer,
  noop,
} from 'lodash'

/**
 * Internal dependencies
 */
//import RootChild from '../RootChild'

/**
 * Module dependencies
 */
import DialogBase from './Base'

const DialogComponent = ( { className, checkOnClosed, onDialogClose, ...rest } ) => (
    <DialogBase
      { ...rest }
      ref={ checkOnClosed }
      key="dialog"
      onDialogClose={ onDialogClose }
      className={ className }
    />
)

export default compose(
  setDisplayName( 'Dialog' ),
  setPropTypes( {
    isVisible: bool,
    leaveTimeout: number,
    onClose: func,
    onClosed: func,
  } ),
  defaultProps( {
    isVisible: false,
    leaveTimeout: 200,
    onClosed: noop,
  } ),
  withHandlers( {
    onDialogClose: ( { onClose } ) => action => {
      if ( onClose ) {
        onClose( action )
      }
    },
    checkOnClosed: ( { onClosed, ref } ) => () => {
      if ( null === ref ) {
        defer( onClosed )
      }
    },
  } ),
)( DialogComponent )
