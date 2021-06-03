import React from 'react';
import {
  UserAddIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';

function YTSection() {
  return (
    <section className='max-w-7xl mx-auto rounded-lg border p-4'>
      <div className='grid grid-cols-1 md:grid-cols-yt'>
        <div className='bg-blue-light flex flex-col items-center p-12'>
          <img
            src='assets/yt-logo.png'
            alt='YouTube logo'
            width='120'
          />
          <div className='flex items-center my-8'>
            <img
              src='assets/yt-subscribers.png'
              alt='picture of YouTube subscribers'
              width='126'
            />
            <span className='ml-2'>250k+</span>
          </div>
          <a
            href='/'
            className='flex items-center bg-red-yt text-gray-100 text-sm font-semibold rounded py-2 px-4'
          >
            <UserAddIcon className='h-5 w-5 mr-1' />
            Subscribe*
          </a>
          <span className='text-center mt-4 leading-tight'>
            *View latest gadgets reviews available for purchase in our
            store.
          </span>
        </div>
        <div className='pl-4'>
          <div className='md:flex md:justify-between md:mb-6'>
            <h1 className='mt-4 text-xl font-semibold text-gray-800 '>
              Latest videos from our channel
            </h1>
            <a
              href='/'
              className='my-4 md:m-0 inline-flex items-center text-indigo-500 text-sm border rounded border-indigo-400 py-2 pl-5 pr-3 transition-colors duration-150 hover:bg-indigo-500 hover:text-gray-100'
            >
              More videos
              <ChevronRightIcon className='h-5 w-5 ml-1' />
            </a>
          </div>
          <div className='grid gap-4 grid-cols-2 lg:grid-cols-3 overflow-hidden mb-4'>
            <div className='overflow-hidden'>
              <iframe
                width='270'
                height='135'
                src='https://www.youtube.com/embed/eY9dXcjkVx8'
              ></iframe>
              <h1 className='mt-1 text-gray-800 font-semibold text-md'>
                iPad Pro M1 Review: The Ultimate Spec Bump!
              </h1>
            </div>
            <div className='overflow-hidden'>
              <iframe
                width='270'
                height='135'
                src='https://www.youtube.com/embed/stsJe7pJaKU'
              ></iframe>
              <h1 className='mt-1 text-gray-800 font-semibold text-md'>
                Google Pixel 5 Impressions: A New Strategy?
              </h1>
            </div>
            <div className='overflow-hidden'>
              <iframe
                width='270'
                height='135'
                src='https://www.youtube.com/embed/7Eck-bCIPPg'
              ></iframe>
              <h1 className='mt-1 text-gray-800 font-semibold text-md'>
                You've Never Seen a Laptop Do THIS...
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
}

export default YTSection;
