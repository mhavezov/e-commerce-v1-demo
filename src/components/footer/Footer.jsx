import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import {
  MailIcon,
  CurrencyEuroIcon,
  CreditCardIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline';
import {
  FaApple,
  FaGooglePlay,
  FaHeadset,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa';
import { BiRocket } from 'react-icons/bi';

const languageOptions = [
  { flag: '/assets/flags/de.png', lng: 'Deutsch', value: 'DE' },
  { flag: '/assets/flags/en.png', lng: 'English', value: 'ENG' },
  { flag: '/assets/flags/fr.png', lng: 'Français', value: 'FR' },
  { flag: '/assets/flags/it.png', lng: 'Italiano', value: 'IT' },
];

function Footer() {
  const [currency, setCurrency] = useState('$ USD');
  const [language, setLanguage] = useState('ENG');
  const [flag, setFlag] = useState('/assets/flags/en.png');

  const handleButtonClick = ({ value, flag }) => {
    setLanguage(value);
    setFlag(flag);
  };
  return (
    <footer className='mt-12 bg-blue-topbar'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 px-4 py-8'>
        <div>
          <h2 className='text-lg font-bold tracking-wide text-gray-50'>
            Shop departments
          </h2>
          <ul className='mt-4 text-gray-400 text-sm font-medium space-y-2'>
            <li>
              <a href='#'>Sneakers & Athletic</a>
            </li>
            <li>
              <a href='#'>Athletic Apparel</a>
            </li>
            <li>
              <a href='#'>Sandals</a>
            </li>
            <li>
              <a href='#'>Jeansc</a>
            </li>
            <li>
              <a href='#'>Shirts & Tops</a>
            </li>
            <li>
              <a href='#'>Shorts</a>
            </li>
            <li>
              <a href='#'>T-Shirts</a>
            </li>
            <li>
              <a href='#'>Swimwear</a>
            </li>
            <li>
              <a href='#'>Clogs & Mules</a>
            </li>
            <li>
              <a href='#'>Bags & Wallets</a>
            </li>
            <li>
              <a href='#'>Accessories</a>
            </li>
            <li>
              <a href='#'>Sunglasses</a>
            </li>
            <li>
              <a href='#'>Watches</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-bold tracking-wide text-gray-50'>
            Account & Shipping info
          </h2>
          <ul className='mt-4 text-gray-400 text-sm font-medium space-y-2'>
            <li>
              <a href='#'>Your account</a>
            </li>
            <li>
              <a href='#'>Shipping rates & polices</a>
            </li>
            <li>
              <a href='#'>Refunds & returns</a>
            </li>
            <li>
              <a href='#'>Order tracking</a>
            </li>
            <li>
              <a href='#'>Delivery info</a>
            </li>
            <li>
              <a href='#'>Taxes & fees</a>
            </li>
          </ul>
          <h2 className='mt-8 text-lg font-bold tracking-wide text-gray-50'>
            About us
          </h2>
          <ul className='mt-4 text-gray-400 text-sm font-medium space-y-2'>
            <li>
              <a href='#'>About us</a>
            </li>
            <li>
              <a href='#'>Our team</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>News</a>
            </li>
          </ul>
        </div>
        <div className='mt-8 col-span-full lg:col-start-3 lg:mt-0'>
          <span className='mt-8 text-lg font-bold tracking-wide text-gray-50'>
            Stay informed
          </span>
          <div className='relative flex items-center mt-4'>
            <MailIcon className='h-5 w-5 absolute text-gray-500 left-2' />
            <label htmlFor='subscribe'></label>
            <input
              type='email'
              name='subscribe'
              placeholder='Your email'
              className='w-full border-none bg-gray-50 focus:ring-red-400 text-gray-500 rounded-l pl-9'
            />

            <button className='bg-red-400 text-gray-50 font-medium text-md py-2 px-4 rounded-r'>
              Subscribe*
            </button>
          </div>
          <span className='block text-xs text-gray-400 mt-2'>
            *Subscribe to our newsletter to receive early discount
            offers, updates and new products info.
          </span>
          <h1 className='mt-8 text-lg font-bold tracking-wide text-gray-50'>
            Download our app
          </h1>
          <div className='mt-4 space-x-4'>
            <a
              href='#'
              className='inline-flex items-center py-1 px-2 rounded-md bg-blue-btn hover:bg-gray-800 transition-colors duration-200'
            >
              <FaApple className='text-3xl text-gray-50 mr-2' />

              <div className='flex flex-col '>
                <span className='text-xs text-gray-400'>
                  Download from
                </span>
                <span className='text-gray-50 font-medium'>
                  App Store
                </span>
              </div>
            </a>
            <a
              href='#'
              className='inline-flex items-center py-1 px-2 rounded-md bg-blue-btn hover:bg-gray-800 transition-colors duration-200'
            >
              <FaGooglePlay className='text-3xl text-gray-50 mr-2 ' />

              <div className='flex flex-col '>
                <span className='text-xs text-gray-400'>
                  Download from
                </span>
                <span className='text-gray-50 font-medium'>
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <section className='bg-blue-btn'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8 border-b border-gray-600'>
            <div>
              <h2 className='inline-flex items-start lg:items-center '>
                <BiRocket className='text-red-400 mr-4 text-5xl' />
                <div className='flex flex-col'>
                  <h2 className='text-md font-medium text-gray-50'>
                    Fast delivery
                  </h2>
                  <span className='text-sm font-medium text-gray-400'>
                    Free delivery for all orders over &euro;200
                  </span>
                </div>
              </h2>
            </div>
            <div>
              <h2 className='inline-flex items-start lg:items-center '>
                <CurrencyEuroIcon className='h-10 w-10 text-red-400 mr-4' />
                <div className='flex flex-col'>
                  <h2 className='text-md font-medium text-gray-50'>
                    Money back guarantee
                  </h2>
                  <span className='text-sm font-medium text-gray-400'>
                    We return money within 30 days
                  </span>
                </div>
              </h2>
            </div>
            <div>
              <h2 className='inline-flex items-start lg:items-center'>
                <FaHeadset className='text-red-400 mr-4 text-4xl' />
                <div className='flex flex-col'>
                  <h2 className='text-md font-medium text-gray-50'>
                    24/7 customer support
                  </h2>
                  <span className='text-sm font-medium text-gray-400'>
                    Friendly 24/7 customer support
                  </span>
                </div>
              </h2>
            </div>
            <div>
              <h2 className='inline-flex items-start lg:items-center '>
                <CreditCardIcon className='h-10 w-10 text-red-400 mr-4' />
                <div className='flex flex-col'>
                  <h2 className='text-md font-medium text-gray-50'>
                    Fast delivery
                  </h2>
                  <span className='text-sm font-medium text-gray-400'>
                    Free delivery for orders over &euro;200
                  </span>
                </div>
              </h2>
            </div>
          </div>

          <div className='flex items-center justify-center lg:justify-start lg:pt-6 mt-10'>
            <h1 className='text-gray-50 text-2xl lg:text-3xl font-bold mr-6'>
              Shopzilla&trade;
            </h1>
            <div className='border border-gray-500 p-1 rounded'>
              <Popover className='flex items-center relative ml-4 lg:ml-0'>
                {({ open }) => (
                  <>
                    <img
                      src={flag}
                      alt=''
                      width='20'
                      className='mr-2'
                    />
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
                      <Popover.Panel className='absolute z-10 bg-white left-0 -top-64 w-36 p-2 flex items-center justify-center rounded-md shadow-md'>
                        <div className='flex flex-col'>
                          <label
                            htmlFor='currency'
                            className='sr-only'
                          >
                            Currency
                          </label>
                          <select
                            id='currency'
                            name='currency'
                            className='my-4 focus:ring-red-400 focus:border-red-400 bg-transparent text-gray-500 rounded-md'
                            onChange={e =>
                              setCurrency(e.target.value)
                            }
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
                                onClick={() =>
                                  handleButtonClick(option)
                                }
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
            </div>
          </div>
          <ul className='flex justify-center lg:justify-start space-x-6 text-gray-400 text-sm font-medium mt-6'>
            <li>
              <Link to='/outlets'>Outlets</Link>
            </li>
            <li>
              <Link to='/affiliates'>Affiliates</Link>
            </li>
            <li>
              <Link to='/support'>Support</Link>
            </li>
            <li>
              <Link to='/privancy'>Privancy</Link>
            </li>
            <li>
              <Link to='/terms'>Terms of use</Link>
            </li>
          </ul>
          <div className='flex justify-center lg:justify-end mt-6 lg:-mt-16 space-x-2 text-gray-50'>
            <a
              href='www.twitter.com'
              className='bg-blue-topbar p-3 rounded hover:bg-gray-200 hover:text-blue-400 transition-colors duration-300'
            >
              <FaTwitter className='text-md' />
            </a>
            <a
              href='www.facebook.com'
              className='bg-blue-topbar p-3 rounded hover:bg-gray-200 hover:text-blue-600 transition-colors duration-300'
            >
              <FaFacebookF className='text-md' />
            </a>
            <a
              href='www.instagram.com'
              className='bg-blue-topbar p-3 rounded hover:bg-gray-200 hover:text-purple-400 transition-colors duration-300'
            >
              <FaInstagram className='text-md' />
            </a>
            <a
              href='www.pinterest.com'
              className='bg-blue-topbar p-3 rounded hover:bg-gray-200 hover:text-rose-600 transition-colors duration-300'
            >
              <FaPinterestP className='text-md' />
            </a>
            <a
              href='www.youtube.com'
              className='bg-blue-topbar p-3 rounded hover:bg-gray-200 hover:text-red-yt transition-colors duration-300'
            >
              <FaYoutube className='text-md' />
            </a>
          </div>
          <div className='flex justify-center lg:justify-end mt-6'>
            <img
              src='assets/payments/visa.png'
              alt='payments'
              width='187'
            />
          </div>
          <div className='flex justify-center lg:justify-start text-gray-400 text-xs font-medium mt-8 lg:mt-4 pb-6'>
            &copy; 2021, Developed by{' '}
            <a
              href='mailto:mhavezov@gmail.com'
              className='text-gray-50 ml-1'
            >
              Miroslav Havezov
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
