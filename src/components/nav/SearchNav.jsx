import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';

import Cart from './cart/Cart';
import SignIn from './SignIn';
import IconsContainer from './IconsContainer';
import Logo from './Logo';

function SearchNav() {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='py-5 flex justify-between items-center ml-4 lg:ml-0'>
        <Logo src='/assets/logo-dark.png' alt='Cartzilla logo' />
        <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-5 justify-items-center'>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search for products'
            className='w-full py-3 mx-0 border-none bg-gray-50 focus:z-10 focus:bg-transparent md:col-span-2 lg:col-span-4 focus:ring-red-400 focus:border-red-400 text-gray-500 rounded-sm'
          />
          <label htmlFor='categories' className='sr-only'>
            Categories
          </label>
          <select
            name='categories'
            id='categories'
            className='border-none bg-gray-50 focus:bg-transparent focus:ring-red-400 focus:border-red-400 text-gray-500 rounded-sm'
          >
            <option>All categories</option>
            <option>Computers</option>
            <option>Smartphones</option>
            <option>TV, Video, Audio</option>
            <option>Cameras</option>
            <option>Headphones</option>
            <option>Wearables</option>
            <option>Printers</option>
            <option>Video Games</option>
            <option>Home Music</option>
            <option>Data Storage</option>
          </select>
        </div>
        <IconsContainer>
          <button className='focus:outline-none md:hidden'>
            <MenuIcon className='h-6 w-6 text-gray-500 hover:text-red-400' />
          </button>
          <SignIn />
          <Cart />
        </IconsContainer>
      </div>
    </div>
  );
}

export default SearchNav;
