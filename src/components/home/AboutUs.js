
import React from 'react';
import Divider from './Divider';
import signature from '../../assets/Signature.svg';

const AboutUs = () => {
  return (
    <div id='about'>
      <div className='about-info-container'>
        <div className='about-info'>
          <h2>O nas</h2>
          <Divider />
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
            turnip greens parsnip.
          </p>
          <img src={signature} alt='Signature' />
        </div>
      </div>
      <div className='about-img-container' />
    </div>
  );
}

export default AboutUs;
