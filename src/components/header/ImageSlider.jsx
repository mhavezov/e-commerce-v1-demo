import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/outline';

function ImageSlider({ slides = [] }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(
      slides.length > 0 && current === 0
        ? slides.length - 1
        : current - 1
    );
  };
  const nextSlide = () => {
    setCurrent(
      slides.length > 0 && current === slides.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <>
      {slides.length > 0 &&
        slides.map((slide, i) => (
          <Fragment key={i}>
            {i === current && (
              <div className='flex w-full flex-col items-center md:flex-row'>
                <div className='md:relative left-96 -bottom-52 flex space-x-8 my-9 md:my-0 md:self-center'>
                  <button
                    className='cursor-pointer focus:outline-none border p-2 rounded-full'
                    onClick={prevSlide}
                  >
                    <ChevronLeftIcon className='h-5 w-5 z-10' />
                  </button>
                  <button
                    className='cursor-pointer focus:outline-none border p-2 rounded-full'
                    onClick={nextSlide}
                  >
                    <ChevronRightIcon className='h-5 w-5 z-10' />
                  </button>
                </div>
                <img
                  src={slide.image}
                  alt=''
                  className='order-first md:order-last'
                />
                <div className='text-center md:text-left lg:mr-24'>
                  <span className='block text-2xl md:text-4xl font-light tracking-wide'>
                    {slide.title}
                  </span>
                  <span className='mt-3 w-full text-4xl md:text-6xl font-bold text-gray-700 tracking-wide'>
                    {slide.subtitle}
                  </span>
                  <span className='mt-2 block text-xl md:text-xl font-light tracking-wide'>
                    {slide.slogan}
                  </span>

                  <Link
                    to='/'
                    className='inline-flex items-center py-2 px-3 md:py-3 md:px-6 bg-red-400 transition-all duration-200 hover:bg-red-500 rounded-md my-6 text-gray-50 font-medium'
                  >
                    Shop Now
                    <ArrowRightIcon className='h-5 w-5 ml-3' />
                  </Link>
                </div>
              </div>
            )}
          </Fragment>
        ))}
    </>
  );
}

export default ImageSlider;
