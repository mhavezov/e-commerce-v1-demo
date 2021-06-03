import React from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  ArrowsExpandIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';

// import { cartData } from './cartData';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const cartTotal = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <Popover className='relative'>
      <Popover.Button className='focus:outline-none flex '>
        <ShoppingCartIcon className='h-6 w-6 md:h-8 md:w-8 text-gray-500 hover:text-red-400' />
        <div className='hidden md:flex flex-col text-xs ml-1'>
          <span className='italic'>My Cart</span>
          <span className='font-bold'>{cartTotal}</span>
        </div>
        <ChevronDownIcon className='h-3 w-3 hidden md:inline-block self-end text-gray-500' />
      </Popover.Button>
      <Transition
        enter='transition duration-100 ease-in'
        enterFrom=' opacity-0'
        enterTo=' opacity-100'
        leave='transition duration-100 ease-out'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Popover.Panel className='absolute z-10 bg-white top-10 right-0  rounded-md shadow-md'>
          <div className='w-80 h-auto overflow-hidden overflow-y-auto p-2'>
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                onRemoveFromCart={() =>
                  dispatch({
                    type: 'CART_REMOVE_ITEM',
                    payload: item.id,
                  })
                }
                {...item}
              />
            ))}
          </div>
          <div className='flex justify-between items-center py-4'>
            <h6 className='ml-2'>
              Subtotal: <span className='font-bold'>{cartTotal}</span>
            </h6>
            <Popover.Button>
              <Link
                to='/cart'
                className='mr-2 bg-red-400 font-semibold text-sm text-gray-100 p-2 inline-flex items-center rounded-sm '
              >
                Expand Cart
                <ArrowsExpandIcon className='h-4 w-4 ml-2 text-gray-100' />
              </Link>
            </Popover.Button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Cart;
