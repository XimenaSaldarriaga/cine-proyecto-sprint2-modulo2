// import React from 'react' 
// import './home.scss'
// import Cartelera from '../cartelera/Cartelera'

// const Home = () => {
//   return (
//     <div className='home'>
//          <Cartelera />
//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react' 
import './home.scss'
import Cartelera from '../cartelera/Cartelera'
import HeaderNav from '../headerNav/HeaderNav';
import Carousel from '../carousel/Carousel';

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  // Función para filtrar las películas por género
  const filterMoviesByGenre = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <div className='home'>
      <HeaderNav onFilterByGenre={filterMoviesByGenre} />
      <Carousel />
      <Cartelera selectedGenre={selectedGenre} />
    </div>
  )
}

export default Home
