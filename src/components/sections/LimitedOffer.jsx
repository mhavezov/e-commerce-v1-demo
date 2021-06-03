import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';

function LimitedOffer() {
  return (
    <section>
      <div className='max-w-7xl mx-4 md:mx-auto p-4 bg-blue-50 rounded-md mt-8 md:flex md:items-center md:justify-around'>
        <div className='mx-8 mt-4'>
          <span className='bg-rose-500 rounded py-px px-2 tracking-wide text-xs text-gray-50 font-semibold'>
            Limited Offer
          </span>
          <div className='mt-4'>
            <h2 className='text-2xl font-light text-gray-600'>
              All new
            </h2>
            <h1 className='text-3xl font-bold text-gray-600'>
              Last Gen iPad Pro
            </h1>
            <h3 className='text-xl leading-tight text-gray-600'>
              at discounted price. Hurry up!
            </h3>
            <h1 className='mt-2'>
              <span className='text-xl font-bold'>33</span>
              <span className='text-md text-gray-600 mr-1'>d</span>
              &nbsp;
              <span className='text-xl font-bold'>02</span>
              <span className='text-md text-gray-600 mr-1'>h</span>
              &nbsp;
              <span className='text-xl font-bold'>20</span>
              <span className='text-md text-gray-600 mr-1'>m</span>
              &nbsp;
              <span className='text-xl font-bold'>29</span>
              <span className='text-md text-gray-600 mr-1'>s</span>
            </h1>
          </div>

          <a
            href='/'
            className='inline-flex group items-center mt-8 bg-indigo-600 rounded py-3 pl-5 pr-4 text-gray-100 text-sm font-semibold'
          >
            View offers
            <ChevronRightIcon className='h-5 w-5 ml-1 transform transition-transform duration-500 group-hover:translate-x-2' />
          </a>
        </div>
        <img src='assets/offer.jpg' alt='' className='max-w-full' />
      </div>
    </section>
  );
}

export default LimitedOffer;
