/**
 * External dependencies
 */
import React from 'react'
import {
  branch,
  compose,
  defaultProps as setDefaultProps,
  lifecycle,
  renderComponent,
  withState,
} from 'recompose'
import cx from 'classnames'

const defaultProps = setDefaultProps( {
  duration: 3000,
  size: 20,
} )


const Spinner = ( { className } ) => (
  <div className={ className }>
  </div>
)

export default compose(
  withState( 'isAnimationSupported', 'setIsAnimationSupported', false ),
  withState( 'instanceId', 'setInstanceId', -1 ),
  withState( 'spinning', 'setSpinning', true ),
  defaultProps,
  lifecycle( {
    componentWillMount() {
      this.props.setInstanceId( ++Spinner.instances )
    },
    componentDidMount() {
      if ( isSVGCSSAnimationSupported ) [
        this.props.setIsAnimationSupported( isSVGCSSAnimationSupported )
      ]
    },
    componentWillReceiveProps( nextProps ) {
      const currentSpinning = this.props.spinning
      const { spinning } = nextProps
      const { delay } = this.props

      if ( this.debounceTimeout ) {
        clearTimeout( this.debounceTimeout )
      }

      if ( currentSpinning && ! spinning ) {
        this.debounceTimeout = setTimeout( () => this.props.setSpinning( spinning ), 300 )

        if ( this.debounceTimeout ) {
          clearTimeout( this.debounceTimeout )
        }
      } else {
        if ( spinning && delay && ! isNaN( Number( delay ) ) ) {
          this.delayTimeout = setTimeout( () => this.props.setSpinning( spinning ), delay )
        } else {
          this.props.setSpinning( spinning )
        }
      }
    },
    componentWillUnmount() {
      if ( this.debounceTimeout ) {
        clearTimeout( this.debounceTimeout )
      }

      if ( this.delayTimeout ) {
        clearTimeout( this.delayTimeout )
      }
    }
  } ),
  branch(
    ( { isAnimationSupported } ) => isAnimationSupported,
    renderComponent( SVGSpinner ),
    renderComponent( FallbackSpinner ),
  ),
)( SVGSpinner || FallbackSpinner )
