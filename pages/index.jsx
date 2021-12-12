import Link from 'next/link';
import { client } from '../lib/client';
import Layout from '../components/Layout';
import { formatTime } from '../lib/day';

export default function Home({ blog }) {
  const publishedAt = formatTime(blog.publishedAt);
  
  return (
    <>
      <Layout>
        <div>
          <ul>
            {blog.map((blog) => (
              <li key={blog.id}>
                <span className="pr-5">{publishedAt}</span>
                <Link href={`/blog/${blog.id}`}>
                  <a className="text-blue-600 hover:text-blue-500">
                    {blog.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents
    }
  };
};
