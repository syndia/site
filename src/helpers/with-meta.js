import { compose, getDisplayName, setDisplayName, withHandlers, withState } from 'recompose'

export const withMetaData = InnerComponent => compose(
  setDisplayName(`withMetaData(${ getDisplayName(InnerComponent) })`),

  withState( 'metadata', 'setMetaData', { limit: 10, offset: 0 } ),

  withHandlers({
    onPageChange: ({ metadata, setMetaData }) => page => setMetaData({ ...metadata, offset: metadata.limit * page }),
  }),
)( InnerComponent )