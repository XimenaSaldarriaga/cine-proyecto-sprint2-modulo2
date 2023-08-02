import React from 'react';
import './summary.scss';
import { URL_IMAGE } from '../../services/data';

const Summary = ({ value, data, selectedTheater, selectedDate, selectedHour, currentPrice }) => {

  console.log("selectedTheater:", selectedTheater);
  console.log("selectedDate:", selectedDate);
  console.log("selectedHour:", selectedHour);


  return (
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
            <span>{selectedTheater ? selectedTheater.name : ''}</span>
          </div>
          <div>
            <span className="summary__subtitle">Fecha:</span>
            <span>{selectedDate ? selectedDate : ''}</span>
          </div>
          <div>
            <span className="summary__subtitle">Hora:</span>
            <span>{selectedHour ? selectedHour : ''}</span>
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
  );
};

export default Summary;







