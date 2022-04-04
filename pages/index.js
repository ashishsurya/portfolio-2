import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Surya Ashish &middot; Portfolio</title>
      </Head>
      <section className='max-w-5xl mx-auto'>
        <Header />
        <Main />
      </section>
    </div>
  );
}
