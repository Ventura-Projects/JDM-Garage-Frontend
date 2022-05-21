import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>JDM Garage</title>
        <meta name="description" content="Ventura for Patch 1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Our Patch 1 Project!<br/>
          JDM Garageᕙ(`▿´)ᕗ
        </h1>

        <p className={styles.description}>
          Wish Ventura! at our Journey and Adventure!🥂🔥.
          <br />
          <span style={{ color: '#2225', fontSize:27}}>幸運を祈ります！ 私たちの旅と冒険で! <br />
          <span style={{fontSize:14}}>Kōun o inorimasu! Watashitachi no tabi to bōken de!</span>
          </span>
        </p>
        <p style={{color:'#2222'}}>Ventura: Meaning Good Fortune.</p>
        </main>
    </div>
  )
}

export default Home
