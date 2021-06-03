import React from 'react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
function ProductDetails() {
  return (
    <section className='bg-blue-topbar'>
      <div className='max-w-7xl mx-auto pt-8 space-x-1 flex items-center justify-center'>
        <a
          href='/'
          className='text-gray-200 text-sm font-medium flex items-center'
        >
          <HomeIcon className='h-4 w-4 mr-1' />
          Home
        </a>
        <ChevronRightIcon className='h-5 w-5 text-gray-400' />
        <a href='/shop' className='text-gray-200 text-sm font-medium'>
          Shop
        </a>
        <ChevronRightIcon className='h-5 w-5 text-gray-400' />
        <a href='/' className='text-gray-400 text-sm font-medium'>
          Product Page
        </a>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl text-gray-200 font-bold my-3'>
          Smartwatch Youth Edition
        </h1>
        <div className='flex items-center pb-24'>
          <StarIcon className='h-4 w-4 text-amber-500' />
          <StarIcon className='h-4 w-4 text-amber-500' />
          <StarIcon className='h-4 w-4 text-amber-500' />
          <StarIcon className='h-4 w-4 text-amber-500' />
          <StarIcon className='h-4 w-4 text-gray-500' />
          <span className='ml-2 text-gray-400 font-medium text-sm'>
            74 Reviews
          </span>
        </div>
      </div>
      <div className='relative min-h-screen bg-white flex justify-center'>
        <div class='absolute min-h-full w-3/4 bg-white -top-32 m-12 shadow-md rounded-lg'>
          <img src='assets/product-details/01.jpg' alt='' />
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
