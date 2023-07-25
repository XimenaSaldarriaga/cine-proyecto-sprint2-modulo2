import React, { useState } from 'react';
import './selectTickets.scss';

const SelectTickets = () => {
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

  return (
    <div className='selectTickets'>
      <h2 className='details__title'>Selecciona tus boletos</h2>
      <span className='selectTickets__span'>Puedes comprar 10 boletos máximo por transacción</span>
      <div className='selectTickets__info'>
        <span className='selectTickets__quantity'>CANTIDAD</span>
        <div className='selectTickets__numbers'>
          <span className='selectTickets__price'>$</span>
          <div className='selectTickets__buttons'>
            <button className='selectTickets__button' onClick={handleMinus}>-</button>
            <span className='selectTickets__number'>{value}</span>
            <button className='selectTickets__button' onClick={handlePlus}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTickets;
