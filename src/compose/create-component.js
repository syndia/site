import { DOM } from 'react'
import { compose, setDisplayName, withProps } from 'recompose'

export const createComponent = ({
  component = DOM.div,
  name,
  className,
}) => compose(
  setDisplayName( name ),
  withProps( { className } ),
)( component )
