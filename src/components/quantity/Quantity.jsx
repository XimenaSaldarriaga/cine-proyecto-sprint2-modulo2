import React from 'react'
import Header from '../header/Header'

const Quantity = () => {
  return (
    <div>
      <Header />
      <h2>Selecciona tus boletos</h2>
      <span>Puedes comprar 10 boletos máximo por transacción</span>
      <div>
        <span>CANTIDAD</span>
        <span>$</span>
        <button className='button'>-</button>
        <span></span>
        <button className='button'>+</button>
      </div>
    </div>
  )
}

export default Quantity