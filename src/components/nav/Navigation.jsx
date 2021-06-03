import React from 'react';

import TopNav from './TopNav';
import SearchNav from './SearchNav';
import MainNav from './MainNav';

function Navigation() {
  return (
    <nav>
      <TopNav />
      <SearchNav />
      <MainNav />
    </nav>
  );
}

export default Navigation;
