import React from 'react'
import PropTypes from 'prop-types'
import {
  compose, defaultProps, lifecycle, mapProps,
  setDisplayName, setPropTypes, withHandlers, withState,
} from 'recompose'
import { noop, omit } from 'lodash'

import { canUseDom } from '../../utilities'

const isTouchEvent = event =>
  (!event.pageX || !event.pageY) &&
  (event.targetTouches && event.targetTouches.length)

const propTypes = {
  bounds: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number,
  }),
  height: PropTypes.number,
  width: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  onDrag: PropTypes.func,
  onStop: PropTypes.func,
  controlled: PropTypes.bool,
}

const HOC = compose(
  setDisplayName('Draggable'),

  setPropTypes({ propTypes }),

  defaultProps({
    bounds: null,
    controlled: false,
    height: 0,
    onDrag: noop,
    onStop: noop,
    width: 0,
    x: 0,
    y: 0,
  }),

  withState('state', 'setState', { x: 0, y: 0 }),
  withState('isDragging', 'setIsDragging', false),
  withState('relativePosition', 'setRelativePosition', { x: 0, y: 0 }),
  withState('frameRequestId', 'setFrameRequestId', -1),

  withHandlers({
    draggingHandler: ({ relativePosition }) => event => {
      let coords =event

      if (isTouchEvent(event)) coords = event.touches[0]

      const x = coords.pageX - relativePosition.x
      const y = coords.pageY - relativePosition.y

      return { x, y }
    },

    draggingStartedHandler: ({ x, y, update, frameRequestId, setFrameRequestId, setIsDragging, setRelativePosition }) => event => {
      setIsDragging(true)

      let coords = event

      if (isTouchEvent(event)) coords = event.touches[0]

      setRelativePosition({ x: coords.pageX - x, y: coords.pageY - y })

      cancelAnimationFrame(frameRequestId)
      setFrameRequestId(requestAnimationFrame(update))
    }
  }),

  withHandlers({
    onMouseDownHandler: ({ draggingHandler, draggingStartedHandler, draggingEndedHandler}) => event => {
      event.preventDefault()

      if (canUseDom()) {
        document.addEventListener('mousemove', draggingHandler)
        document.addEventListener('mouseup', draggingEndedHandler)
      }

      draggingStartedHandler(event)
    },

    onTouchStartHandler: ({ draggingHandler, draggingStartedHandler, draggingEndedHandler }) => event => {
      event.preventDefault()

      if (canUseDom()) {
        document.addEventListener('touchmove', draggingHandler),
        document.addEventListener('touchend', draggingEndedHandler)
      }

      draggingStartedHandler(event)
    },

    removeListeners: ({ draggingHandler, draggingEndedHandler }) => () => {
      if (canUseDom()) {
        document.removeEventListener('mousemove', draggingHandler)
        document.removeEventListener('mouseup', draggingEndedHandler)

        document.removeEventListener('touchmove', draggingHandler)
        document.removeEventListener('touchend', draggingEndedHandler)
      }
    }
  }),

  lifecycle({
    componentWillReceiveProps(nextProps) {
      if ( this.props.x !== nextProps.x || this.props.y !== nextProps.y ) {
        this.props.setState({ x: nextProps.x, y: nextProps.y})
      }
    },

    componentWillUnmount() {
      this.props.removeListeners()
    }
  }),

  mapProps(props => omit(props, Object.keys(propTypes))),
  mapProps(({ x, y, width, height, ...rest }) => ({
    ...rest,
    style: {
      transform: `translate(${ x }px, ${ y }px`,
      width: width && `${ width }px`,
      height: height && `${ height }px`,
    },
  })),
)

const Component = ({ onMouseDownHandler, onTouchStartHandler, style, ...rest }) => (
  <div
    { ...rest }
    style={ style }
    onMouseDown={ onMouseDownHandler }
    onTouchStart={ onTouchStartHandler }
  />
)

export const Draggable = HOC(Component)
