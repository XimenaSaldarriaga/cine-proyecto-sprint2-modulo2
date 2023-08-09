import React, { useState } from 'react' 
import './home.scss'
import Cartelera from '../cartelera/Cartelera'
import HeaderNav from '../headerNav/HeaderNav';
import Carousel from '../carousel/Carousel';

const Home = () => {

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const filterMoviesByGenre = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <div className='home'>
      <HeaderNav onFilterByGenre={filterMoviesByGenre} loggedInUserProp={loggedInUser} setLoggedInUserProp={setLoggedInUser} />
      <Carousel />
      <Cartelera selectedGenre={selectedGenre} loggedInUserProp={loggedInUser} />
    </div>
  )
}

export default Home
