import React from 'react'
import './cardCarousel.scss'

const CardCarousel = ({data}) => {

  return (
    <div className='card'>
        <h2>{data.title}</h2>
        <span>Título en Inglés: {data.original_title}</span>
        <span>Estreno: {data.release_date} </span>
    </div>
  )
}

export default CardCarousel