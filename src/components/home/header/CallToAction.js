
import React from 'react';
import {Link} from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className='cta-container'>
      <h1>Zacznij pomagać!<br />Oddaj niechciane rzeczy w dobre ręce</h1>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="253" height="33" viewBox="0 0 253 33">
          <defs>
            <clipPath id="a">
              <rect width="253" height="33" fill="none"/>
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path d="M160.967,106.2l8.965-8.732-8.965-8.732-8.955,8.732,8.965,8.732" transform="translate(-34.472 -78.774)" fill="none" stroke="#1a1818" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.788"/>
            <path d="M160.967,97.469l8.965-8.732-8.965-8.732-8.955,8.732Z" transform="translate(-34.472 -78.757)" fill="none" stroke="#1a1818" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.788"/>
            <line x1="98.316" transform="translate(0.906 17.154)" fill="none" stroke="#1a1818" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.811"/>
            <path d="M188.708,95.919l-5.638,5.491L172.016,90.645l2.155-2.1,4.679,4.558-4.679,4.558-13.21-12.866-13.19,12.866L143.093,93.1l4.679-4.558,2.155,2.1-11.053,10.766-5.638-5.491" transform="translate(-34.472 -78.757)" fill="none" stroke="#1a1818" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.788"/>
            <line x1="98.316" transform="translate(153.778 17.154)" fill="none" stroke="#1a1818" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.811"/>
            <rect width="7.344" height="7.153" strokeWidth="1.788" fill="none" stroke="#1a1818" strokeLinecap="round" strokeMiterlimit="10" transform="translate(121.307 26.678) rotate(-45)"/>
            <path d="M192.834,100.733h-4.3l-5.428-5.287-9.673,9.422-12.464-12.14-12.464,12.14-9.673-9.422-5.428,5.287h-4.3" transform="translate(-34.472 -78.768)" fill="none" stroke="#1a1818" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.788"/>
          </g>
        </svg>
      </span>
      <div>
        <Link to='/logowanie'>Oddaj<br />rzeczy</Link>
        <Link to='/logowanie'>Zorganizuj<br />zbiórkę</Link>
      </div>
    </div>
  );
}

export default CallToAction;
