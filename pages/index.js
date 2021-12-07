import Head from 'next/head';
import FeaturedProjects from '../components/FeaturedProjects';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className='max-w-3xl mx-auto  relative'>
      <NavBar />
      <main>
        <Hero />
      </main>
      <FeaturedProjects/>
    </div>
  );
}
