import { DOM } from 'react'

import { createComponent } from '../../../compose/create-component'

import styles from './index.css'

export const Aside = createComponent({
  name: 'Aside',
  component: DOM.aside,
  className: styles.root,
})
