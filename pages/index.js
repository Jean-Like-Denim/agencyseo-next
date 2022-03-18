import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import gsap  from 'gsap'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Agency SEO</title>
        <meta name="description" content="Template for Agency SEO api gateway" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://agencyseo.com.au">Agency SEO</a>
        </h1>

        <p className={styles.description}>
          Looking to Automate your workflow? <br></br>
          Drop in your root domain and find out how easy your job can be.{' '}
          <code className={styles.input}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://agencyseo.com.au/learn-seo" className={styles.card}>
            <h2>Learn SEO &rarr;</h2>
            <p>Get ahead of the competition with our automation tool. Be untouchable with our knowledge base.</p>
          </a>

          <a
            href="https://agencyseo.com.au/how-it-works"
            className={styles.card}
          >
            <h2>How It Works &rarr;</h2>
            <p>Get everything you need to set up your client manually, or automate your workflow with our integrations..</p>
          </a>

          <a
            href="https://agencyseo.com.au/get-started"
            className={styles.card}
          >
            <h2>Get Started &rarr;</h2>
            <p>
              Get three months of set up, research and optimisation—done in 3 seconds.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
