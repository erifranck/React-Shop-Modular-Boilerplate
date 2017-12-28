import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'

export class App extends Component {
  renderCurrentRoute(route, props) {
    return <route.component {...props} routes={route.routes} />
  }

  checkAuth() {
    const { route, location } = this.props
    const branch = matchRoutes(route.routes, location.pathname)
    const currentRoute = branch[0] && branch[0].route

    return <Route path={currentRoute.path} render={props => this.renderCurrentRoute(currentRoute, props)} />
  }

  render() {
    return this.checkAuth()
  }
}
