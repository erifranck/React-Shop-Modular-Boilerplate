import { App, Home } from 'main/components'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  ishover: state.main.ishover,
  selected: state.main.selected
})

const mapDispathToProps = (dispatch) => ({

})

export const AppPage = App
export const HomePage = connect(mapStateToProps, mapDispathToProps)(Home)
