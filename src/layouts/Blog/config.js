export default {
  metaData: {
    offset: 0,
    limit: 10,
  },
  results: {
    columns: 3,
  },

  postsGrid: {
    columns: 3,
  },

  post: {
    image: {
      query: {},
    },
    title: {
      lines: 3,
    },
    description: {
      lines: 3,
    },
    i18n: {
      more: 'Read more'
    },
  },

  facets: {
    category: {
      maxItemsCount: 3,
      rowHeight: 20,
      i18n: {
        goBackTitle: 'All categories',
        more: 'Show more',
        less: 'Less',
      },
    },
  },

  pagination: {
    i18n: {
      previous: 'previous',
      next: 'next',
    },
  },
}