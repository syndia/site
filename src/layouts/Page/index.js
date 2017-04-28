/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React, { PropTypes } from 'react'
import {
  compose,
  getContext,
  setDisplayName,
  setPropTypes,
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

/**
 * Style dependencies
 */
import styles from './index.css'

const propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

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
    typeof head.title === "string",
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
        <Hero head={ head }/>
      }
      <div className={ styles.wrapper + " " + styles.pageContent }>
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
  getMetaData,
  setDisplayName( 'Page' ),
  setPropTypes( propTypes ),
)( Page )
