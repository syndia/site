import { compose, lifecycle, mapProps, withProps, withState } from 'recompose'
import { omit } from 'lodash'

import { canUseDom } from '../utilities/dom'

const screenRect = () => ({
	top: 0,
	height: canUseDom() ? document.documentElement.clientHeight : null,
	left: 0,
	width: canUseDom() ? document.documentElement.clientWidth : null,
})

const withBounds = (boundsName, setBoundsElementName) => compose(
	withState(boundsName, 'setBounds', setBoundsElementName ? undefined : screenRect()),

	setBoundsElementName
		? withState('boundsElement', setBoundsElementName, null)
		: withProps(() => ({ boundsElement: canUseDom() && document.documentElement })),

	lifecycle({
		componentDidMount() {
			this.updateBounds = ({ [boundsName]: bounds, setBounds, boundsElement }) => {
				if (boundsElement) {
					const rect = (({ top, left, height, width }) => ({ top, left, height, width }))(
						canUseDom() && setBoundsElementName ? boundsElement.getBoundingClientRect() : screenRect()
					);
					if (!bounds || Object.keys(rect).some(k => bounds[k] !== rect[k])) setBounds(rect);
				} else if (bounds) {
					setBounds(undefined);
				}
			}

			this.updateBounds(this.props)

			this.windowUpdateBounds = () => this.updateBounds(this.props)
			canUseDom() && window.addEventListener('resize', this.windowUpdateBounds) 
		},

		componentWillReceiveProps(nextProps) {
			this.updateBounds(nextProps)
		},

		componentWillUnmount() {
			canUseDom() && window.removeEventListener('resize', this.windowUpdateBounds)
		}
	}),

	mapProps(props => omit(props, 'setBounds', 'boundElement')),
)

export default withBounds
