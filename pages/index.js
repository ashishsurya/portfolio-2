import Head from 'next/head';
import ContactContainer from '../components/ContactContainer';
import FeaturedProjects from '../components/FeaturedProjects';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className='max-w-3xl mx-auto'>
      <NavBar />
      <main>
        <Hero />
      </main>
      <FeaturedProjects />
      <ContactContainer />
    </div>
  );
}
