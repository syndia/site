const URI = 'https://images.unsplash.com'

export const DEFAULT_IMAGES = [
	{ id: '1471079502516-250c19af6928', caption: 'Photo by Jeremy Bishop', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
	{ id: '1454023492550-5696f8ff10e1', caption: 'Photo by Jessica Weiller', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
	{ id: '1470854989922-5be2f7456d78', caption: 'Photo by Piotr Łaskawski', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
	{ id: '1470317596697-cbdeda56f999', caption: 'Photo by Michel Bosma', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

export const createUnsplahSource = id => `${ URI }/photo-${ id }?dpr=2&auto=format&w=1024&h=1024`

export const createUnsplahSourceSet = ( id, size ) => `${ URI }/photo-${ id }?dpr=2&auto=format&w=${ size } ${ size }w`

export const createUnsplahThumbnail = ( id, orientation = 'landscape' ) => {
  const dimensions = orientation === 'square'
    ? 'w=300&h=300'
    : 'w=225&h=150'

  return `${ URI }/photo-${ id }?dpr=2&auto=format&crop=faces&fit=crop&${ dimensions }`
}

