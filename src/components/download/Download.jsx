import React from 'react'
import HeaderNav from '../headerNav/HeaderNav'
import qr from '../../images/qr.webp'
import './download.scss'
import { useLocation } from 'react-router-dom';

const Download = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataStr = queryParams.get('data');
  const data = JSON.parse(decodeURIComponent(dataStr));
  const theater = queryParams.get('theater');
  const date = queryParams.get('date');
  const hour = queryParams.get('hour');
  const sala = queryParams.get('sala');
  const seatSummary = queryParams.get('seatSummary');



  return (
    <>
      <HeaderNav />
      <div className='download'>
      <div className='download__div'>
        <div className='download__tickets'>
          <h2 className='download__h2'>Boletos</h2>
          <div>
            <p className='download__date'>{date}</p>
            <p className='download__hour'>{hour}</p>
          </div>
        </div>
        <div className='download__info'>
          <div className='download__image'>
            <img src="" alt="" />
          </div>
          <div className='download__movie'>
            <span className='download__span'>Película: {data.title}</span>
            <span className='download__span'>Complejo: {theater}</span>
            <span className='download__span'>Asientos: {seatSummary}</span>
            <span className='download__span'>Sala: {sala}</span>
          </div>
        </div>
        <div className='download__qr'>
          <img src={qr} alt="" />
        </div>
      </div>
      </div>
    </>
  )
}

export default Download