import React, { useEffect, useState } from 'react'
import './carousel.scss'
import { getDataMovies } from '../../services/data'
import CardCarousel from '../cardCarousel/CardCarousel';



const Carousel = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const data = await getDataMovies();
        setMovies(data)
        console.log(data);
    }

    return (
        <div className='carousel'>
                  {
        movies.map((movie, index) => (
          < CardCarousel key={index} data={movie} />
        ))
        }
        </div>
    )
}

export default Carousel