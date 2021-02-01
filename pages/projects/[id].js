import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.css';

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
        <div className={utilStyles.btnGroup}>
          {postData.repo && (<Link href={postData.repo}>
            <a target='_blank' className={utilStyles.projectLink}>
              <i className="fab fa-github"></i>
            </a>
          </Link>)}
          {postData.live && (<Link href={postData.live}>
            <a target='_blank' className={utilStyles.projectLink}>
              <i className="fas fa-play-circle"></i>
            </a>
          </Link>)}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
