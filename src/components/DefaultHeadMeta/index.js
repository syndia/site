/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  setDisplayName,
  getContext,
} from 'recompose'
import Helmet from 'react-helmet'

/**
 * Module dependencies
 */
import {
  defaultHeadMetaPropTypes as withPropTypes,
} from './prop-types'

const getMetaData = getContext ( {
  metadata: PropTypes.object.isRequired,
} )

const DefaultHeadMeta = ( { metadata: { pkg }, ...props } ) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
        ...props.meta ? props.meta : [],
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" +
        "?features=es6&flags=gated" },
        ...props.scripts ? props.scripts : [],
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

const enhance = compose(
  setDisplayName( 'MetaDataContext' ),
  getMetaData,
  setDisplayName( 'DefaultHeadMeta' ),
  withPropTypes,
)

export default enhance( DefaultHeadMeta )
