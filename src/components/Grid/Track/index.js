/**
 * External dependencies
 */
import {
  compose,
  componentFromProp,
  defaultProps,
  mapProps,
} from 'recompose'
import cx from 'classnames'

export default compose(
  defaultProps( { component: 'div' } ),
  mapProps( ( {
    area,
    justify,
    align,
    className, children, ...rest,
  } ) => {
    const classes = cx( {
      [ className ]: className,
    } )

    const style = {
      gridArea: area,
      justifySelf: justify,
      alignSelf: align,
    }

    return {
      ...rest,
      className: classes,
      style,
      children,
    }
  } ),
)( componentFromProp( 'component' ) )
