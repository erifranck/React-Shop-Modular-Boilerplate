import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// custom import
import routes from 'root/routes'

export const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>{renderRoutes(routes)}</HashRouter>
  </Provider>
)
