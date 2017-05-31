import { canUseDom } from '../dom'

const hash = {}
const cache = []

const add = source => {
  if (!hash[source]) {
    hash[source] = canUseDom() ? new Image() : {}

    hash[source].crossOrigin = 'Anonymous'
    hash[source].src = source

    cache.push(hash[source])
  }

  return hash[source]
}

const getImage = source => add(source)

export const loadImage = source => {
  const image = getImage(source)

  return new Promise((resolve, reject) => {
    const handleSuccess = () => resolve(image)
    const handleError = () => reject(new Error(`failed to preload ${ source }`))

    if (image.complete) {
      // image is loaded

      if (image.naturalWidth && image.naturalHeight) {
        handleSuccess()
      } else {
        let counter = 1

        const checkDimension = setInterval(() => {
          if (image.naturalWidth && image.naturalHeight) {
            clearInterval(checkDimension)
            handleSuccess()
          }

          if (counter === 3) {
            clearInterval(checkDimension)
            handleError()
          }

          counter++
        }, 50)
      }
    } else {
      if (canUseDom()) {
        image.addEventListener('load', handleSuccess, false)
        image.addEventListener('error', handleError, false)
      }
    }
  })
}
