
import React from 'react';
import {Link} from 'react-router-dom';
import Divider from './Divider';
import Icon1 from '../../assets/Icon-1.svg';
import Icon2 from '../../assets/Icon-2.svg';
import Icon3 from '../../assets/Icon-3.svg';
import Icon4 from '../../assets/Icon-4.svg';

const Steps = () => {
  return (
    <div id='steps'>
      <h2>Wystarczą 4 proste kroki</h2>
      <Divider />
      <div className='instruction-container'>
        <section>
          <article>
            <img src={Icon1} alt=''/>
            <p>Wybierz rzeczy</p>
            <div />
            <p>ubrania, zabawki, sprzęt i inne</p>
          </article>
          <article>
            <img src={Icon2} alt=''/>
            <p>Spakuj je</p>
            <div />
            <p>skorzystaj z worków na śmieci</p>
          </article>
          <article>
            <img src={Icon3} alt=''/>
            <p>Zdecyduj, komu chcesz pomóc</p>
            <div />
            <p>wybierz zaufane miejsce</p>
          </article>
          <article>
            <img src={Icon4} alt=''/>
            <p>Zamów kuriera</p>
            <div />
            <p>kurier przyjedzie w dogodnym terminie</p>
          </article>
        </section>
      </div>
      <Link to='/logowanie'>Oddaj<br />rzeczy</Link>
    </div>
  );
}

export default Steps;
