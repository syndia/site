import { DOM } from 'react'
import { defaultProps } from 'recompose'

import { createComponent } from '../../compose/create-component'

import styles from './index.css'

const createText = ({ name, component = DOM.p, className, children = null }) =>
  defaultProps({ className, children })(createComponent({ name, component, className }))

export const Text = createText({ name: 'Text' })
export const Muted = createText({ name: 'Muted' })
export const Loading = createText({ name: 'Loading', children: 'Loading...' })
export const Error = createText({ name: 'Error', children: 'An error happened.' })
