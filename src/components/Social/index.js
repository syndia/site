import React from 'react'
import { branch, compose, mapProps, renderComponent } from 'recompose'
import cx from 'classnames'

import { getMetaDataContext } from '../../helpers/phenomic'
import { SocialItem } from '../../internals/Social/Item'

import styles from './index.css'

const SocialLinks = ({ metadata: { pkg }, className }) => (
  <div className={ className }>
    { pkg.twitter &&
      <SocialItem link={ `https://twitter.com/${ pkg.twitter }` } showName />
    }
    { pkg.repository &&
      <SocialItem link={ pkg.repository } showName />
    }
    { pkg.linkedin &&
      <SocialItem link={ `https://linkedin.com/${ pkg.linkedin }` } showName />
    }
  </div>
)

const SocialList = ({ metadata: { pkg }, className }) => (
  <ul className={ className }>
    { pkg.twitter &&
      <li>
        <SocialItem link={ `https://twitter.com/${ pkg.twitter }` } />
        <p>{ "Volg @syndianl voor webdesign & development artikelen, meningen en links" } </p>
      </li>
    }
    { pkg.repository &&
      <li>
        <SocialItem link={ pkg.repository } />
        <p>{ "Bekijk @syndia op GitHub voor open-source projecten" } </p>
      </li>
    }
    { pkg.linkedin &&
      <li>
        <SocialItem link={ `https://linkedin.com/${ pkg.linkedin }` } />
        <p>{ "Bekijk mijn LinkedIn profiel" } </p>
      </li>
    }
  </ul>
)

export default compose(
  getMetaDataContext,

  mapProps(({ className, ...rest }) => ({
    ...rest,
    className: cx({
      [className]: className,
      [styles.root]: true,
    })
  })),

  branch(
    ({ list }) => list,
    renderComponent(SocialList),
    renderComponent(SocialLinks),
  )
)(SocialLinks || SocialList)
