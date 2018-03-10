import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import {ThemeProvider} from 'glamorous'
import theme from 'root/theme'

// custom import
import routes from 'root/routes'

export const Root = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
    </ThemeProvider>
  </Provider>
)
