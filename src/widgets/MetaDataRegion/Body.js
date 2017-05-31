import React from 'react'
import { compose, pure, setDisplayName, withHandlers } from 'recompose'


import styles from './index.css'

const Item = compose(
  setDisplayName('MetaDataBodyRegion'),

  pure,

  withHandlers({
    onClick: ({ onChange, selected, item }) => event => onChange({ ...item, selected: !item.selected }),
  }),
)(({ title, background, item, onClick }) => (
  <div className={ styles.item }>

  </div>
))

export const MetaDataBodyRegion = () => null
