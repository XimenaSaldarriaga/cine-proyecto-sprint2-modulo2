import React, { useEffect, useState } from 'react';
import './summary.scss';
import { getDataMovies, URL_IMAGE } from '../../services/data'; 

const Summary = ({ value }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movies = await getDataMovies();
        setMovieData(movies[0]); 
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, []);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='summary'>
      <h2 className='summary__title'>Resumen de compra</h2>
      <div className='summary__details'>
        <div className='summary__image'>
          <img src={`${URL_IMAGE}${movieData.poster_path}`} alt={movieData.title} />
        </div>
        <div className='summary__info'>
          <div>
            <span className='summary__subtitle'>Pelicula:</span>
            <span>{movieData.title}</span>
          </div>
          <div>
            <span className='summary__subtitle'>Cinema:</span>
            <span>{}</span>
          </div>
          <div>
            <span className='summary__subtitle'>Fecha:</span>
            <span>{}</span>
          </div>
          <div>
            <span className='summary__subtitle'>Funcion:</span>
            <span>{}</span>
          </div>
        </div>
      </div>
      <p className='summary__paragraph'>Se realizará un cargo por servicio por cada boleto dentro de la orden</p>
      <div className='summary__total'>
        <span>Total (IVA incluido): </span>
        <span className='summary__price'>${}</span>
      </div>
      <button className='summary__button' style={{ opacity: value >= 1 ? 1 : 0.5 }}>
        Continuar
      </button>
    </div>
  );
};

export default Summary;




