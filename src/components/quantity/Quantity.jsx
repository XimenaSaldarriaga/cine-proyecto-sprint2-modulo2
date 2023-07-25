import React from 'react'
import Header from '../header/Header'
import './quantity.scss'
import SelectTickets from '../selectTickets/SelectTickets'


const Quantity = () => {
  return (
    <div className='quantity'>
      <Header />
      <div className="quantity__selectTickets">
      <SelectTickets />
      </div>
    </div>
  )
}

export default Quantity