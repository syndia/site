/**
 * External dependencies
 */
import {
	compose,
	lifecycle,
	mapProps,
	withProps,
	withState,
} from 'recompose'
import {
	omit,
} from 'lodash'

const screenRect = () => ( {
	top: 0,
	height: document.documentElement.clientHeight,
	left: 0,
	width: document.documentElement.clientWidth,
} )

const withBounds = ( boundsName, setBoundsElementName ) => compose(
	withState( boundsName, 'setBounds', setBoundsElementName ? undefined : screenRect() ),

	setBoundsElementName
		? withState( 'boundsElement', setBoundsElementName, null )
		: withProps( () => ( { boundsElement: document.documentElement } ) ),

	lifecycle( {
		componentDidMount() {
			this.updateBounds = ( { [ boundsName ]: bounds, setBounds, boundsElement } ) => {
				if ( boundsElement ) {
					const rect = ( ( { top, left, height, width } ) => ( { top, left, height, width } ) )(
						setBoundsElementName ? boundsElement.getBoundingClientRect() : screenRect()
					);
					if ( ! bounds || Object.keys( rect ).some( k => bounds[k] !== rect[k] ) ) setBounds( rect );
				} else if ( bounds ) {
					setBounds( undefined );
				}
			}

			this.updateBounds( this.props )

			this.windowUpdateBounds = () => this.updateBounds( this.props )
			window.addEventListener( 'resize', this.windowUpdateBounds )
		},

		componentWillReceiveProps( nextProps ) {
			this.updateBounds( nextProps )
		},

		componentWillUnmount() {
			window.removeEventListener( 'resize', this.windowUpdateBounds )
		}
	} ),

	mapProps( props => omit( props, 'setBounds', 'boundElement' ) ),
)

export default withBounds
