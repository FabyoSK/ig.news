import { GetStaticProps } from 'next';
import Head  from 'next/head';
import styles from './styles.module.scss';


export default function Posts() {
  return (
    <>
    <Head>
      <title>Posts | ig.news</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
          <div>
            <a>
              <span>
                <time>Nov 3, 2020 </time>
                <strong>5 Reasons to Use TypeScript with React</strong>
                <p>Over the past few years, TypeScript has gain immense popularity among frontend developers. Improved maintainability, code consistency, and future browser support are few reasons behind its success. Though many other frameworks and libraries adopt TypeScript by default, React remained neutral, giving the developers the option to choose between TypeScript and JavaScript. </p>
              </span>
            </a>
          </div>
          <div>
            <a>
              <span>
                <time>Nov 3, 2020 </time>
                <strong>5 Reasons to Use TypeScript with React</strong>
                <p>Over the past few years, TypeScript has gain immense popularity among frontend developers. Improved maintainability, code consistency, and future browser support are few reasons behind its success. Though many other frameworks and libraries adopt TypeScript by default, React remained neutral, giving the developers the option to choose between TypeScript and JavaScript. </p>
              </span>
            </a>
          </div>
      </div>
    </main>
  </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts,
    }
  }
}