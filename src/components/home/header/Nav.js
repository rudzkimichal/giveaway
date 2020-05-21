
import React from 'react';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

const Nav = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-login-container'>
        <Link to='/logowanie' replace>Zaloguj</Link>
        <Link to='/rejestracja' replace>Załóż konto</Link>
      </div>
      <nav>
        <Link to='/'>Start</Link>
        <ScrollLink to='steps' smooth={true} duration={500}>O co chodzi?</ScrollLink>
        <ScrollLink to='about' smooth={true} duration={500}>O nas</ScrollLink>
        <ScrollLink to='help' smooth={true} duration={500}>Fundacja i organizacje</ScrollLink>
        <ScrollLink to='contact' smooth={true} duration={500}>Kontakt</ScrollLink>
      </nav>
    </div>
  );
}

export default Nav;
