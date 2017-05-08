/* eslint-disable react/prop-types */

/**
 * External dependencies
 */
import React from 'react'
import {
  Link,
} from 'phenomic'

/**
 * Module dependencies
 */
import Card from '../../../../components/Card'
import {
  DateComponent,
} from '../../../../components/DateTime'

/**
 * Style dependencies
 */
import styles from './index.css'

const PostPreview = ( { post }  ) => (
  <Card
    tagName="article"
    className={ styles.post }
    style={ {
      gridColumnStart: 'auto',
      gridColumnEnd: 'auto',
      gridRowStart: 'auto',
      gridRowEnd: 'auto',
      justifySelf: 'auto',
      alignSelf: 'auto',
    } }
  >
    <header className={ styles.header }>
      <div className={ styles.thumb }>
        <img src={ post.hero } />
      </div>
      <div className={ styles.meta }>
        <span>
          { "written by "}
          <Link to={ `/blog/author/${ encodeURIComponent( post.author ) }` }>
            { post.author }
          </Link>
        </span>
        <DateComponent value={ new Date( post.date ) } />
      </div>
      <h2 className={ styles.meta }>
        <Link
          className="post__title"
          to={ post.__url }
        >
          { post.title }
        </Link>
      </h2>
    </header>
    <section className={ styles.content }>
       { post.description }
    </section>
    <aside className={ styles.comments }>
      <span>{ 0 }</span>
    </aside>
    <footer>
      {
        post.tags &&
        <div className={ styles.footer }>
          {
            post.tags.map( tag => (
              <Link key={ tag } to={ `/blog/tag/${ tag }` }>
                { tag }
              </Link>
            ) )
          }
        </div>
      }
    </footer>
  </Card>
)

export default PostPreview
