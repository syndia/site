import React from 'react'
import { compose, createEagerElement, setDisplayName, withPropsOnChange } from 'recompose'

import { mapTypeToRegion } from '../../helpers/map-type-to-region'

const Region = withPropsOnChange(
  ['type'], ({ config, region }) => {
    const type = config.regions.types && config.regions.types[region.name] || region.type

    return {
      type,
      config: { ...config.regions[type] },
      factory: mapTypeToRegion(type),
    }
  }
)(({ factory, region, ...rest}) => factory({ ...rest, ...region, isMobile: false }))

const HOC = compose(
  setDisplayName('DesktopRegionsList'),
)

const Component = ({ regions, className, ...rest }) => (
  <div className={ className }>
    {
      regions.map(region => createEagerElement(Region, {
        ...rest,
        region,
        key: region.name,
        label: rest.config.regions.label[region.name],
      }))
    }
  </div>
)

export const DesktopRegionsList = HOC(Component)
