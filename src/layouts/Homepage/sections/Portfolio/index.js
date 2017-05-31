import React from 'react'
import { compose, setDisplayName, withProps } from 'recompose'

import { Track } from '../../../../components/Grid'
import { Button } from '../../../../internals/Button'
import { ImageGallery } from '../../../../widgets/ImageGallery'
import { Section } from '../../../../internals/Page/Section'

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

const HOC = compose(
  setDisplayName('AboutHashSection'),

  withProps({
    headingLevel: 1,
    title: "Mis <em>jouw kans</em> niet om de meest<br />fascinerende projecten voor <em>onze klanten</em> te ontdekken",
    headline: "FAUCIBUS LUCTUS ET ULTRICES",
  }),
)

const Component = props => (
  <Track { ...props } className={ styles.portfolio } component={ Section } area="portfolio" align="auto" justify="auto">
    <p>Integer bibendum sapien consequat tincidunt luctus. Praesent sollicitudin nisi ut nunc placerat, et cursus orci rutrum. Praesent sed arcu sodales, egestas lectus at, egestas massa. Donec laoreet id tellus sed cursus. Aenean neque nibh, consequat vitae placerat.</p>

    <ImageGallery
      className={ styles.gallery }
      images={
        images.map( ( { caption, id, orientation } ) => ( {
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
        } ) )
      }
    />

    <footer>
      <Button transparent className={ styles.button }>Bekijk al mijn werken</Button>
    </footer>
  </Track>
)

export default HOC(Component)
