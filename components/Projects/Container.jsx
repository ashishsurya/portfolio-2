import Project from './Project';
import Marquee from 'react-fast-marquee';

const Container = ({ projects }) => {
  return (
    <>
      <div className='text-3xl font-black py-4 px-4 text-center tracking-normal pt-36 sm:pt-0 my-36'>
        <p className=''>
          Most of the projects are done using{' '}
          <span className='tracking-tighter text-red-500'>React / Tailwind</span> and now I am
          exporing backend technologies and apis, and also learned about{' '}
          <span className='tracking-tighter text-blue-500'>Next.js</span>
        </p>
        <Marquee gradient={false} className='mt-[50px]' pauseOnHover speed={30}>
          <img src='https://img.icons8.com/color/100/000000/html-5.png' />
          <img src='https://img.icons8.com/plasticine/100/000000/react.png' />
          <img src='https://img.icons8.com/color/100/000000/css3.png' alt='' />
          <img
            src='https://img.icons8.com/color/100/000000/python--v1.png'
            alt=''
          />
          <img
            src='https://img.icons8.com/color/100/000000/javascript.png'
            alt=''
          />
          <img
            src='https://img.icons8.com/color/100/000000/material-ui.png'
            alt=''
          />
          <img
            src='https://img.icons8.com/color/100/000000/postgreesql.png'
            alt=''
          />
          <img
            src='https://img.icons8.com/color/100/000000/firebase.png'
            alt=''
          />
        </Marquee>
      </div>

      <div className='grid grid-cols-1 gap-8 pb-3 sm:grid-cols-2  mx-4'>
        {projects.map(function ({
          name,
          id,
          topics,
          description,
          html_url,
          homepage,
        }) {
          return (
            <Project
              key={id}
              name={name}
              topics={topics}
              description={description}
              url={html_url}
              homepage={homepage}
            />
          );
        })}
      </div>
    </>
  );
};

export default Container;
