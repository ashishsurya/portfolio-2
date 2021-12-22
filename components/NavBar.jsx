import { Modal } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen} className='absolute sm:hidden top-4 right-6'>
        <img src='https://img.icons8.com/material-outlined/24/59B38E/menu--v1.png' />
      </button>
      {/* modal start */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='w-screen h-screen border-2 relative backdrop-filter backdrop-blur-lg'>
          <button
            onClick={handleClose}
            className='absolute top-4 right-6 text-7xl'
          >
            &times;
          </button>
          <div className='flex flex-col space-y-10 items-center pt-20 font-mono text-green-400 text-xl'>
            <p className=''>
              <Link href={'/'}>/home</Link>
            </p>
            <ScrollLink
              className='cursor-pointer'
              to='contact'
              duration={1000}
              smooth
            >
              /contact
            </ScrollLink>
            <p className=''>
              <a href='https://drive.google.com/file/d/11INUvwCRQYt2_l3XSJ2CyoZg_yLhWYdm/view?usp=sharing'>
                /resume
              </a>
            </p>

            <p className=''>
              <Link href={'/projects'}>/projects</Link>
            </p>
          </div>
        </div>
      </Modal>
      {/* modal end */}
      <nav className='hidden sm:flex  sm:items-center sm:justify-center h-[80px] font-mono space-x-3 md:space-x-5 !text-green-300 font-extrabold'>
        <p className=''>
          <Link href={'/'}>/home</Link>
        </p>
        <ScrollLink
          className='cursor-pointer'
          to='contact'
          duration={1000}
          smooth
        >
          /contact
        </ScrollLink>
        <p className=''>
          <a
            href='https://drive.google.com/file/d/11INUvwCRQYt2_l3XSJ2CyoZg_yLhWYdm/view?usp=sharing'
            type='_blank'
          >
            /resume
          </a>
        </p>

        <Link href={'/projects'}>/projects</Link>
      </nav>
    </>
  );
}
