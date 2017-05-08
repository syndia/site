/**
 * External dependencies
 */
import {
  compose,
  getDisplayName,
  mapProps,
  setDisplayName,
} from 'recompose'
import enhanceCollection from 'phenomic/lib/enhance-collection'

/**
 * Internal dependencies
 */
import {
  getCollectionContext,
} from './collection-context'

const getPosts = ( collection, filter, sort = 'date', reverse = true ) => enhanceCollection( collection, {
  filter,
  sort,
  reverse,
} )

export const withPostsFilter = InnerComponent => compose(
  setDisplayName( `withPostsFilter(${ getDisplayName( InnerComponent ) })` ),
  getCollectionContext,
  mapProps( ( {
    collection,
    params = {},
    reverse,
    sortBy,
    head,
    ...rest,
  } ) => {
    const { author, category, tag } = params
    let filter

    if ( author || category || tag ) {
      filter = item => Boolean(
        item.layout === 'Post' && (
          item.authors && item.authors.indexOf( author ) > -1 ||
          item.category && item.category.indexOf( category ) > -1 ||
          item.tags && item.tags.indexOf( tag ) > -1
        )
      )
    } else {
      filter = { layout: 'Post' }
    }

    const posts = getPosts( collection, filter, sortBy, reverse)

    head = {
      ...head,
      title: tag
        ? `Posts tagged with ${ tag }`
        : author
          ? `Posts written by ${ author }`
          : 'Blog posts'
    }

    return {
      ...rest,
      head,
      posts,
    }
  } ),
)( InnerComponent )
