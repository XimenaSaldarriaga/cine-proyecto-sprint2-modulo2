import React from 'react'
import './cardCartelera.scss'
import { URL_IMAGE } from '../../services/data'

const CardCartelera = ({ data }) => {

  return (
    <div className='card'>
      <img className='card__image' src={`${URL_IMAGE + data.poster_path}`} alt="" />
      <h1>{data.title}</h1>
      <span>Título en Inglés: {data.original_title}</span>
      <span>Estreno: {data.release_date} </span>
      <span>Género: </span>
    </div>
  )
}

export default CardCartelera