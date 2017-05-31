export const FORMAT_DOM = 'DOM'
export const FORMAT_STRING = 'STRING'
export const FORMAT_SHORTCODE = 'SHORTCODE'
export const FORMAT_OBJECT = 'OBJECT'
export const FORMAT_API = 'API'
export const FORMAT_UNKNOWN = 'UNKNOWN'

export const MEDIA_TYPE_AUDIO = 'audio'
export const MEDIA_TYPE_IMAGE = 'image'
export const MEDIA_TYPE_VIDEO = 'video'
export const MEDIA_TYPE_UNKNOWN = 'unknown'

export const MEDIA_TYPE = new Map([
  [MEDIA_TYPE_AUDIO, 'AUDIP'],
  [MEDIA_TYPE_IMAGE, 'IMAGE'],
  [MEDIA_TYPE_VIDEO, 'VIDEO'],
  [MEDIA_TYPE_UNKNOWN, 'UNKNOWN'],
])

export const THUMBNAIL = 'THUMBNAIL'
export const MEDIUM = 'MEDIUM'
export const LARGE = 'LARGE'

export const THUMBNAIL_SIZE_DIMENSIONS = new Map([
  [THUMBNAIL, { width: 150, height: 150 }],
  [MEDIUM, { width: 300, height: 300 }],
  [LARGE, { width: 1024, height: 1024 }],
])

export const DEFAULT = 'default'
export const CIRCLE = 'circle'
export const SQUARE = 'square'

export const GALLERY_COLUMNED_TYPES = new Set([DEFAULT, CIRCLE, SQUARE])
export const GALLERY_SIZEABLE_TYPES = new Set([DEFAULT])
export const GALLERY_DEFAULT_ATTRIBUTES = new Map([
  [DEFAULT, { items: [], type: 'default', columns: 3, orderBy: 'menu_order', link: '', size: 'thumbnail' }],
])

export const BMP = 'bmp'
export const GIF = 'gif'
export const ICO = 'ico'
export const JPG = 'jpg'
export const JPEG = 'jpeg'
export const JPE ='jpe'
export const PNG = 'png'
export const TIF = 'tif'
export const TIFF = 'tiff'

export const MIME_TYPES = new Map([
  [BMP, 'image/bmp'],
  [GIF, 'image/gif'],
  [ICO, 'image/x-icon'],
  [JPG, 'image/jpeg'],
  [JPEG, 'image/jpeg'],
  [JPE, 'image/jpeg'],
  [PNG, 'image/png'],
  [TIF, 'image/tiff'],
  [TIFF, 'image/tiff'],
])