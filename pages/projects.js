import Head from 'next/head';
import React, { Suspense } from 'react';
import NavBar from '../components/NavBar';
import Container from '../components/Projects/Container';

const ProjectsPage = ({ repos }) => {
  return (
    <div className='max-w-3xl mx-auto'>
      <Head>
        <title>Surya Ashish - Projects</title>
      </Head>

      <NavBar />
      <Container projects={repos} />
    </div>
  );
};

export async function getServerSideProps() {
  const repos = await fetch('https://api.github.com/users/ashishsurya126/repos')
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: {
      // repos
      repos: repos.filter((repo) => repo.topics.length > 0),
    },
  };
}

export default ProjectsPage;
