const Project = ({ name, url, description, topics }) => {
  return (
    <div className='  hover:shadow-xl  bg-[#28282C]  min-h-[200px] flex flex-col space-y-4 rounded p-2'>
      <h1 className='text-xl'>{name}</h1>
      {description && <p className='text-gray-500 flex-1'>{description}</p>}
      <p className='text-gray-500'>{topics.join(', ')}</p>
    </div>
  );
};

export default Project;
