import Head from 'next/head';
import { useRef } from 'react';
import ContactContainer from '../components/ContactContainer';
import FeaturedProjects from '../components/FeaturedProjects';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import BasicTabs from '../components/SkillsTabsContainer';

export default function Home() {

  const footerRef = useRef(null);

  return (
    <div className='max-w-3xl mx-auto'>
      <NavBar />
      <main>
        <Hero footerRef={footerRef}/>
      </main>
      <FeaturedProjects />
      <BasicTabs />
      <ContactContainer reference={footerRef}/>
    </div>
  );
}
