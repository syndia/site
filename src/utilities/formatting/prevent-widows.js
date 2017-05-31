import { trim } from 'lodash'

export const preventWidows = (text, wordsToKeep = 2) => {
  let words, endWords

  if (typeof text !== 'string') return text

  text = text && trim(text)
  if (!text) return text

  words = text.match(/\S+/g)
  if (!words || 1 === words.length) return text

  if (words.length <= wordsToKeep) return words.join('\xA0')

  endWords = words.splice(-wordsToKeep, wordsToKeep)

  return words.join(' ') + ' ' + endWords.join('\xA0')
}
