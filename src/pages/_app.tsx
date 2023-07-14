import type { AppProps } from 'next/app'
import { Layout } from "@/component/layout"
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout title="首页" menuList={[]}>
      <Component {...pageProps} />
    </Layout>
  )
}
