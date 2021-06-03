import React from 'react';
import {
  ChevronRightIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline';

function BNTSection() {
  return (
    <section className='max-w-7xl mx-4 md:mx-auto my-12'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
        <article className='flex flex-col'>
          <h1 className='mb-4 text-xl font-semibold'>Bestsellers</h1>
          <div className='flex border-b py-2'>
            <img
              src='assets/cart-item-01.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                Wireless Bluetooth Headphones
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $259.
              </span>
              <span className='text-xs text-indigo-500'>00</span>
            </div>
          </div>
          <div className='flex border-b py-2'>
            <img
              src='assets/cart-item-02.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                Cloud Security Camera
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $122.
              </span>
              <span className='text-xs text-indigo-500'>00</span>
            </div>
          </div>
          <div className='flex border-b py-2'>
            <img
              src='assets/cart-item-03.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                Android Smartphone S10
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $799.
              </span>
              <span className='text-xs text-indigo-500'>00</span>
            </div>
          </div>
          <div className='flex py-2'>
            <img
              src='assets/cart-item-04.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                Android Smart TV Box
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $67.
              </span>
              <span className='text-xs text-indigo-500'>00</span>{' '}
              <del className='text-sm text-gray-400'>
                $90.<span className='text-xs'>99</span>
              </del>
            </div>
          </div>
          <DotsHorizontalIcon className='h-5 w-5 mt-1' />
          <a
            href='#'
            className='flex w-1/4 group items-center mt-4 text-sm text-red-400'
          >
            View more
            <ChevronRightIcon className='h-5 w-5 ml-1 transform transition-transform duration-500 group-hover:translate-x-2' />
          </a>
        </article>
        <article className='flex flex-col'>
          <h1 className='mb-4 text-xl font-semibold'>New Arrivals</h1>
          <div className='flex border-b py-2'>
            <img
              src='assets/cart-item-05.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                All-in-One PC Apple iMac
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $1499.
              </span>
              <span className='text-xs text-indigo-500'>99</span>
            </div>
          </div>
          <div className='flex border-b py-2'>
            <img
              src='assets/cart-item-06.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                Laserjet Printer All-in-One
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $428.
              </span>
              <span className='text-xs text-indigo-500'>00</span>
            </div>
          </div>
          <div className='flex border-b py-2'>
            <img
              src='assets/cart-item-07.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                Console Controller Charger
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $19.
              </span>
              <span className='text-xs text-indigo-500'>99</span>{' '}
            </div>
          </div>
          <div className='flex py-2'>
            <img
              src='assets/cart-item-08.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                Smart Watch Series 5, Aluminium
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $249.
              </span>
              <span className='text-xs text-indigo-500'>99</span>
            </div>
          </div>
          <DotsHorizontalIcon className='h-5 w-5 mt-1' />
          <a
            href='#'
            className='flex w-1/4 group items-center mt-4 text-sm text-red-400'
          >
            View more
            <ChevronRightIcon className='h-5 w-5 ml-1 transform transition-transform duration-500 group-hover:translate-x-2' />
          </a>
        </article>
        <article className='flex flex-col'>
          <h1 className='mb-4 text-xl font-semibold'>Top rated</h1>
          <div className='flex border-b py-2'>
            <img
              src='assets/cart-item-09.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                Android Smartphone S9
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $749.
              </span>
              <span className='text-xs text-indigo-500'>99</span>{' '}
              <del className='text-sm text-gray-400'>
                $90.<span className='text-xs'>99</span>
              </del>
            </div>
          </div>
          <div className='flex border-b py-2'>
            <img
              src='assets/cart-item-10.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                Wireless Bluetooth Headphones
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $349.
              </span>
              <span className='text-xs text-indigo-500'>99</span>
            </div>
          </div>
          <div className='flex border-b py-2'>
            <img
              src='assets/cart-item-11.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                360 Degrees Camera
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $99.
              </span>
              <span className='text-xs text-indigo-500'>99</span>
            </div>
          </div>
          <div className='flex py-2'>
            <img
              src='assets/cart-item-12.jpg'
              alt=''
              width='64'
              className='mr-1'
            />
            <div>
              <h1 className='font-semibold leading-tight'>
                Digital Camera 40MP
              </h1>
              <span className='text-indigo-500 text-sm font-medium'>
                $210.
              </span>
              <span className='text-xs text-indigo-500'>99</span>{' '}
              <del className='text-sm text-gray-400'>
                $249.<span className='text-xs'>99</span>
              </del>
            </div>
          </div>
          <DotsHorizontalIcon className='h-5 w-5 mt-1' />
          <a
            href='#'
            className='flex w-1/4 group items-center mt-4 text-sm text-red-400'
          >
            View more
            <ChevronRightIcon className='h-5 w-5 ml-1 transform transition-transform duration-500 group-hover:translate-x-2' />
          </a>
        </article>
      </div>
    </section>
  );
}

export default BNTSection;
