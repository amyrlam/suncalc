import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SunCalc from 'suncalc';

export default function Home() {
  const times = SunCalc.getTimes(new Date(), 40.7608, 111.8910)

  return (
    <div className={styles.container}>
      <Head>
        <title>SunCalcwebspace</title>
        <meta name="description" content="SunCalcwebspace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SunCalcwebspace
        </h1>

        <p>What time is <strong>Dawn</strong> in Salt Lake City, UT? {times.dawn.toString()}</p>
      </main>
    </div>
  )
}
