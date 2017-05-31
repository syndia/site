import React from'react'
import { compose, defaultProps, setDisplayName, withHandlers } from 'recompose'
import { defer, noop } from 'lodash'

import { BaseDialog } from './Base'

const HOC = compose(
  setDisplayName('Dialog'),

  defaultProps({
    isVisible: false,
    leaveTimeout: 200,
    onClosed: noop,
  }),

  withHandlers({
    onDialogClose: ({ onClose }) => action => {
      if (onClose) onClose(action)
    },
    checkOnClosed: ({ onClosed, ref }) => () => {
      if (null === ref) defer(onClosed)
    }
  }),
)

const Component = ({ checkOnClosed, ...rest }) => (
  <BaseDialog
    { ...rest }
    ref={ checkOnClosed }
    key="dialog"
  />
)

export const Dialog = HOC(Component)
