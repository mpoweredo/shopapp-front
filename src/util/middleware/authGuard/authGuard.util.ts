import { Route } from 'nextjs-routes'

const getIsOnRoutes = (routesArray: Route['pathname'][], pathname: string) => {
  return routesArray.some((path) =>
    pathname !== '' ? path.includes(pathname) : false
  )
}

export { getIsOnRoutes }
