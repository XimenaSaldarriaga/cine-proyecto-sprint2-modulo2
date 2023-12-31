import React from 'react'
import HeaderNav from '../headerNav/HeaderNav'
import ok from "../../images/ok.png"
import './transaction.scss'
import Summary from '../summary/Summary'
import { useLocation } from 'react-router-dom';


const Transaction = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataStr = queryParams.get('data');
  const data = JSON.parse(decodeURIComponent(dataStr));
  const theater = queryParams.get('theater');
  const date = queryParams.get('date');
  const hour = queryParams.get('hour');
  const sala = queryParams.get('sala');
  const value = queryParams.get('value');
  const currentPrice = queryParams.get('currentPrice');
  const selectedButtons = queryParams.get('selectedButtons');
  const seatSummary = queryParams.get('seatSummary');
  const transactionId = queryParams.get('transactionId');
  const currentDate = new Date();
  
  const formattedDate = currentDate.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });


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
              <p className='transaction__down'>#{transactionId}</p>
            </div>
            <div className='transaction__datadiv'>
              <p className='transaction__up'>Fecha</p>
              <p className='transaction__down'>{formattedDate}</p>
            </div>
            <div className='transaction__datadiv'>
              <p className='transaction__up'>Total</p>
              <p className='transaction__down'>$ {currentPrice}</p>
            </div>
            <div className='transaction__datadiv'>
              <p className='transaction__up'>Método de pago</p>
              <p className='transaction__down'>Master Card</p>
            </div>
          </div>
        </div>

        <div className='transaction__summary'>
      <Summary
            data={data}
            date={date}
            hour={hour}
            theater={theater}
            sala={sala}
            value={value}
            currentPrice={currentPrice}
            selectedButtons={selectedButtons}
            seatSummary={seatSummary}
            isTransactionPage={true}
          />
      </div>
      </div>
    </div>
  )
}

export default Transaction