import '@styles/globals.scss'
import '@styles/admin.scss'
import '@styles/user.scss'
import '@styles/home.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
