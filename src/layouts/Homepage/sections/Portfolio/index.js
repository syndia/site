/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'

/**
 * Internal dependencies
 */
import {
  Track,
} from '../../../../components/Grid'
import Logo from '../../../../components/Logo'
import Button from '../../../../components/Button'
import Gallery from '../../../../components/Gallery'

/**
 * Module dependencies
 */
import {
  createUnsplahSource,
  createUnsplahSourceSet,
  createUnsplahThumbnail,
  DEFAULT_IMAGES as images,
} from './images.unsplash'

/**
 * Style dependencies
 */
import styles from './index.css'

const Portfolio= () => (
  <Track className={ styles.portfolio } component="section" area="portfolio" align="auto" justify="auto">
    <Logo />

    <div className={ styles.heading }>
      <h6>FAUCIBUS LUCTUS ET ULTRICES</h6>
      <h2>
        Mis <em>jouw kans</em> niet om de meest<br />
        fascinerende projecten voor <em>onze klanten</em> te ontdekken
      </h2>
      <p>Integer bibendum sapien consequat tincidunt luctus. Praesent sollicitudin nisi ut nunc placerat, et cursus orci rutrum. Praesent sed arcu sodales, egestas lectus at, egestas massa. Donec laoreet id tellus sed cursus. Aenean neque nibh, consequat vitae placerat.</p>
    </div>

    <Gallery
      className={ styles.gallery }
      items={ images.map( ( { caption, id, orientation } ) => ( {
        src: createUnsplahSource( id ),
        thumbnail: createUnsplahThumbnail( id, orientation ),
        srcset: [
          createUnsplahSourceSet( id, 1024 ),
          createUnsplahSourceSet( id, 800 ),
          createUnsplahSourceSet( id, 500 ),
          createUnsplahSourceSet( id, 320 ),
        ],
        caption,
        orientation,
      } ) ) }
    />

    <footer>
      <Button secondary grey fill>Bekijk al mijn werken</Button>
    </footer>
  </Track>
)

export default Portfolio
