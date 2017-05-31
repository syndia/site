import { createEagerElement } from 'recompose'

import withHooks from '../../helpers/with-hooks'
import { RegionsList } from '../../lists/RegionsList'

export const RegionsLayout = withHooks('regions')(({
  response,
  onRegionsChange,
  onMobileRegionsClose,
  ...rest,
}) => createEagerElement(RegionsList, {
  ...rest,
  regions: response.regions,
  onClose: onMobileRegionsClose,
  onChange: onRegionsChange,
}))