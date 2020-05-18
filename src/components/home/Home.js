
import React from 'react';
import Header from './header/Header';
import Stats from './Stats';
import Steps from './Steps';
import AboutUs from './AboutUs';
import Help from './help/Help';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Header />
      <Stats />
      <Steps />
      <AboutUs />
      <Help />
      <Contact />
    </>
  );
}

export default Home;
