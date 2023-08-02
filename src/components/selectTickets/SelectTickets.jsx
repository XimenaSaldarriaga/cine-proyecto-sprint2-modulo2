import React, { useState, useEffect } from 'react';
import './selectTickets.scss';
import Summary from '../summary/Summary';
import { useParams } from 'react-router-dom';
import { getDataMovies } from '../../services/data';

const SelectTickets = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedTheater, setselectedTheater] = useState(null);

  const [movie, setMovie] = React.useState([]);
  let { id } = useParams();

  React.useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await getDataMovies();
      setMovie(data);
    };
    fetchMoviesData();
  }, []);

  const selecMovie = movie.find((movi) => movi.id === Number(id));
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    if (value < 10) {
      setValue(Math.min(value + 1, 10));
    }
  };

  const handleMinus = () => {
    if (value > 0) {
      setValue(Math.max(value - 1, 0));
    }
  };

  const ticketPrice = 15000;
  const currentPrice = ticketPrice * value;

  return (
    <>
      <div className='selectTickets'>
        <h2 className='details__title'>Selecciona tus boletos</h2>
        <span className='selectTickets__span'>Puedes comprar 10 boletos máximo por transacción</span>
        <div className='selectTickets__info'>
          <span className='selectTickets__quantity'>CANTIDAD</span>
          <div className='selectTickets__numbers'>
          <span className='selectTickets__price'>{currentPrice.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}</span>
            <div className='selectTickets__buttons'>
              <button className='selectTickets__button' onClick={handleMinus}>
                -
              </button>
              <span className='selectTickets__number'>{value}</span>
              <button className='selectTickets__button' onClick={handlePlus}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      {selecMovie && (
        <Summary
          value={value}
          data={selecMovie}
          selectedDate={selectedDate}
          selectedHour={selectedHour}
          selectedTheater={selectedTheater}
          currentPrice={currentPrice}
        />
      )}
    </>
  );
};

export default SelectTickets;








