import { client } from '../../lib/client';
import Layout from '../../components/Layout';
import { formatTime } from '../../lib/day';

export default function BlogId({ blog }) {
  const publishedAt = formatTime(blog.publishedAt);

  return (
    <Layout title={`Kazuki's Blog | ${blog.title}`}>
      <h1 className="font-bold text-5xl py-5">{blog.title}</h1>
      <p className="pb-5">{publishedAt}</p>
      <div
        className="text-xl"
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`
        }}
      />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data
    }
  };
};
