import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, setDisplayName, setPropTypes, withProps } from 'recompose'
import { noop } from 'lodash'

import { Button } from '../Button'
import { INCOGNITO } from '../Button/kinds'
import { BurgerIcon } from '../../components/Svg/Icon'

const HOC = compose(
  setDisplayName('BurgerButton'),

  setPropTypes({
    onClick: PropTypes.func.isRequired,
  }),

  defaultProps({ onClick: noop }),

  withProps({
    kind: INCOGNITO,
    children: <BurgerIcon />
  })
)

export const BurgerButton = HOC(Button)
