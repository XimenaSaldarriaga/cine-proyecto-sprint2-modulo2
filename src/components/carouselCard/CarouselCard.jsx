import React from 'react'
import { URL_IMAGE } from '../../services/data'
import './carouselCard.scss'

const CarouselCard = ({ data }) => {

    return (
        <div className='CarouselCard'>
            <div>
                <img className='CarouselCard__image' src={`${URL_IMAGE + data.poster_path}`} alt="" />
            </div>
            <div className='CarouselCard__info'>
                <h1 className='CarouselCard__title'>{data.title}</h1>
                <span className='CarouselCard__span'>Título en Inglés: {data.original_title}</span>
                <span className='CarouselCard__span'>Estreno: {data.release_date} </span>
                <span className='CarouselCard__span'>Género: {data.genres.join(', ')} </span>
            </div>
        </div>
    )
}

export default CarouselCard