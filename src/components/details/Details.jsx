import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../detailsCard/DetailsCard';
import { getDataMovies } from '../../services/data';
import HoursMovie from '../hoursMovie/HoursMovie';
import HeaderNav from '../headerNav/HeaderNav';

import './details.scss';

const Details = ({ navigate }) => {
  
  const [movies, setMovies] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await getDataMovies();
      setMovies(data);
    };
    fetchMoviesData();
  }, []);

  const selectedMovie = movies.find((movie) => movie.id === Number(id));

  const handleTheaterChange = (theater) => {
    setSelectedTheater(theater);
    setSelectedDate(null);
    setSelectedHour(null);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedHour(null);
  };

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
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
          <HoursMovie
            data={selectedMovie}
            navig={navigate}
            onTheaterChange={handleTheaterChange}
            onDateChange={handleDateChange}
            onHourChange={handleHourChange}
          />
        </div>
      </div>
    </>
  );
};

export default Details;










