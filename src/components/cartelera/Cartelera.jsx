import React, { useEffect, useState } from 'react';
import './cartelera.scss';
import { getDataMovies } from '../../services/data';
import CardCartelera from '../cardCartelera/CardCartelera';
import { useNavigate } from 'react-router-dom';

const Cartelera = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDataMovies();
    setMovies(data);
  };

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className='cartelera'>
      <h1 className='cartelera__title'>EN CARTELERA</h1>
      <div className='cartelera__cards'>
        {movies.map((movie, index) => (
          <CardCartelera
            key={index}
            data={movie}
            onCardClick={() => handleCardClick(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cartelera;




