
import React from 'react';
import {Link} from 'react-router-dom';
import Divider from '../../Divider';

const CallToAction = () => {
  return (
    <div className='cta-container'>
      <h1>Zacznij pomagać!<br />Oddaj niechciane rzeczy w dobre ręce</h1>
      <Divider />
      <div>
        <Link to='/logowanie'>Oddaj<br />rzeczy</Link>
        <Link to='/logowanie'>Zorganizuj<br />zbiórkę</Link>
      </div>
    </div>
  );
}

export default CallToAction;
