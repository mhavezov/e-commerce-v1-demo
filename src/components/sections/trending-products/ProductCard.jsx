import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import {
  EyeIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';

function ProductCard({
  image,
  category,
  productName,
  price,
  onSale,
  oldPrice,
  countInStock,
  onAddToCart,
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className='relative group flex flex-col p-4 rounded-md hover:shadow-md'>
      <div>
        {onSale && (
          <span className='bg-rose-500 self-start text-xs font-semibold text-gray-100 px-2 py-px rounded  shadow-lg'>
            Sale
          </span>
        )}
        <button className='relative self-end border border-gray-100 bg-gray-100 p-2 rounded-full focus:outline-none float-right'>
          <HeartIcon className='h-4 w-4 active:text-red-300' />
        </button>
      </div>
      <img
        src={image}
        alt={productName}
        className='max-w-full h-auto'
      />
      <span className='text-xs text-gray-400 mb-1'>{category}</span>
      <h1 className='w-2/3 text-md leading-4 tracking-wide font-semibold'>
        {productName}
      </h1>
      <div className='flex items-center  mt-2'>
        {countInStock > 0 ? (
          <span className='text-indigo-500 '>${price}</span>
        ) : (
          <span className='text-gray-400 text-sm'>Out of stock</span>
        )}
        {oldPrice && (
          <del className='text-sm text-gray-400 ml-1'>
            ${oldPrice}
          </del>
        )}
        <div className='flex ml-auto'>
          <StarIcon className='h-4 w-4 text-orange-300' />
          <StarIcon className='h-4 w-4 text-orange-300' />
          <StarIcon className='h-4 w-4 text-orange-300' />
          <StarIcon className='h-4 w-4 text-orange-300' />
          <StarIcon className='h-4 w-4 text-orange-300' />
        </div>
      </div>
      <button
        className='inline-flex justify-center items-center mt-2 py-2 bg-red-400 hover:bg-red-500 opacity-0 group-hover:opacity-100 rounded text-gray-100 font-semibold text-sm focus:outline-none active:bg-red-600 '
        onClick={onAddToCart}
        disabled={countInStock === 0}
      >
        <ShoppingCartIcon className='h-4 w-4 mr-1' />
        Add to cart
      </button>
      <button
        className='inline-flex justify-center items-center mt-2 py-2 opacity-0 group-hover:opacity-100 rounded text-gray-500 hover:text-gray-400 text-sm focus:outline-none'
        onClick={openModal}
      >
        <EyeIcon className='h-4 w-4 mr-1' />
        Quickview
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 flex items-center justify-center'
          onClose={closeModal}
        >
          <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='p-6 transition-all transform bg-white shadow-lg rounded-xl'>
              <div className='flex justify-between border-b pb-2'>
                <h1 className='text-xl font-semibold'>
                  Wireless Headphones
                </h1>
                <button
                  type='button'
                  className=' text-sm font-medium focus:outline-none'
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <div className='flex'>
                <img src='assets/trending/58.jpg' alt='headphones' />
                <div className='flex flex-col mt-4'>
                  <div className='flex h-12 items-center justify-start'>
                    <StarIcon className='h-5 w-5 text-orange-300' />
                    <StarIcon className='h-5 w-5 text-orange-300' />
                    <StarIcon className='h-5 w-5 text-orange-300' />
                    <StarIcon className='h-5 w-5 text-orange-300' />
                    <StarIcon className='h-5 w-5 text-orange-300' />
                    <span className='ml-1'>74 reviews</span>
                  </div>
                  <span className='self-start text-xl font-semibold text-indigo-500'>
                    $129.99
                  </span>
                  <div className='flex mt-4'>
                    <select
                      name='qty'
                      id='qty'
                      className='mr-2 border-gray-200 focus:bg-transparent focus:border-none focus:ring-red-400 focus:border-red-400 text-gray-500 rounded'
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                    <button
                      className='flex items-center py-2 px-8 bg-red-400 hover:bg-red-500 rounded text-gray-100 font-semibold text-md focus:outline-none active:bg-red-600 '
                      onClick={onAddToCart}
                      disabled={countInStock === 0}
                    >
                      <ShoppingCartIcon className='h-4 w-4 mr-1' />
                      Add to cart
                    </button>
                  </div>
                  <h2 className='flex items-center mt-12 pb-1 border-b'>
                    <InformationCircleIcon className='h-5 w-5 mr-1 text-gray-500' />
                    <span className='text-lg font-semibold text-gray-800'>
                      Product info
                    </span>
                  </h2>
                  <h3 className='text-gray-700 text-md font-medium mt-2'>
                    General
                  </h3>
                  <ul className='list-disc list-inside ml-4 text-sm'>
                    <li>Brand: SONY</li>
                    <li>Model: Whatever</li>
                    <li>Model:</li>
                  </ul>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}

export default ProductCard;
