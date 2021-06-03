import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  HeartIcon,
  LocationMarkerIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/outline';

const languageOptions = [
  { flag: '/assets/flags/de.png', lng: 'Deutsch', value: 'DE' },
  { flag: '/assets/flags/en.png', lng: 'English', value: 'ENG' },
  { flag: '/assets/flags/fr.png', lng: 'Français', value: 'FR' },
  { flag: '/assets/flags/it.png', lng: 'Italiano', value: 'IT' },
];

function TopNav() {
  const [currency, setCurrency] = useState('$ USD');
  const [language, setLanguage] = useState('ENG');
  const [flag, setFlag] = useState('/assets/flags/en.png');

  const handleButtonClick = ({ value, flag }) => {
    setLanguage(value);
    setFlag(flag);
  };

  return (
    <div className='bg-blue-topbar'>
      <div className='flex justify-between py-3 max-w-7xl m-auto'>
        <Popover className='flex items-center relative ml-4 lg:ml-0'>
          {({ open }) => (
            <>
              <img src={flag} alt='' width='20' className='mr-2' />
              <Popover.Button className='text-gray-400 text-sm font-medium outline-none focus:outline-none flex transition-all duration-300 hover:text-gray-200'>
                {language} / {currency}{' '}
                <ChevronDownIcon className='h-5 w-5 ml-1' />
              </Popover.Button>
              <Transition
                show={open}
                enter='transition duration-100 ease-out'
                enterFrom=' opacity-0'
                enterTo=' opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom=' opacity-100'
                leaveTo=' opacity-0'
              >
                <Popover.Panel className='absolute z-10 bg-white left-0 top-6 w-36 p-2 flex items-center justify-center rounded-md shadow-md'>
                  <div className='flex flex-col'>
                    <label htmlFor='currency' className='sr-only'>
                      Currency
                    </label>
                    <select
                      id='currency'
                      name='currency'
                      className='my-4 focus:ring-red-400 focus:border-red-400 bg-transparent text-gray-500 rounded-md'
                      onChange={e => setCurrency(e.target.value)}
                    >
                      <option>$ USD</option>
                      <option>€ EUR</option>
                      <option>£ UKP</option>
                      <option>¥ JPY</option>
                    </select>

                    {languageOptions.map(option => (
                      <Popover.Button
                        as='div'
                        className='flex items-center pb-4 cursor-pointer hover:text-red-400 text-gray-500 focus:outline-none'
                        key={option.lng}
                      >
                        <img
                          src={option.flag}
                          alt={option.lng}
                          width='20'
                          className='mr-2'
                        />
                        <button
                          onClick={() => handleButtonClick(option)}
                        >
                          {option.lng}
                        </button>
                      </Popover.Button>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <div className='hidden md:flex text-gray-400  text-sm font-semibold space-x-4'>
          <Link
            to='/account-wishlist'
            className='flex items-center hover:text-gray-200'
          >
            <HeartIcon className='h-4 w-4 text-red-400 mr-1' />
            Wishlist (3)
          </Link>
          <Link
            to='/comparison'
            className='flex items-center hover:text-gray-200'
          >
            <SwitchHorizontalIcon className='h-4 w-4 text-red-400 mr-1' />
            Compare (3)
          </Link>
          <Link
            to='/order-tracking'
            className='flex items-center hover:text-gray-200'
          >
            <LocationMarkerIcon className='h-4 w-4 text-red-400 mr-1' />
            Order tracking
          </Link>
        </div>
        <div className='mr-4 md:hidden lg:mr-0'>
          <button className='flex  text-gray-400 text-sm font-medium transition-all duration-300 hover:text-gray-200'>
            Wishlist / Compare / Track{' '}
            <ChevronDownIcon className='h-5 w-5 ml-1' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
