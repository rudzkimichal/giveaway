
import React from 'react';
import Divider from '../Divider';
import List from './List';

const Help = () => {
  return (
    <div id='help'>
      <h2>Komu pomagamy?</h2>
      <Divider />
      <div className='help-menu'>
        <span>Fundacjom</span>
        <span>Organizacjom pozarządowym</span>
        <span>Lokalnym zbiórkom</span>
      </div>
      <List />
    </div>
  );
}

export default Help;
