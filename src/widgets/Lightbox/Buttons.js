import React from 'react'
import { compose, setDisplayName, withProps } from 'recompose'

import { Button } from '../../internals/Button'
import { INCOGNITO } from '../../internals/Button/kinds'
import { ChevronIcon, XIcon } from '../../components/Svg/Icon'

export const CloseButton = compose(
  setDisplayName('LightboxCloseButton'),
  withProps({ kind: INCOGNITO, children: <XIcon size={ 24 } strokeWidth={ 1 } /> }),
)(Button)

export const NextButton = compose(
  setDisplayName('LightboxNextButton'),
  withProps({ kind: INCOGNITO, children: <ChevronIcon size={ 32 } right /> }),
)(Button)

export const PreviousButton = compose(
  setDisplayName('LightboxPreviousButton'),
  withProps({ kind: INCOGNITO, children: <ChevronIcon size={ 32 } left /> }),
)(Button)
