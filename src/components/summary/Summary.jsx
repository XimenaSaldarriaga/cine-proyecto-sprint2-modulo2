import React from 'react';
import './summary.scss';

const Summary = ({ value }) => {
  return (
    <div className='summary'>
      <h2 className='summary__title'>Resumen de compra</h2>
      <div className='summary__details'>
        <div className='summary__image'>
          <img src="" alt="" />
        </div>
        <div className='summary__info'>
          <span>Pelicula:</span>
          <span>Cimena:</span>
          <span>Fecha:</span>
          <span>Funcion:</span>
        </div>
      </div>
      <p className='summary__info'>Se realizará un cargo por servicio por cada boleto dentro de la orden</p>
      <div className='summary__total'>
        <span>Total (IVA incluido): </span>
        <span className='summary__price'>$</span>
      </div>
      <button className='summary__button' style={{ opacity: value >= 1 ? 1 : 0.5 }}>Continuar</button>
    </div>
  );
};

export default Summary;

