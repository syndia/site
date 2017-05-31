import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, mapProps, setPropTypes, withHandlers } from 'recompose'
import { noop } from 'lodash'
import cx from 'classnames'

import { Card } from '../../internals/Card'
import { CallToAction } from '../../internals/CallToAction'

import styles from './index.css'

// [TODO]: branch to dismiss card  @see wp-calypso
const HOC = compose(
  setPropTypes({
    dismissTemporary: PropTypes.bool,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    callToAction: PropTypes.string,
    className: PropTypes.string,
    description: PropTypes.string,
    dismissPreferenceName: PropTypes.string,
    event: PropTypes.string,
    to: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
  }),

  defaultProps({ dismissTemporary: false, onClick: noop }),

  mapProps(({ className, ...rest }) => ({
    ...rest,
    className: cx({ [className]: className, [styles.root]: true })
  })),

  withHandlers({
    handleClick: ({ onClick }) => event => {
      if (onClick) { onClick(event) }
    }
  }),

  /*
  branch(
    ({ dismissPreferenceName }) => dismissPreferenceName,
    renderComponent(DismissibleCard),
  )
  */
)

const Component = ({
  callToAction, icon, to, handleClick, className,
  title, description, list
}) => (
  <Card
    className={ className }
    to={ callToAction ? '' : to }
    onClick={ callToAction ? noop : handleClick }
  >
    <CallToAction
      title={ title }
      description={ description }
      text={ callToAction }
      list={ list }
      onClick={ handleClick }
    />
    { icon }
  </Card>
)

export const Banner = HOC(Component)
