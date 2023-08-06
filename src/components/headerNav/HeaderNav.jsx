import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectHeader from '../selectHeader/SelectHeader';
import './headerNav.scss'

const HeaderNav = ({ onFilterByGenre }) => {

  const [selectedGenre, setSelectedGenre] = useState(null);

  const filterMoviesByGenre = (genreId) => {
    setSelectedGenre(genreId);
  };
  return (
    <div className='header__navbar'>
      <Link to="/">
        <img
          className='header__logo'
          src="https://archivos.cinecolombia.com/cineco-cms-frontend/1.0.100/dist/images/logo_cineco.svg"
          alt=""
        />
      </Link>
      <nav className='navbar'>
        <button className='navbar__button' onClick={() => onFilterByGenre()}>En Cartelera</button>
        <button className='navbar__button' onClick={() => onFilterByGenre(28)}>Acción</button>
        <button className='navbar__button' onClick={() => onFilterByGenre(27)}>Terror</button>
        <button className='navbar__button' onClick={() => onFilterByGenre(878)}>Ciencia ficción</button>
        <button className='navbar__button' onClick={() => onFilterByGenre(35)}>Comedia</button>
        <button className='navbar__button' onClick={() => onFilterByGenre(18)}>Drama</button>
        <button className='navbar__button' onClick={() => onFilterByGenre(12)}>Aventura</button>
      </nav>
      <SelectHeader />
    </div>
  );
}

export default HeaderNav;




