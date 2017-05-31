import { compose, withProps } from 'recompose'

import withScrollAnimation from '../../helpers/with-scroll-animation'

import { Button } from '../Button'

export const ScrollButton = compose(
  withScrollAnimation,

  withProps({ component: 'a' }),
)(Button)
