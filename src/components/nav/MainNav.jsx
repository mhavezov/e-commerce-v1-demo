import React from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, ChevronDownIcon } from '@heroicons/react/outline';

function MainNav() {
  return (
    <div className='hidden md:block md:ml-4 max-w-7xl lg:m-auto text-lg font-medium text-gray-500'>
      <div className='space-x-8 flex items-center mt-4'>
        <Link
          to='#'
          className='inline-flex items-center transition-all duration-200 hover:text-red-400'
        >
          <MenuIcon className='h-6 w-6 mr-2' />
          Departments
          <ChevronDownIcon className='h-3 w-3 ml-1' />
        </Link>
        <span className='inline-flex h-8 bg-gray-300 w-px'></span>
        <Link
          to='/'
          className='transition-all duration-200 hover:text-red-400'
        >
          Home
        </Link>
        <Link
          to='/'
          className='transition-all duration-200 hover:text-red-400'
        >
          Shop
        </Link>
        <Link
          to='/'
          className='transition-all duration-200 hover:text-red-400'
        >
          Account
        </Link>
        <Link
          to='/'
          className='transition-all duration-200 hover:text-red-400'
        >
          Pages
        </Link>
        <Link
          to='/'
          className='transition-all duration-200 hover:text-red-400'
        >
          Blog
        </Link>
        <Link
          to='/'
          className='transition-all duration-200 hover:text-red-400'
        >
          Docs / Components
        </Link>
      </div>
    </div>
  );
}

export default MainNav;
