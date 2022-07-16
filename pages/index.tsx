import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Nav } from '../components/Nav'
import Hero from '../components/Hero'
const Home: NextPage = () => {
  const Editor = dynamic(() => import('../components/Editor'), { ssr: false }) as any
  
  return (
    <div className={styles.container}>
      <Head>
        <title>A Free Drawing Platform</title>
        <meta name="description" content="Created by Shaham" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    <Nav />
    <Hero />
    </div>
  )
}

export default Home



