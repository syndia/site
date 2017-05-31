import { createEagerFactory } from 'recompose'
import { memoize } from 'lodash'

import { MetaDataRegion } from '../widgets/MetaDataRegion'

export const mapTypeToRegion = memoize(type => ({
  meta: createEagerFactory(MetaDataRegion),
}[type]))