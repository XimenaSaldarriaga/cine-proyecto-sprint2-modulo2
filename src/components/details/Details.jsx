import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../detailsCard/DetailsCard';
import { getDataMovies } from '../../services/data';
import HoursMovie from "../hoursMovie/HoursMovie";
import SelectTheater from "../selectTheater/SelectTheater";
import HeaderNav from '../headerNav/HeaderNav';

import './details.scss';

const Details = ({ navigate }) => {
  const [movies, setMovies] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await getDataMovies();
      setMovies(data);
    };
    fetchMoviesData();
  }, []);

  const selectedMovie = movies.find((movie) => movie.id === Number(id));

  const handleTheaterSelect = (theater) => {
    setSelectedTheater(theater);
  };

  return (
    <>
      <HeaderNav />
      <div className="detailsDiv">
        <div className="detailsDiv__movie">
          <div>
            {selectedMovie && <DetailsCard data={selectedMovie} />}
          </div>
        </div>
        <div className='detailsDiv__hour'>
        <SelectTheater onTheaterSelect={handleTheaterSelect} />
        <HoursMovie data={selectedMovie} selectedTheater={selectedTheater} navig={navigate} />
        </div>
      </div>
    </>
  );
};

export default Details;






