/**
 * External dependencies
 */
import React from 'react'
import {
  render,
  unmountComponentAtNode,
} from 'react-dom'
import {
  compose,
  lifecycle,
  setDisplayName,
} from 'recompose'
import {
  Provider as ReduxProvider
} from 'react-redux'

const enhance = compose(
  setDisplayName( 'RootChild' ),
  lifecycle( {
    componentDidMount() {
      this.renderChildren = () => {
        let content

        if ( this.props &&
          ( Object.keys( this.props ).length > 1 || this.props.children )
        ) {
          content = <div { ...this.props }>{ this.props.children }</div>
        } else {
          content = this.props.children
        }

        // context is lost when creating a new render hierarchy, so
        // ensure that we preserve the context that we care about
        if ( this.context.store ) {
          content = (
            <ReduxProvider store={ this.context.store }>
              { content }
            </ReduxProvider>
          )
        }

        render( content, this.container )
      }

      this.container = document.createElement( 'div' )
      document.body.appendChild( this.container )
      this.renderChildren()
    },

    componentDidUpdate() {
      this.renderChildren
    },

    componentWillUnmount() {
      if ( ! this.container ) {
        return
      }

      unmountComponentAtNode( this.container )
      document.body.removeChild( this.container )
      delete this.container
    }
  } ),
)

export default enhance( () => null )
