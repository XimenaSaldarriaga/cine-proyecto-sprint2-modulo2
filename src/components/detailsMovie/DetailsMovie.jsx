import React, { useEffect, useState } from 'react'
import { getDataMovies } from '../../services/data'
import DetailsCard from '../detailsCard/DetailsCard';

const DetailsMovie = () => {

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
    <div>
        {
            movies.map((movie, index) => (
                < DetailsCard key={index} data={movie} />
            ))
        }
</div>
   )

}

export default DetailsMovie



