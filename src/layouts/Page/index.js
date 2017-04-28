/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React, { PropTypes } from 'react'
import {
  compose,
  getContext,
  setDisplayName,
} from 'recompose'
import warning from 'warning'
import {
  BodyContainer
} from 'phenomic'

/**
 * Internal dependencies
 */
import Loading from '../../components/Loading'

/**
 * Module dependencies
 */
import Meta from './components/Meta'
import Hero from './components/Hero'
import {
  pagePropTypes as withPropTypes,
} from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const getMetaData = getContext ( {
  metadata: PropTypes.object.isRequired,
} )

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    metadata: { pkg },
    body,
    header,
    footer,
    children,
  },
) => {
  warning(
    typeof head.title === 'string',
    `Your page '${ __filename }' needs a title`
  )

  return (
    <div className={ styles.page }>
      <Meta
        __url={ __url }
       head={ head }
       pkg={ pkg }
      />
      {
        <Hero fullscreen={ head.fullscreen } head={ head } />
      }
      <div id="content" className={ styles.wrapper + " " + styles.pageContent }>
        { header }
        <div className={ styles.body }>
          {
            isLoading
            ? <Loading />
            : <BodyContainer>{ body }</BodyContainer>
          }
        </div>
        { children }
        { footer }
      </div>
    </div>
  )
}

export default compose(
  setDisplayName( 'MetaDataContext' ),
  getMetaData,
  setDisplayName( 'Page' ),
  withPropTypes,
)( Page )
