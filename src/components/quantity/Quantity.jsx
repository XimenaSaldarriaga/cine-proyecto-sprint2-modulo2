import React  from 'react';
import './quantity.scss'
import SelectTickets from '../selectTickets/SelectTickets'
import HeaderNav from '../headerNav/HeaderNav';



const Quantity = () => {

  return (
    <>
      <HeaderNav />
      <div className='quantity'>
        <div className="quantity__selectTickets">
          <SelectTickets/>
        </div>
      </div>
    </>
  )
}

export default Quantity




