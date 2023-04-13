import '@styles/globals.scss'
import '@styles/admin.scss'
import '@styles/user.scss'
import '@styles/home.scss'
import type { AppProps } from 'next/app'
import axios from 'axios'
import { URL } from '@lib/constants'
import Content from 'pages/_content'

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  
  return (
    <Content>
      <Component {...pageProps} />
    </Content>
  )
}
