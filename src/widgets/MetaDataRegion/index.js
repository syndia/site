import React from 'react'
import { compose, setDisplayName } from 'recompose'

import withConfig from '../../helpers/with-config'
import { GenericRegion } from '../../internals/GenericRegion'
import { MetaDataBodyRegion } from './Body'

const HOC = compose(
  setDisplayName('MetaDataRegion'),

  withConfig({}),
)

const Component = rest => (
  <GenericRegion { ...rest }>
    <MetaDataBodyRegion />
  </GenericRegion>
)

export const MetaDataRegion = HOC(Component)
