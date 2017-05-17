/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'

/**
 * Module dependencies
 */
import CloseButton from './CloseButton'

/**
 * Style dependencies
 */
import styles from './index.css'

const Header = ( { title, showCloseButton, onClose, ...rest } ) => (
  <header { ...rest }>
    { title && <h2>{ title }</h2> }
    { Boolean( showCloseButton ) && ( <CloseButton white className={ styles.closeButton } onClick={ onClose } />) }
  </header>
)

export default Header
