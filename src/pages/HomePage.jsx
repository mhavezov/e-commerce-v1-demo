import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import BNTSection from '../components/sections/BNTSection';
import BrandsSlider from '../components/sections/BrandsSlider';
import LimitedOffer from '../components/sections/LimitedOffer';
import TrendingProducts from '../components/sections/trending-products/TrendingProducts';
import YTSection from '../components/sections/YTSection';

function HomePage() {
  return (
    <>
      <Header />
      <TrendingProducts />
      <LimitedOffer />
      <BrandsSlider />
      <BNTSection />
      <YTSection />
      <Footer />
    </>
  );
}

export default HomePage;
