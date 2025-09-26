import Head from 'next/head'
import { useEffect, useState } from "react"
import styles from '@/styles/navbar.module.scss'
import { useRouter } from 'next/router'




interface navbarProps<T> {
  menuList: T[],
  title?: string
}

export function Navbar(props: navbarProps<NComponent.ILayoutMenu>) {
  const router = useRouter()
  
  const [metaData, setMetaData] = useState<NComponent.IMateData>({
    title: '首页'
  })
  useEffect(() => {
    const { title } = props
    setMetaData({ title: `${title} - AcFun` })
  }, [props.title])
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta charSet="utf8"/>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>
      <main>
        <div className={`${styles.nav}`}>
          {/* TODO 文件链接 */}
          <div className={`${styles.logo}`} onClick={() => router.push('/')}/>
          <div className={`${styles.userContent}`}/>
        </div>
      </main>
    </>

  )
}