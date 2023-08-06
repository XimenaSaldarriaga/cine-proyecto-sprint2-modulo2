import React from 'react'
import HeaderNav from '../headerNav/HeaderNav'
import ok from "../../images/ok.png"
import './transaction.scss'


const Transaction = () => {
  return (
    <div>
      <HeaderNav />
      <div className='transaction'>
        <div className='transaction__ok'>
          <img className='transaction__img' src={ok} alt="" />
          <p className='transaction__succes'>¡Transacción exitosa!</p>
        </div>
        <div className='transaction__info'>
          <div className='transaction__subtitle'>
            <h2 className='transaction__h2'>Información de compra</h2>
            <p className='transaction__bill'>Facturación</p>
          </div>
          <div className='transaction__data'>
            <div className='transaction__datadiv'>
              <p className='transaction__up'>Código</p>
              <p className='transaction__down'>#2545854752</p>
            </div>
            <div className='transaction__datadiv'>
              <p className='transaction__up'>Fecha</p>
              <p className='transaction__down'>Agosto 10, 2023</p>
            </div>
            <div className='transaction__datadiv'>
              <p className='transaction__up'>Total</p>
              <p className='transaction__down'>$30.000</p>
            </div>
            <div className='transaction__datadiv'>
              <p className='transaction__up'>Método de pago</p>
              <p className='transaction__down'>Master Card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction