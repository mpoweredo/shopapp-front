import type { Route } from 'nextjs-routes'

type TPathnames = Route['pathname']

const AUTH_PATHS: TPathnames[] = ['/signin', '/signup']
const PROTECTED_PATHS: TPathnames[] = ['/profile']

export { AUTH_PATHS, PROTECTED_PATHS }
