/**
 * External dependencies
 */
import React from 'react'

const ButtonsBar = ( { buttons, ...rest } ) => (
  <ButtonGroup { ...rest }>
    { buttons.map( item => <Button { ...item } /> ) }
  </ButtonGroup>
)
