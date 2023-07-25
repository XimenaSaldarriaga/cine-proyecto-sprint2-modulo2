import React from 'react'
import './HoursMovie.scss'

const HoursMovie = () => {
  return (
    <div className='hours'>
      <h1 className='hours__title'>Horarios disponibles - 07 de julio</h1>
      <p className='hours__paragraph'>Eligue el horario que prefieras</p>
      <p className='hours__theater'>El Tesoro</p>
      <div className='hours__options'>
        <a className='hours__option'>18:00</a>
        <a className='hours__option'>19:30</a>
        <a className='hours__option'>21:00</a>
      </div>
      <button className='hours__button'>Seleccionar boletos</button>
    </div>
  )
}

export default HoursMovie