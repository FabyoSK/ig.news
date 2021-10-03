import { GetStaticProps } from 'next';
import Head  from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

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
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  });

  console.log(response);
  
  return {
    props: {
      // posts
    }
  }
}