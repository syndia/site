import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, mapProps, setDisplayName, setPropTypes } from 'recompose'

import { Button } from '../Button'
import { SUBTILE } from '../Button/kinds'
import { ChevronIcon, MinusIcon, PlusIcon } from '../../components/Svg/Icon'

const ICONS = new Map([
  [false, new Map([
    [true, <MinusIcon />],
    [false, <PlusIcon />],
  ])],
  [true, new Map([
    [true, <ChevronIcon up />],
    [false, <ChevronIcon down />],
  ])],
])

export default compose(
  setDisplayName('ExpandButton'),

  setPropTypes({
    isExpanded: PropTypes.bool.isRequired,
    chevron: PropTypes.bool,
  }),
  defaultProps({
    isExpanded: false,
    chevron: false,
  }),

  mapProps(({ chevron, isExpanded, ...rest }) => ({
    ...rest,
    kind: SUBTILE,
    icon: ICONS.get(chevron).get(isExpanded),
  })),
)(Button)
