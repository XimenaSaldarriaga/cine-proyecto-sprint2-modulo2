import React, { useEffect, useState } from 'react';
import './cartelera.scss';
import { getDataMovies } from '../../services/data';
import CardCartelera from '../cardCartelera/CardCartelera';

const Cartelera = ({ selectedGenre, loggedInUser, setLoggedInUser }) => {
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

  return (
    <div className='cartelera'>
      <h1 className='cartelera__title'>{genreTitle}</h1>
      <div className='cartelera__cards'>
        {filteredMovies.map((movie, index) => (
          <CardCartelera
            setLoggedInUser={setLoggedInUser}
            loggedInUser={loggedInUser}
            key={index}
            data={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Cartelera;
















