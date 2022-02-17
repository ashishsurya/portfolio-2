const Project = ({ name, url, description, topics, homepage }) => {
  return (
    <div className=' relative hover:shadow-2xl  border border-[#61DAFB]  hover:border-none    flex flex-col space-y-4 rounded px-3 py-4'>
      <div className='flex items-center'>
        <h1 className='text-xl flex-1 font-bold'>{name}</h1>
        <a href={url}>
          <img src='https://img.icons8.com/material-outlined/24/ffffff/github.png' />
        </a>
      </div>
      {description && <p className='text-gray-500 flex-1'>{description}</p>}
      <p className='text-gray-500'>{topics.join(', ')}</p>
      
    </div>
  );
};

export default Project;
