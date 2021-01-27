import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
          <Link href={postData.repo}>
            <a target='_blank'>Source code</a>
          </Link>
          {postData.live && (<Link href={postData.live}>
            <a target='_blank'>Live</a>
          </Link>)}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Link href={postData.repo}>
            <a target='_blank'>Source code</a>
        </Link>
        {postData.live && (<Link href={postData.live}>
            <a target='_blank'>Live</a>
        </Link>)}
        
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
