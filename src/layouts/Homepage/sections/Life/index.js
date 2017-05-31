import React from 'react'
import { compose, setDisplayName, withProps } from 'recompose'

import { Track } from '../../../../components/Grid'
import { Section } from '../../../../internals/Page/Section'

import styles from './index.css'

const HOC = compose(
  setDisplayName('Life'),

  withProps({
    headingLevel: 1,
    title: "Ik bied innovatieve oplossingen om uw creatieve projecten <em>voorspoedig</em> te maken",
    headline: "Innovatieve oplossingen",
  }),
)

const Component = props => (
  <Track { ...props } id="life" className={ styles.life } component={ Section } area="life" align="center" justify="auto">
    <p>
      { "Nullam suscipit id ante bibendum bibendum. Vivamus interdum gravida justo id venenatis. " }
      { "Mauris eget dolor cursus , tempus velit sed, lobortis metus. Donec id tincidunt libero, " }
      { " eget dapibus quam. Aenean felis ex, blandit pretium pharetra eu." }
    </p>
    <ul>
      <li>Maak gebruik van flexibele frameworks om een robuuste synopsis te geven</li>
      <li>Samenwerkend denken om het algemeen te bevorderen</li>
      <li>Breng naar de tafel win-win overlevingsstrategieën</li>
      <li>Eigen vermogen waarborgen, vergroten voor gemeenschap eigendom</li>
    </ul>
   </Track>
)

export default HOC(Component)
