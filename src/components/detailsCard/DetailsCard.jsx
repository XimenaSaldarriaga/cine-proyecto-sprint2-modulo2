import React from 'react'
import { URL_IMAGE } from '../../services/data'
import './detailsCard.scss'

const DetailsCard = ({ data }) => {
    return (
        <div className='details'>
        <div className='details__movie'>
            <div className='details__image'>
                <img src={`${URL_IMAGE + data.poster_path}`} alt="" />
            </div>
            <div className='details__info'>
                <h1 className='details__title'>{data.title}</h1>
                <span className='details__span'>{data.original_title}</span>
            </div>
        </div>
        <div className='details__trailer'>
            <h2 className='details__subtitle'>Trailer</h2>
            <h2 className='details__subtitle'>Sinopsis</h2>
            <p className='details__paragraph'>{data.overview}</p>
        </div>
        </div>
    )
}

export default DetailsCard


