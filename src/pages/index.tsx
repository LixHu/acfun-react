import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Home() {

  const goHello = () => {
    window.location.href = '/hello'
  }
  return (
    <>
      <Head>
        <title>Acfun</title>
        <meta name="description" content="你就猜猜是干啥的吧"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={`${styles.main}`}>
        <button title="111" type="button" onClick={goHello}>hello</button>
      </main>
    </>
  )
}
