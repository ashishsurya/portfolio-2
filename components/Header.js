import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className='py-3 px-4 border-b flex items-center justify-between pt-10'>
      <div className='flex items-center space-x-4 ' id='header__left'>
        <img src='/profile.jpeg' className='w-16 h-16 rounded-full shadow' />
        <a
          href='https://drive.google.com/file/d/11INUvwCRQYt2_l3XSJ2CyoZg_yLhWYdm/view?usp=sharing'
          className='text-blue-500 hover:underline'
        >
          RESUME
        </a>
      </div>
      <div id='header__right' className='flex items-center space-x-3'>
        <a href='https://www.linkedin.com/in/surya-ashish-2200961ba/'>
          <img src='https://img.icons8.com/ios-glyphs/36/0B65C2/linkedin.png' />
        </a>
        <a href='https://twitter.com/SuryaAshi'>
          <img src='https://img.icons8.com/ios-glyphs/36/188CD8/twitter--v1.png' />
        </a>
        <a href='https://github.com/ashishsurya126'>
          <img src='https://img.icons8.com/ios-glyphs/36/000000/github.png' />
        </a>
        <a
          href='mailto:ashishsurya126@protonmail.com'
          className='text-blue-500 hover:underline'
        >
          <img src="/protonmail-svgrepo-com.svg" alt="" className='w-[36px]'/>
        </a>
      </div>
    </header>
  );
};

export default Header;
