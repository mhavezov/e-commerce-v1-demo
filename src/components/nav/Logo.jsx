import React from 'react';
import { Link } from 'react-router-dom';

function Logo({ src, alt }) {
  return (
    <>
      <Link to='/'>
        <img src={src} alt={alt} width='142' />
      </Link>
    </>
  );
}

export default Logo;
