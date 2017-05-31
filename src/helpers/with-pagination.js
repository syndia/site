import { compose, getDisplayName, setDisplayName, withState, withHandlers } from 'recompose'

import { Pagination } from '../widgets/Pagination'

const initialState = {
  first: 10,
  offset: 0,
}

export default InnerComponent => compose(
  setDisplayName(`withPagination(${ getDisplayName(InnerComponent)  })`),

  withState( 'pagination', 'setPagination', initialState),

  withHandlers({
    updatePagination: ({
        pagination, setPagination, first, offset
      }) => () => setPagination({ ...pagination, first, offset }),
  }),
)( Pagination )