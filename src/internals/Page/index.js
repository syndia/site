import { createComponent } from '../../compose/create-component'

import { Article } from './Article'
import { Aside } from './Aside'
import { Content } from './Content'

import styles from './index.css'

export const Page = createComponent({ name: 'Page', className: styles.root })

export {
  Article,
  Aside,
  Content,
}
