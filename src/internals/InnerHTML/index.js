import { createElement } from 'react'
import  PropTypes from 'prop-types'
import { compose, defaultProps, onlyUpdateForKeys, setDisplayName, setPropTypes } from 'recompose'

const HOC = compose(
  setDisplayName('InnerHTML'),

  defaultProps({ component: 'div' }),

  setPropTypes({
    children: PropTypes.string,
    component: PropTypes.string,
  }),

  onlyUpdateForKeys('children'),
)

const Component = ({ children, component, ...rest }) => children && createElement( component, {
  ...rest,
  dangerouslySetInnerHTML: {
    __html: children
  }
})

export const InnerHTML = HOC(Component)
