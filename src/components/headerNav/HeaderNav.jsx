import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import SelectHeader from '../selectHeader/SelectHeader';

const HeaderNav = () => {
  return (
    <div className='header__navbar'>
      <Link to="/">
        <img
          className='header__logo'
          src="https://archivos.cinecolombia.com/cineco-cms-frontend/1.0.100/dist/images/logo_cineco.svg"
          alt=""
        />
      </Link>
      <Navbar />
      <SelectHeader />
    </div>
  );
}

export default HeaderNav;
