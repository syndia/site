import React from 'react'
import PropTypes from 'prop-types'
import { compose, setDisplayName, setPropTypes, withHandlers, withProps } from 'recompose'
import { withRouter } from 'react-router'

import { Content, Page } from '../../internals/Page'

import { Feed } from '../../widgets/Feed'

const toSet = tags => {
  if (Array.isArray(tags)) return new Set(tags)
  if (typeof tags === 'string') return new Set([tags])
  return new Set()
}

const HOC = compose(
  withRouter,

  setDisplayName('FeedLayout'),

  setPropTypes({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),

  withProps(props  => {
    const { year, month, category, tags, timeline } = props.location.query

    return {
      year: year ? Number(year) : year,
      month,
      category,
      timeline,
      tags: toSet(tags),
    }
  }),
)

const Component = ({ type, title, ...query}) => (
  <Page>
    <Header title={ title } />
    <Content>
      <Main>
        <Feed type={ type } { ...query } />
      </Main>
    </Content>
  </Page>
)

export const Layout = HOC(Component)
