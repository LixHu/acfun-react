import type { AppProps } from 'next/app'
import { Layout } from "@/component/layout"
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  // 从子组件获取title，如果没有则使用默认值
  const pageTitle = (Component as any).pageTitle || '首页'
  
  return (
    <Layout title={pageTitle} menuList={[]}>
      <Component {...pageProps} />
    </Layout>
  )
}
