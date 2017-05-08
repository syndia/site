/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  branch,
  compose,
  renderComponent,
} from 'recompose'
import Svg from 'react-svg-inline'


/**
 * Internal dependencies
 */
import {
  getMetaDataContext,
} from '../../helpers/phenomic'
import twitterSvg from './icons/iconmonstr-twitter-1.svg'
import gitHubSvg from './icons/iconmonstr-github-1.svg'
import linkedInSvg from './icons/iconmonstr-linkedin-3.svg'

const createSvgIcon = icon => (
  <Svg svg={ icon } cleanup />
)

const SocialLink = ( { url, target = '_blank', icon, name } ) => (
  <a href={ url } target={ target } title={ name }>
    { icon }
    { name }
  </a>
)

const SocialLinks = ( { metadata: { pkg } } ) => (
  <div>
    { pkg.twitter &&
      <SocialLink
        url={ `https://twitter.com/${ pkg.twitter }` }
        icon={ createSvgIcon( twitterSvg ) }
        name="Twitter"
      />
    }
    { pkg.repository &&
      <SocialLink
        url={ pkg.repository }
        icon={ createSvgIcon( gitHubSvg ) }
        name="GitHub"
      />
    }
    { pkg.linkedin &&
      <SocialLink
        url={ `https://linkedin.com/${ pkg.linkedin }` }
        icon={ createSvgIcon( linkedInSvg ) }
        name="LinkedIn"
      />
    }
  </div>
)

const SocialList = ( { metadata: { pkg } } ) => (
  <ul>
    { pkg.twitter &&
      <li>
        <SocialLink
          url={ `https://twitter.com/${ pkg.twitter }` }
          icon={ createSvgIcon( twitterSvg ) }
        />
        <p>{ "Follow @syndianl for web design & development articles, opinions and links" } </p>
      </li>
    }
    { pkg.repository &&
      <li>
        <SocialLink
          url={ pkg.repository }
          icon={ createSvgIcon( gitHubSvg ) }
        />
        <p>{ "View @syndia on GitHub for open-source projects" } </p>
      </li>
    }
    { pkg.linkedin &&
      <li>
        <SocialLink
          url={ `https://linkedin.com/${ pkg.linkedin }` }
          icon={ createSvgIcon( linkedInSvg ) }
        />
        <p>{ "View my LinkedIn profile" } </p>
      </li>
    }
  </ul>
)

export default compose(
  getMetaDataContext,
  branch(
    ( { list } ) => list,
    renderComponent( SocialList ),
    renderComponent( SocialLinks ),
  )
)( SocialLinks || SocialList )