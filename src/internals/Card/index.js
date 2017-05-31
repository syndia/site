import { componentFromProp, compose, defaultProps, mapProps, setDisplayName } from 'recompose'
import cx from 'classnames'
import { Link } from 'phenomic'

import styles from './index.css'

const HOC = compose(
  setDisplayName('Card'),

  defaultProps({ tagName: 'div' }),

  mapProps(({
    className, to, isCompact, tagName, ...rest,
  }) => ({
    ...rest,
    to,
    component: to ? Link : tagName,
    className: cx({
      [className]: className,
      [ styles.card ]: true,
      [ styles.link ]: Boolean( to ),
      [ styles.compact ]: isCompact,
    }),
  })),
)

export const Card = HOC( componentFromProp( 'component' ) )
