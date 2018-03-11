import { AppPage } from 'main'
import mainRoutes from 'main/routes'
import productRoutes from 'products/routes'

const routes = [
  {
    path: '/',
    component: AppPage,
    routes: [
    //  main routes always should be in the bottom
      ...productRoutes,
      ...mainRoutes
    ]
  }
]

export default routes
