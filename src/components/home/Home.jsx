import './home.scss'
import HeaderNav from '../headerNav/HeaderNav';
import Carousel from '../carousel/Carousel';
import React, { useEffect, useState } from 'react';
import { getDataMovies } from '../../services/data';
import { useNavigate } from 'react-router-dom';
import { URL_IMAGE } from '../../services/data';

const Home = () => {

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const filterMoviesByGenre = (genreId) => {
    setSelectedGenre(genreId);
  };
  
  const [movies, setMovies] = useState([]);
  const [genreTitle, setGenreTitle] = useState('EN CARTELERA');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDataMovies();
    setMovies(data);
  };

  const genreMapping = {
    null: 'EN CARTELERA',
    28: 'ACCIÓN',
    27: 'TERROR',
    878: 'CIENCIA FICCIÓN',
    35: 'COMEDIA',
    18: 'DRAMA',
    12: 'AVENTURA',
  };

  useEffect(() => {
    setGenreTitle(genreMapping[selectedGenre] || 'EN CARTELERA');
  }, [selectedGenre, genreMapping]);

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
    : movies;

  const navigate = useNavigate();

  const handleCardClick = (data) => {
    if (loggedInUser) {
      navigate(`/admin/${data.id}`);
    } else if (data.id) {
      navigate(`/details/${data.id}`);
    }
  };

  return (
    <div className='home'>
        <HeaderNav onFilterByGenre={filterMoviesByGenre} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}
        />
      <Carousel />
      <div className='cartelera'>
        <h1 className='cartelera__title'>{genreTitle}</h1>
        <div className='cartelera__cards'>
          {filteredMovies.map((movie, index) => (
            <div className='card' onClick={() => handleCardClick(movie)}>
              <div>
                <img className='card__image' src={`${URL_IMAGE + movie.poster_path}`} alt='' />
              </div>
              <div className='card__info'>
                <h1 className='card__title'>{movie.title}</h1>
                <span className='card__span'>Título en Inglés: {movie.original_title}</span>
                <span className='card__span'>Estreno: {movie.release_date}</span>
                <span className='card__span'>Género: {movie.genres.join(', ')}</span>
                <span className='card__runtime'>{movie.duration} Min</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
