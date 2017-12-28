import { App, Home } from 'main/components'
import {connect} from 'react-redux'
import {onHover, onBlur} from 'main/actions'

export const AppPage = App
export const HomePage = connect((state) => ( {
  ishover: state.main.ishover,
  selected: state.main.selected,
}), {
  onHover,
  onBlur
})( Home )
