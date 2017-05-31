import React from 'react'

import { CloseButton } from './Buttons'

import styles from './index.css'

export const Header = ({ title, showCloseButton, onClose, ...rest }) =>
  (title || showCloseButton) && (
  <header { ...rest }>
    { title && <h2>{ title }</h2> }
    { Boolean(showCloseButton) && <CloseButton onClick={ onClose } className={ styles.closeButton } /> }
  </header>
)
