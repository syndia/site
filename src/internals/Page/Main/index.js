import { DOM } from 'react'

import { createComponent } from '../../../compose'

import styles from './index.css'

export default createComponent({
  name: 'Main',
  component: DOM.main,
  className: styles.root,
})
