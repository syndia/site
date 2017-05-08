/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  compose,
  setDisplayName,
} from 'recompose'
import warning from 'warning'
import {
  BodyContainer
} from 'phenomic'

/**
 * Internal dependencies
 */
import { getMetaDataContext } from '../../helpers/phenomic'
import Loading from '../../components/Loading'
import {
  Grid,
} from '../../components/Grid'

/**
 * Module dependencies
 */
import Meta from './components/Meta'
import Hero from './components/Hero'
import withPropTypes from './prop-types'

/**
 * Style dependencies
 */
import styles from './index.css'

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    metadata: { pkg },
    body,
    header,
    sidebar,
    footer,
    sections,
    gap,
    tracks,
    children,
  },
) => {
  warning(
    typeof head.title === 'string',
    `Your page '${ __filename }' needs a title`
  )

  return (
    <div className={ styles.default }>
      <Meta
        __url={ __url }
       head={ head }
       pkg={ pkg }
      />
      {
        <Hero fullscreen={ head.fullscreen } head={ head } />
      }
      <Grid
        gap={ gap }
        tracks={ tracks }
        id="content"
        className={ styles.wrapper + " " + styles.pageContent }
      >
        { header }
        <div className={ styles.body } style={ { gridArea: 'main', justifySelf: 'auto', alignSelf: 'auto' } }>
          {
            isLoading
            ? <Loading />
            : body && <BodyContainer>{ body }</BodyContainer>
          }
          { children }
        </div>
        { sections && sections.map( ( Component, index ) => <Component key={ `section-${ index }` } /> ) }
        { sidebar }
        { footer }
      </Grid>
    </div>
  )
}

export default compose(
  getMetaDataContext,
  setDisplayName( 'Page' ),
  withPropTypes,
)( Page )
