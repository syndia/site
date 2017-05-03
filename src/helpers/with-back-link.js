/**
 * External depenedencies
 */
import {
	withRouter,
} from 'react-router'
import {
	compose,
	defaultProps,
	mapProps,
	withHandlers,
} from 'recompose'
import {
	omit,
} from 'lodash'

export default compose(
	withRouter,
	defaultProps( {
		href: '#',
	} ),
	withHandlers( {
		onClick: props => event => {
			event.preventDefault()
			props.router.goBack()
		}
	} ),
	mapProps( props => omit( props, 'router' ) ),
)
