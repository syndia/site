import PropTypes from 'prop-types'
import { compose, defaultProps, getContext, lifecycle, mapProps, withHandlers, withState } from 'recompose'
import { omit } from 'lodash'
import enhanceCollection from 'phenomic/lib/enhance-collection'

export const withCollectionFilter = compose(
  getContext( { collection: PropTypes.array.isRequired } ),

  defaultProps({ limit: 10, offset: 0, sort: 'date', reverse: true }),

  withState('items', 'setItems', []),

  withHandlers({
    getCollection: ({ collection, filter, sort, reverse }) => () =>
      enhanceCollection(collection, { filter, sort, reverse }),
  }),

  withHandlers({
    updateCollection: ({ getCollection, setItems, ...rest }) => (start, offset) => {
      setItems(getCollection({ ...rest }).slice(start, offset))
    },
  }),

  lifecycle({
    componentDidMount() {
      this.props.updateCollection(this.props.offset, this.props.limit)
    },
  }),

  mapProps(props => omit(props, ['filter', 'sort', 'reverse'])),
)
