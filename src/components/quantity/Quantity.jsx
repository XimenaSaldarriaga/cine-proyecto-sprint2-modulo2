import React  from 'react';
import './quantity.scss'
import SelectTickets from '../selectTickets/SelectTickets'



const Quantity = () => {

  return (
    <>
      <div className='quantity'>
        <div className="quantity__selectTickets">
          <SelectTickets />
        </div>
      </div>
    </>
  )
}

export default Quantity




