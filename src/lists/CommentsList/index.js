import React from 'react'
import { compose, mapProps,  setDisplayName } from 'recompose'

import withConfig from '../../helpers/with-config'

import { CommentsCount } from '../../internals/Comment/Count'

import styles from './index.css'

const EarlierComments = ({ shown, total, className }) => (
  <span className={ className }>
    { `View earlier comments (Showing ${ shown } of ${ total })` }
  </span>
)

const HOC = compose(
  setDisplayName('CommentsList'),

  withConfig({
    count: {
      display: true,
    },
    earlier: {
      display: true,
    }
  }),

  /*
  branch(
    ({ commentsTree }) => ! commentsTree,
    renderNothing,
  ),
  */

  mapProps(({
    //amountOfCommentsToTake, haveMoreCommentsToFetch, getCommentsCount,
    //totalCommentsCount, commentsTree,
    ...rest
  }) => ({
    ...rest,
    //totalCommentsCount: haveMoreCommentsToFetch ? totalCommentsCount : getCommentsCount(commentsTree.get('children')),
    //showEarlierComments: commentsTree.get('children'.size > amountOfCommentsToTake || haveMoreCommentsToFetch)
  })),
)

const Component = ({ showEarlierCommentsHandler, totalCommentsCount, config, className }) => (
  <div className={ className }>
    {
      (config.count.display || config.earlier.display) && (
        <div className={ styles.bar }>
          {
            config.earlier.display &&
            <EarlierComments total={ 0 } shown={ 0 } onClick={ showEarlierCommentsHandler } className={ styles.earlier } />
          }
          {
            config.count.display &&
            <CommentsCount count={ totalCommentsCount } config={ config.count } />
          }
        </div>
      )
    }
  </div>
)

export const CommentsList = HOC(Component)
