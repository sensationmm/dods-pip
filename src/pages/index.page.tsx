import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container} data-text="page-home">
      <Head>
        <title>Dods PIP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello Dods PIP!!</h1>
      </main>
    </div>
  );
};

export default Home;
