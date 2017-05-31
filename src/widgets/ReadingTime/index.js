import React from 'react'
import PropTypes from 'prop-types'
import { compose, defaultProps, mapProps, setDisplayName, setPropTypes } from 'recompose'
import cx from 'classnames'

import styles from './index.css'

const getWordsFromText = text => String(text)
  .trim()
  // strip HTML tags
  .replace(/<\/?[^>]+(>|$)/g, '')
  // split by words
  .split(/\s+|\s*\.\s*/)

const HOC = compose(
  setDisplayName('ReadingTime'),

  setPropTypes({
    text: PropTypes.string.isRequired,
    after: PropTypes.string,
    before: PropTypes.string,
    templateToolTip: PropTypes.string,
    wordsPerMinute: PropTypes.string,
    templateText: PropTypes.object,
    tooltipPosition: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  }),

  defaultProps({
    wordsPerMinute: 250,
    tootipPosition: 'top',
  }),

  mapProps(({ text, className, tooltipPosition, ...rest }) => ({
    ...rest,
    words: getWordsFromText(text),
    className: cx({ className, [styles.root]: true, [styles.position]: tooltipPosition }),
  })),
)

const Component = ({ after, before, minutes, replaceParameters, templateText, templateToolTip, className }) => (
  <span
    className={ className }
    data-tooltip={ replaceParameters(templateToolTip) }
  >
    { before }
    {
      minutes === 1 ? replaceParameters(templateText[1]) : replaceParameters(templateText[2])
    }
    { after }
 </span>
)

export const ReadingTime = HOC(Component)
