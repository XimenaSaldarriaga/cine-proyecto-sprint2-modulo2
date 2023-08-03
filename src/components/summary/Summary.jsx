import './summary.scss';
import { URL_IMAGE } from '../../services/data';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Summary = ({ data, theater, date, hour}) => {

  const ticketPrice = 15000;
  const [value, setValue] = useState(0);
  const currentPrice = ticketPrice * value;

  let { id } = useParams();


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


  return (
    <div className='summary__selectTickets'>
    <div className='selectTickets'>
    <h2 className='details__title'>Selecciona tus boletos</h2>
    <span className='selectTickets__span'>Puedes comprar 10 boletos máximo por transacción</span>
    <div className='selectTickets__info'>
      <span className='selectTickets__quantity'>CANTIDAD</span>
      <div className='selectTickets__numbers'>
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
    <div className='summary'>
      <h2 className='summary__title'>Resumen de compra</h2>
      <div className='summary__details'>
        <div className='summary__image'>
          <img src={`${URL_IMAGE}${data.poster_path}`} alt='' />
        </div>
        <div className="summary__info">
          <div>
            <span className="summary__subtitle">Pelicula:</span>
            <span>{data.title}</span>
          </div>
          <div>
            <span className="summary__subtitle">Cinema:</span>
            <span>{theater}</span>
          </div>
          <div>
            <span className="summary__subtitle">Fecha:</span>
            <span>{date}</span>
          </div>
          <div>
            <span className="summary__subtitle">Hora:</span>
            <span>{hour}</span>
          </div>
        </div>

      </div>
      <p className='summary__paragraph'>Se realizará un cargo por servicio por cada boleto dentro de la orden</p>
      <div className='summary__total'>
        <span>Total (IVA incluido): </span>
        <span className='selectTickets__price'>{currentPrice.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}</span>
      </div>
      <button className='summary__button' style={{ opacity: value >= 1 ? 1 : 0.5 }}>Continuar</button>
    </div>
    </div>
  );
};

export default Summary;










