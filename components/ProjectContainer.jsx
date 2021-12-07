export default function ProjectContainer({ title, description, techstack, url }) {
  const handleClick = () => {
    window.open(url, "_blank")
  }
  return (
    <div onClick={handleClick} className='shadow-2xl hover:scale-110  transition-all duration-500 max-w-full rounded-xl  py-4 px-5 cursor-newtab bg-[#28282c]'>
      <h1 className='text-lg md:text-2xl font-extrabold pb-3'>{title}</h1>
      <p className='text-sm'>{description}</p>
      <p className="text-sm text-gray-300 pt-3">{techstack?.join(", ")}</p>
    </div>
  );
}
