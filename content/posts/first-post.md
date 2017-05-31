---
date: 2016-01-22
authors:
  - phenomic
title: First Post, no hero.
layout: Post
featured: true
tags:
  - React
  - Tutorial
---

This is the first post!

Code is highlighted by default.

```js
const StatelessComponent = (props) => {
  return (
    <div>
      I‘m a stateless component that accepts children
      { props.children }
    </div>
  )
}

// ...

  return (
    <StatelessComponent>
      Example of child
    </StatelessComponent>
  )
```
