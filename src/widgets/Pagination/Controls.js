/* eslint-disable react/prop-types */

import React from 'react'
import { compose, setDisplayName, withHandlers, withProps } from 'recompose'
import { range } from 'lodash'
import cx from 'classnames'

import withConfig from '../../helpers/with-config'
import { ButtonGroup } from '../../internals/ButtonGroup'

import { ControlItem } from './ControlItem'

import styles from './index.css'

const getRange = ({ offset, total, step }) => {
  const min = offset - step
  const max = offset + step + 1
  return range(min < 1 ? 1 : min, max > total ? total + 1 : max)
}

const HOC = compose(
  setDisplayName('PaginationControls'),

  withConfig({
    step: 2,
    i18n: {
      previousLabel: 'previous',
      nextLabel: 'next',
      breakLabel: '...',
    },
  }),

  withProps(({ current, total, config: { step } }) => ({
    showFirst: current > step + 1,
    showLast: current < total - step,
    showPrevious: current > step,
    showNext: total - step > current,
    visibleItems: getRange({ current, total,step })
  })),

  withHandlers({
    changePage: ({ onChange }) => page => onChange({ page })
  }),
)

const Component = (({
  showFirst, showLast, showPrevious, showNext, visibleItems,
  current, total,
  style, config, className, ...rest,
})  => (
  <ButtonGroup className={ cx(styles.root, className) } style={ style }>
    { showFirst && <ControlItem offset={ 1 } label={ 1 } { ...rest } /> }
    { showFirst && <ControlItem label={ config.i18n.breakLabel } disabled /> }
    { showPrevious && <ControlItem offset={ current - 1 } label={ config.i18n.previousLabel } /> }
    {
      visibleItems.map( item =>
        <ControlItem
          { ...rest }
          key={ item }
          offset={ item }
          active={ current === item }
          label={ item }
        />
      )
    }
    { showNext && <ControlItem offset={ current + 1 } { ...rest } label={ config.i18n.nextLabel } /> }
    { showLast && <ControlItem label={ config.i18n.breakLabel } disabled /> }
    { showLast && <ControlItem offset={ total } { ...rest } label={ total } /> }
  </ButtonGroup>
))

export const PaginationControls = HOC(Component)
