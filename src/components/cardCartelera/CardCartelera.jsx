import React from 'react'
import './cardCartelera.scss'
import { URL_IMAGE } from '../../services/data'

const CardCartelera = ({ data }) => {

  return (
    <div className='card'>
      <img className='card__image' src={`${URL_IMAGE + data.poster_path}`} alt="" />
      <h1 className='card__title'>{data.title}</h1>
      <span className='card__span'>Título en Inglés: {data.original_title}</span>
      <span className='card__span'>Estreno: {data.release_date} </span>
      <span className='card__span'>Género: </span>
    </div>
  )
}

export default CardCartelera