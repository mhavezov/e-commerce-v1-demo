import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';

import { data } from './data';
// import { cartData } from '../../nav/cart/cartData';
import ProductCard from './ProductCard';

function TrendingProducts() {
  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, qty: 1 },
    });
  };

  return (
    <section className='max-w-7xl mx-auto'>
      <div className='flex items-center justify-between mx-4 pt-14 pb-6 border-b'>
        <h1 className='text-2xl font-semibold tracking-tide text-gray-700'>
          Trending Products
        </h1>
        <a
          href='/'
          className='inline-flex items-center text-indigo-500 text-sm border rounded border-indigo-400 py-2 pl-5 pr-3 transition-colors duration-150 hover:bg-indigo-500 hover:text-gray-100'
        >
          More products
          <ChevronRightIcon className='h-5 w-5 ml-1' />
        </a>
      </div>
      <div className='grid grid-cols-2 gap-x-8 md:grid-cols-3 lg:grid-cols-4 mt-10'>
        {data.map(item => (
          <ProductCard
            key={item.id}
            onAddToCart={() => handleAddToCart(item)}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;
