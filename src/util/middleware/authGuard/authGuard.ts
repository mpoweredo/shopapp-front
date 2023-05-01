import { NextRequest, NextResponse } from 'next/server'
import { TOKEN } from '@/store/auth/auth.const'
import { AUTH_PATHS, PROTECTED_PATHS } from '@/templates/Layout/Layout.const'
import { profileURL, signinURL } from './authGuard.const'
import { getIsOnRoutes } from './authGuard.util'

const authGuard = ({ nextUrl, cookies, url: currentURL }: NextRequest) => {
  const isAuth = !!cookies.get(TOKEN)

  const pathname = nextUrl.pathname.slice(1).split('/')[0] || ''

  const isAuthPage = getIsOnRoutes(AUTH_PATHS, pathname)
  const isPageProtected = getIsOnRoutes(PROTECTED_PATHS, pathname)

  if (!isAuth && isPageProtected) {
    return NextResponse.redirect(new URL(signinURL, currentURL))
  }

  if (isAuth && isAuthPage) {
    return NextResponse.redirect(new URL(profileURL, currentURL))
  }
}

export { authGuard }
