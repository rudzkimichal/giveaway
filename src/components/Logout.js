

import React from 'react';
import {Link} from 'react-router-dom';
import Divider from './Divider';

const Logout = () => {

  return (
    <div className='logout-container'>
      <div className='logout-content'>
        <h2>Wylogowanie nastąpiło pomyślnie!</h2>
        <Divider />
        <Link className='btn' to='/'>Strona główna</Link>
      </div>
    </div>
  );
}

export default Logout;
