import {FormPage, ProductListPage} from 'products'

export default [
  {
    path: '/products',
    exact: true,
    protected: false,
    component: ProductListPage
  },
  {
    path: '/products/add',
    component: FormPage
  }
]
