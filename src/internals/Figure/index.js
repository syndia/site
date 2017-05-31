import React from 'react'

export const Figure =({ caption, children, ...rest }) => (
  <figure { ...rest }>
    { children }
    { caption && <figcaption>{ caption }</figcaption>}
  </figure>
)
