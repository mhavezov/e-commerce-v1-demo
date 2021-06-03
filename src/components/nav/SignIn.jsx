import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/outline';

function SignIn() {
  return (
    <>
      <button className='focus:outline-none md:inline-flex '>
        <UserIcon className='h-6 w-6 md:h-8 md:w-8 text-gray-500 hover:text-red-400' />
        <div className='hidden md:flex flex-col text-xs ml-1'>
          <span className='italic'>Hello, guest</span>
          <Link to='/signin' className='hover:text-red-400'>
            sign in
          </Link>
        </div>
      </button>
    </>
  );
}

export default SignIn;
