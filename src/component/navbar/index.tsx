import Head from 'next/head'
import { useEffect, useState } from "react"
import styles from '@/styles/navbar.module.scss'

interface navbarProps<T> {
  menuList: T[],
  title?: string
}

export function Navbar(props: navbarProps<NComponent.ILayoutMenu>) {
  const [metaData, setMetaData] = useState<NComponent.IMateData>({
    title: '首页 - Acfun'
  })
  useEffect(() => {
    const { title } = props
    setMetaData({ title })
  }, [])
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta charSet="utf8"/>
      </Head>
      <main>
        <div className={`${styles.nav}`}>

          right
        </div>
      </main>
    </>

  )
}