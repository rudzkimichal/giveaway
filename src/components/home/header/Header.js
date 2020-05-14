
import React from 'react';
import Nav from './Nav';
import CallToAction from './CallToAction';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='hero-img-container' />
      <div className='navbar-cta-container'>
        <Nav />
        <CallToAction />
      </div>
    </div>
  );
}

export default Header;
