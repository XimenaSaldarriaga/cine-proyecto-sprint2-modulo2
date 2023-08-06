import React from 'react'
import HeaderNav from '../headerNav/HeaderNav'
import ok from "../../images/ok.png"
import './transaction.scss' 


const Transaction = () => {
  return (
    <div>
      <HeaderNav/>
      <div className='transaction'>
        <div className='transaction__ok'>
          <img className='transaction__img' src={ok} alt="" />
          <p className='transaction__succes'>¡Transacción exitosa!</p>
        </div>
      </div>
    </div>
  )
}

export default Transaction