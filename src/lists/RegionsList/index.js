import { branch, compose, defaultProps, renderComponent, renderNothing, setDisplayName } from 'recompose'

import { MobileRegionsList } from './Mobile'
import { DesktopRegionsList } from './Desktop'

export const RegionsList = compose(
  setDisplayName('RegionsList'),

  defaultProps({ isMobile: false }),

  branch(
    ({ isMobile }) => isMobile,
    renderComponent(MobileRegionsList),
    renderComponent(DesktopRegionsList),
  ),
)(renderNothing)
