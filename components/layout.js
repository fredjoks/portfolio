import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Fred Jõks';
export const siteTitle = 'Fred Jõks';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal portfolio page"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={`${styles.header} ${utilStyles.headingMd} ${styles.headerComponent} ${styles.component}`}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <small className={utilStyles.lightText}>Junior Software Developer <a href='https://khk.ee/eriala/noorem-tarkvaraarendaja-veebispetsialist/' target='_blank'>@TartuKHK</a></small>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <section>
          <p>I am progress-oriented optimist.
            Let's <strong>build a better future</strong> by being at least a bit less wrong than we were the day before.  

          </p>
        </section>
      </header>
      <main className={`${utilStyles.headingMd} ${styles.padding1px} ${styles.component} ${styles.projectComponent} ${styles.content}`}>
        {children}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a className={utilStyles.titles}>Back to home</a>
            </Link>
          </div>
        )}
      </main>
      <div className={styles.break}></div>
      <section className={`${utilStyles.headingMd} ${styles.padding1px} ${styles.component} ${styles.projectComponent} ${styles.content}`}>
            <h2 className={utilStyles.headingLg}>Recent activity</h2>
              <ul className={utilStyles.list}>
                  <li className={utilStyles.listItem}>
                    📘 <strong>Clean Code</strong> by Robert C. Martin
                  </li>
                  <li className={utilStyles.listItem}>
                    📘 <strong>Don't Make Me Think</strong> by Steve Krug
                  </li>
                  <li className={utilStyles.listItem}>
                    🏆 <strong>#1</strong> at JA Eesti's hackathon <strong>"9h enterprise"</strong> as Team Leader
                  </li>
              </ul>
      </section>
    </div>
  );
}
