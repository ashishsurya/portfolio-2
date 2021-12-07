import ProjectContainer from './ProjectContainer';

function FeaturedProjects() {
  return (
    <div className='px-5 mt-10'>
      <h1 className='text-2xl  text-green-500 font-bold'>Featured Projects</h1>
      {/* projects */}
      <div className='grid md:grid-cols-2 gap-2 mt-1 pl-3 pt-3 md:pl-9'>
        {featuredProjects.map((fp) => (
          <ProjectContainer
            key={fp.id}
            title={fp.title}
            description={fp.description}
            techstack={fp.techStack}
            url={fp.url}
          />
        ))}

      </div>
    </div>
  );
}

const featuredProjects = [
  {
    id: 1,
    title: 'Expensometer',
    description: 'A web app made for maintaining and planning the budgets.',
    techStack: ['React', 'MaterialUI', 'Firebase', 'Chart.js'],
    url: 'https://github.com/suhasparuchuri/Expensometer',
  },
  {
    id: 2,
    title: 'Cricket Score Predictor',
    description: 'Machine learning model built using linear regression algorithm for predicting the cricket scores using supervised learning.',
    techStack: ['Flask', 'Bootstrap', 'Scikit-Learn'],
    url: 'https://github.com/ashishsurya126/flask-score-predictor',
  }
];

export default FeaturedProjects;
