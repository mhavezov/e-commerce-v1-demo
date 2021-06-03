import React from 'react';

function BrandsSlider() {
  return (
    <section className='border mx-4 mt-10 max-w-7xl md:mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-4'>
        <div className='flex justify-center p-4'>
          <img src='assets/brands/14.png' alt='' width='165' />
        </div>
        <div className='flex justify-center p-4'>
          <img src='assets/brands/16.png' alt='' width='165' />
        </div>
        <div className='flex justify-center p-4'>
          <img src='assets/brands/17.png' alt='' width='165' />
        </div>
        <div className='flex justify-center p-4'>
          <img src='assets/brands/18.png' alt='' width='165' />
        </div>
      </div>
    </section>
  );
}

export default BrandsSlider;
