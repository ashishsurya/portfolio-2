import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <button className='relative sm:hidden top-[20px] left-[20px]'>
        <img src='https://img.icons8.com/material-outlined/24/59B38E/menu--v1.png' />
      </button>
      <nav className='hidden sm:flex  sm:items-center sm:justify-center h-[80px] font-mono space-x-3 md:space-x-5 !text-green-300 font-extrabold'>
        <p className='hover:border-b-2'>
          <Link href={'/'}>/home</Link>
        </p>
        <p className='hover:border-b-2'>
          <Link href={'/contact'}>/contact</Link>
        </p>
        <p className='hover:border-b-2'>
          <Link href={'/resume'}>/resume</Link>
        </p>
        <p className='hover:border-b-2'>
          <Link href={'/dev-profiles'}>/devProfiles</Link>
        </p>
        <p className='hover:border-b-2'>
          <Link href={'/projects'}>/projects</Link>
        </p>
      </nav>
    </>
  );
}
