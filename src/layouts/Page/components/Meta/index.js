/**
 * External dependencies
 */
import {
  compose,
  mapProps,
  setDisplayName,
} from 'recompose'
import Helmet from 'react-helmet'
import {
  joinUri,
} from 'phenomic'

export default compose(
  setDisplayName( 'Meta' ),
  mapProps( ( { __url, head, pkg } ) => {
    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const socialImage = head.hero && typeof head.hero !== 'boolean' && head.hero.match( '://' ) ? head.hero
      : joinUri(process.env.PHENOMIC_USER_URL, head.hero)

    const meta = [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: metaTitle },
      {
        property: 'og:url',
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
      { property: 'og:image', content: socialImage },
      { property: 'og:description', content: head.description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: metaTitle },
      { name: 'twitter:creator', content: `@${ pkg.twitter }` },
      { name: 'twitter:description', content: head.description },
      { name: 'twitter:image', content: socialImage },
      { name: 'description', content: head.description },
    ]

    return {
      title: metaTitle,
      meta,
    }
  } ),
)( Helmet )
