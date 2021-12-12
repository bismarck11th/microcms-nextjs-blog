import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = "Kazuki's Blog" }) => {
  return (
    <div className="bg-[#eee] min-h-screen font-mono text-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="w-screen flex items-center justify-between flex-wrap bg-gray-800 p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <a className="font-semibold text-xl text-gray-200 hover:opacity-80">
              Kazuki&apos;s Blog
            </a>
          </Link>
        </div>
      </nav>
      <main className="mx-auto w-7/12 py-6">{children}</main>
    </div>
  );
};

export default Layout;
