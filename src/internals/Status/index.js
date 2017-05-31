import { createElement } from 'react'
import PropTypes from 'prop-types'
import { compose, onlyUpdateForKeys, setDisplayName, setPropTypes } from 'recompose'

import { Error, Loading, Muted } from '../Text'

const Components = new Map([
  ['isLoading', Loading],
  ['isError', Error],
  ['isLoaded', Muted],
])

const HOC = compose(
  setDisplayName('Status'),

  setPropTypes({
    isError: PropTypes.bool,
    isLoaded: PropTypes.bool,
    isLoading: PropTypes.bool,
    messages: PropTypes.shape({
      isError: PropTypes.string,
      isLoaded: PropTypes.string,
      isLoading: PropTypes.string,
    })
  }),

  onlyUpdateForKeys([ 'isError', 'isLoaded', 'isLoading' ])
)

const Component = ({ isLoaded, isLoading, isError, messages = {} }) => {
  const statusProps = { isError, isLoaded, isLoading }
  const [key] = Object.keys({statusProps}).filter(key => statusProps[key])

  if (!key) return null

  messages = {
    isLoading: 'Loading...',
    isError: 'An error happened',
    ...messages,
  }

  if (messages[key]) {
    createElement(Components.get(key), null, messages[key])
  }

  return null
}

export const Status = HOC(Component)
