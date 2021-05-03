import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Techhbox
        </h1>

        <div className={styles.grid}>
          <a href="https://www.interviewbit.com/jenkins-interview-questions/" className={styles.card}>
            <h3>Jenkins Interview Questions &rarr;</h3>
            <p>Find in-depth information about qustions asked in a Jenkins Interview.</p>
          </a>

          <a href="https://www.interviewbit.com/spring-boot-interview-questions/" className={styles.card}>
            <h3>Spring Boot Interview Questions &rarr;</h3>
            <p>Find in-depth information about qustions asked in a Spring Boot Interview!</p>
          </a>

          <a
            href="https://www.interviewbit.com/machine-learning-interview-questions/"
            className={styles.card}
          >
            <h3>Machine Learning Interview Questions &rarr;</h3>
            <p>Find in-depth information about qustions asked in a Machine Learning Interview.</p>
          </a>

          <a
            href="https://www.interviewbit.com/tableau-interview-questions/"
            className={styles.card}
          >
            <h3>Tableau Interview Questions &rarr;</h3>
            <p>
              Find in-depth information about qustions asked in a Tableau Interview.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
