import { NotFound } from 'main/components'
import {HomePage} from 'main'

export default [
  {
    path: '/',
    exact: true,
    protected: false,
    component: HomePage
  },
  {
    component: NotFound,
  }
]
