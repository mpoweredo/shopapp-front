import type { AppProps } from 'next/app'
import Providers from '@/providers/Providers'
import { getCookie } from 'cookies-next'
import { TOKEN } from '@/store/auth/auth.const'
import { useAuthStore } from '@/store/auth/auth'
import dynamic from 'next/dynamic'

export default function App({ Component, pageProps }: AppProps) {
  const token = getCookie(TOKEN)

  useAuthStore.getState().setIsAuth(!!token)

  const Layout = dynamic(() => import('@/templates/Layout/Layout'), {
    ssr: false,
  })

  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}
