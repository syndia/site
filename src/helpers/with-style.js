import { findDOMNode } from 'react-dom'
import { compose, lifecycle } from 'recompose'

export default style => InnerComponent => compose(
  lifecycle({
    componentDidMount() {
      if (super.componentDidMount) {
        super.componentDidMount()
      }

      const node = findDOMNode(this)
      node.classList.add(style)
    }
  }),
)(InnerComponent)
