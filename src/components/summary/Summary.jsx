import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './summary.scss';
import { API_URL, API_KEY, URL_IMAGE } from '../../services/data';

const Summary = ({value, data}) => {


  return (
    <div className='summary'>
      <h2 className='summary__title'>Resumen de compra</h2>
      <div className='summary__details'>
        <div className='summary__image'>
          {/* <img src={`${URL_IMAGE}${data.poster_path}`} alt='' /> */}
        </div>
        <div className='summary__info'>
          <div>
            <span className='summary__subtitle'>Pelicula:</span>
            <span></span>
          </div>
          <div>
            <span className='summary__subtitle'>Cinema:</span>
            <span></span>
          </div>
          <div>
            <span className='summary__subtitle'>Fecha:</span>
            <span></span>
          </div>
          <div>
            <span className='summary__subtitle'>Funcion:</span>
            <span></span>
          </div>
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




