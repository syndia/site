import React, { Children, cloneElement } from 'react'
import {
  branch, compose, defaultProps, mapProps, renderComponent,
  renderNothing, setDisplayName, withHandlers, withState,
} from 'recompose'
import cx from 'classnames'

import withHooks from '../../helpers/with-hooks'

import styles from './index.css'

export const Raw = ({ children, ...rest }) => (
  <div className={ cx({ [styles.content]: true, [styles.mobile]: rest.isMobile }) }>
  {
    Children.map(children, child => cloneElement(child, rest))
  }
  </div>

)

export const Wrapper = Content => compose(
  defaultProps({ isOpen: true }),

  withState('isOpen', 'toggleRegion', props => props.isOpen),

  withHandlers({
    toggleOpen: ({ isOpen, toggleRegion }) => () => toggleRegion(!isOpen),
  }),
)(({ isOpen, toggleOpen, label, ...rest }) => (
  <div className={ cx(styles.wrapper) }>
    <div className={ styles.toogle }>
      <h5 className={ cx(styles.title) }>{ label }</h5>
      <button className={ cx(styles.icon, isOpen ? 'minus' : 'plus') } onClick={ toggleOpen } />
    </div>
    { isOpen && <Content { ...rest } /> }
  </div>
))

export const HOC = (Content, WrappedContent) => compose(
  setDisplayName('GenericRegion'),

  mapProps(({ stateToProps, ...rest }) => ({
    ...rest,
    values: stateToProps ? stateToProps(rest) : rest.values
  })),

  withHandlers({
    onChange: ({ name, type, values, onChange }) => changes => {
      onChange({ type, name, changes })
    }
  }),

  withHooks('region'),

  branch(
    // return raw content for Mobile wrapper
    ({ isMobile }) => isMobile,
    renderComponent(Content),
    renderComponent(WrappedContent(Content))
  )
)(renderNothing)

export const GenericRegion = HOC(Raw, Wrapper)
