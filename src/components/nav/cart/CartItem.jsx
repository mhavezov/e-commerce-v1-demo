import React from 'react';
import { Link } from 'react-router-dom';
import { XIcon } from '@heroicons/react/outline';

function CartItem({
  image,
  productName,
  price,
  qty,
  onRemoveFromCart,
}) {
  return (
    <div className='mt-4 flex justify-between items-center'>
      <div className='flex items-center'>
        <Link to='/'>
          <img src={image} width='64' alt='Product' />
        </Link>
        <div className='pl-2'>
          <h5>
            <Link to='/'>{productName}</Link>
          </h5>
          <span className='text-indigo-400 mr-2'>{price}</span>
          <span className=''>x {qty}</span>
        </div>
      </div>
      <button
        className='text-red-400 p-1 focus:outline-none'
        type='button'
        onClick={onRemoveFromCart}
      >
        <XIcon className='h-5 w-5 hover:text-red-600' />
      </button>
    </div>
  );
}

export default CartItem;
