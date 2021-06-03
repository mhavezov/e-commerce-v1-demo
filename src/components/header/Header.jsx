import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';

import ImageSlider from './ImageSlider';

const slidesData = [
  {
    image: '/assets/04.jpg',
    title: 'Explore the best',
    subtitle: 'VR Collection',
    slogan: 'on the market',
  },
  {
    image: '/assets/05.jpg',
    title: 'World of music with',
    subtitle: 'Headphones',
    slogan: 'Choose between top brands',
  },
  {
    image: '/assets/06.jpg',
    title: 'Check our huge',
    subtitle: 'Smartphones',
    slogan: 'and Accessories collection',
  },
];

function Header() {
  return (
    <header className='bg-blue-light'>
      <div className='max-w-7xl my-4 mx-auto'>
        <div className='flex justify-center lg:justify-between'>
          <div className='hidden md:block space-y-4 my-8'>
            <div className='bg-indigo-50 flex w-64 rounded-md justify-evenly items-center shadow-sm'>
              <img src='assets/banner-sm01.png' alt='' width='125' />
              <div className='py-4 px-2'>
                <h5 className='mb-2 font-semibold text-xl'>
                  <span className='font-light'>Next Gen</span>
                  <br />
                  Video <span className='font-light'>with</span>
                  <br />
                  360 Cam
                </h5>
                <Link
                  to='/'
                  className='text-indigo-300 hover:text-indigo-400 inline-flex items-center'
                >
                  Shop now
                  <ChevronRightIcon className='h-5 w-5 text-indigo-300 ' />
                </Link>
              </div>
            </div>
            <div className='bg-orange-50 flex w-64 rounded-md justify-evenly items-center shadow-sm'>
              <img src='assets/banner-sm02.png' alt='' width='125' />
              <div className='py-4 px-2 '>
                <h5 className='mb-2 font-semibold text-xl'>
                  <span className='font-light'>Top Rated </span>
                  <br /> Gadgets <br />
                  <span className='font-light'>are on </span>
                  Sale
                </h5>
                <Link
                  to='/'
                  className='text-orange-300 hover:text-orange-400 inline-flex items-center'
                >
                  Shop now
                  <ChevronRightIcon className='h-5 w-5 text-orange-300' />
                </Link>
              </div>
            </div>
            <div className='bg-emerald-50 flex w-64 rounded-md justify-evenly items-center shadow-sm'>
              <img src='assets/banner-sm03.png' alt='' width='125' />
              <div className='py-4 px-2'>
                <h5 className='mb-2 font-semibold text-xl'>
                  <span className='font-light'>Catch Big</span>
                  <br />
                  Deals <span className='font-light'>on </span>
                  <br />
                  Earbuds
                </h5>
                <Link
                  to='/'
                  className='text-emerald-300 hover:text-emerald-400 inline-flex items-center'
                >
                  Shop now
                  <ChevronRightIcon className='h-5 w-5 text-emerald-300' />
                </Link>
              </div>
            </div>
          </div>
          <ImageSlider slides={slidesData} />
        </div>
      </div>
    </header>
  );
}

export default Header;
