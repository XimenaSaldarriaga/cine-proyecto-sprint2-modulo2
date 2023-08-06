import React from 'react'
import HeaderNav from '../headerNav/HeaderNav'
import qr from '../../images/qr.webp'
import './download.scss'

const Download = () => {
  return (
    <>
      <HeaderNav />
      <div className='download'>
      <div className='download__div'>
        <div className='download__tickets'>
          <h2 className='download__h2'>Boletos</h2>
          <div>
            <p className='download__date'>10AGO</p>
            <p className='download__hour'>18:00</p>
          </div>
        </div>
        <div className='download__info'>
          <div className='download__image'>
            <img src="" alt="" />
          </div>
          <div className='download__movie'>
            <span className='download__span'>Película:</span>
            <span className='download__span'></span>
            <span className='download__span'>Complejo:</span>
            <span className='download__span'></span>
            <span className='download__span'>Asientos:</span>
            <span className='download__span'></span>
            <span className='download__span'>Sala:</span>
            <span className='download__span'></span>
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