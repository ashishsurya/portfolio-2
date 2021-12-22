import { Link } from 'react-scroll';
export default function Hero({ footerRef }) {
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
          <button
            onClick={() => {
              window.open(
                'https://drive.google.com/file/d/11INUvwCRQYt2_l3XSJ2CyoZg_yLhWYdm/view?usp=sharing',
                '_blank'
              );
            }}
            className='hover:text-green-400 text-sm md:text-base p-2 border-green-400 transition-all duration-500 hover:scale-90'
          >
            View Resume
          </button>
          <Link
            to='contact'
            smooth
            duration={1000}
            className='bg-green-600 p-2 hover:scale-90 transition-all duration-500 cursor-pointer'
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
