import React from 'react';
import { Link } from 'react-router-dom';
import './cardCartelera.scss';
import { URL_IMAGE } from '../../services/data';

const CardCartelera = ({ data }) => {
  const handleClick = () => {
    // Redirect the user to the details page with the clicked movie data
    // Assuming you have set up the route as '/details/:id'
    window.location.href = `/details/${data.id}`;
  };

  return (
    <div className='card'>
      <div onClick={handleClick} className='card-link'>
        <div>
          <img className='card__image' src={`${URL_IMAGE + data.poster_path}`} alt='' />
        </div>
        <div className='card__info'>
          <h1 className='card__title'>{data.title}</h1>
          <span className='card__span'>Título en Inglés: {data.original_title}</span>
          <span className='card__span'>Estreno: {data.release_date}</span>
          <span className='card__span'>Género: {data.genres.join(', ')}</span>
          <span className='card__runtime'>{data.duration} Min</span>
        </div>
      </div>
    </div>
  );
};

export default CardCartelera;




