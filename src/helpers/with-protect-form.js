import { compose, getDisplayName, lifecycle,setDisplayName, withHandlers } from 'recompose'
import { includes, without } from 'lodash'

import { canUseDom } from '../utilities/dom'

let formsChanged = []

export default InnerComponent => compose(
  setDisplayName(`withProtectForm(${ getDisplayName(InnerComponent) })`),

  withHandlers({
    warnIfChanged: ({ beforeUnloadText }) => event => {
      if (!formsChanged.length) { return false }

      (event || window.event).returnValue = beforeUnloadText
      return beforeUnloadText
    },

    markChanged: () => {
      if (!includes(formsChanged, this)) {
        formsChanged.push(this)
      }
    },

    markSaved: () => {
      formsChanged = without(formsChanged, this)
    }
  }),

  lifecycle({
    componentDidMount() {
      canUseDom() && window.addEventListener('beforeunload', this.props.warnIfChanged)
    },

    componentWillUnmount() {
      canUseDom() && window.removeEventListener('beforeunload', this.props.warnIfChanged)
      this.props.markSaved()
    }
  }),
)