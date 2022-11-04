import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SunCalc from 'suncalc';

export default function Home() {
  const times = SunCalc.getTimes(new Date(), 40.7608, 111.8910)

  const moon = SunCalc.getMoonIllumination(new Date());
  const phase = moon.phase;
  console.log('moon', moon)
  console.log(typeof moon.phase)

  let moonmoji;

  if (phase === 0) {
    moonmoji = '🌚'; // New Moon
  } else if (phase === 0.25) {
    moonmoji = '🌓'; // First Quarter
  } else if (phase > 0.25 && phase < 0.5) {
    moonmoji = '🌔'; // Waxing Gibbous
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SunCalc webspace</title>
        <meta name="description" content="SunCalcwebspace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SunCalc webspace
        </h1>

        <p>What time is <strong>Dawn</strong> in Salt Lake City, UT? {times.dawn.toString()}</p>

        <p>What's today's moon? {moonmoji}</p>
      </main>
    </div>
  )
}
