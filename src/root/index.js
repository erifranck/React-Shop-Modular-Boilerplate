import React from 'react'
import ReactDOM from 'react-dom'
// custom import
import configureStore from 'root/store'
import { Root } from 'root/components'

const store = configureStore()
ReactDOM.render(<Root store={store} />, document.getElementById('root'))
