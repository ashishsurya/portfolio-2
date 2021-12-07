export default function Hero() {
  return (
    <div className='mt-20 px-5 space-y-6'>
      <h1 className='text-5xl text-green-400 md:text-7xl font-bold tracking-wide'>
        Surya Ashish
      </h1>
      <div className='text-gray-400 text-base md:text-lg'>
        <p>📚 Currently studying B.Tech, 6th semester.</p>
        <p>👀 Looking for internships in web-development field.</p>
        {/* action buttons */}
        <div className='my-3 space-x-2 text-sm md:text-base text-white'>
          <button className='border text-sm md:text-base p-2 border-green-400  hover:bg-green-900'>
            View Resume
          </button>
          <button className="bg-green-600 p-2">Contact Me</button>
        </div>
      </div>
    </div>
  );
}