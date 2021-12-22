import Project from './Project';

const Container = ({ projects }) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 pt-36 sm:pt-0 mx-4'>
      {projects.map(function ({ name, id, topics, description, html_url }) {
        return (
          <Project
            key={id}
            name={name}
            topics={topics}
            description={description}
            url={html_url}
          />
        );
      })}
    </div>
  );
};

export default Container;
