import { Link } from 'react-scroll';
export default function Hero({ footerRef }) {
  return (
    <div className='mt-20 px-5 space-y-6'>
      <h1 className='text-5xl text-[#61DAFB] md:text-7xl font-bold '>
        Surya Ashish
      </h1>
      <div className='text-white text-base md:text-lg'>
        <p>📚 Currently studying B.Tech, 6th semester.</p>
        <p>👀 Looking for internships in web-development field.</p>
        {/* action buttons */}
        <div className='my-3 space-x-2 text-sm md:text-base text-white'>
          
        </div>
      </div>
    </div>
  );
}
