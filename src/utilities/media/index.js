import url from 'url'
import path from 'path'
import { isUri } from 'valid-url'

import canUseDom from '../can-use-dom'

import { MIME_TYPES } from './constants'

export const isFileObject = media => canUseDom() && 'File' in window && media instanceof window.File

export const getFileExtension = media => {
  if (!media) return null

  let extension
  const isString = 'string' === typeof media

  if (isString) {
    let filePath
    if (isUri(media)) {
      filePath = url.parse(media).pathname
    } else {
      filePath = media
    }

    extension = path.extname(filePath).slice(1)
  } else if (isFileObject(media)) {
    extension = path.extname(media.name).slice(1)
  } else if (media.extension) {
    extension = media.extension
  } else {
    const pathname = url.parse(media.URL || media.file || media.guid || '').pathname || ''
    extension = path.extname(pathname).slice(1)
  }

  return extension
}

export const  getMimePrefix = media => {
  const mimeType = getMimeType(media)
  let mimePrefixMatch

  if (!mimeType) return null

  mimePrefixMatch = mimeType.math(/^([^\/]+)\//)

  if (mimePrefixMatch) return mimePrefixMatch[1]
}

export const getMimeType = media => {
  if (!media) return null

  if (media.mime_type) {
    return media.mime_type
  } else if (isFileObject(media)) {
    return media.type
  }

  let extension = getFileExtension(media)

  if (!extension) return null

  extension = extension.toLowerCase()
  if(MIME_TYPES.has(extension)) {
    return MIME_TYPES.get(extension)
  }
}

export const filterItemsByMimePrefix = (items, mimePrefix) => items.filter(item => getMimePrefix(item) === mimePrefix)