import Head from 'next/head'
import { useEffect, useState } from "react"
import styles from '@/styles/navbar.module.scss'

interface navbarProps<T> {
  menuList: T[],
  title?: string
}

export function Navbar(props: navbarProps<NComponent.ILayoutMenu>) {
  const [metaData, setMetaData] = useState<NComponent.IMateData>({
    title: '首页'
  })
  useEffect(() => {
    const { title } = props
    setMetaData({ title: `${title} - AcFun` })
  }, [])
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta charSet="utf8"/>
      </Head>
      <main>
        <div className={`${styles.nav}`}>
          {/* TODO 文件链接 */}
          <div className={`${styles.logo}`}/>
          <div className={`${styles.userContent}`} />
        </div>
      </main>
    </>

  )
}