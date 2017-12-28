import { NotFound, Home } from 'main/components'

export default [
  {
    path: '/',
    exact: true,
    protected: false,
    component: Home
  },
  {
    component: NotFound,
  }
]
