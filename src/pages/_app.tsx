import type { AppProps } from 'next/app'
import { Public_Sans } from 'next/font/google'
import Providers from '@/providers/Providers'

const publicSans = Public_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <main className={publicSans.className}>
        <Component {...pageProps} />
      </main>
    </Providers>
  )
}
