import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../detailsCard/DetailsCard';
import { getDataMovies } from '../../services/data';
import HoursMovie from "../hoursMovie/HoursMovie";

import './details.scss';

const Details = ({navigate}) => {

  const [movies, setMovies] = React.useState([]);
  let { id } = useParams();

  React.useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await getDataMovies();
      setMovies(data);
    };
    fetchMoviesData();
  }, []);

  const selectedMovie = movies.find((movie) => movie.id === Number(id));

  return (
    <>
      <div className="detailsDiv">
        <div className="detailsDiv__movie">
          <div>
            {selectedMovie && <DetailsCard data={selectedMovie} />}
          </div>
        </div>
        <HoursMovie data={selectedMovie} navig={navigate} />
      </div>
    </>
  );
};

export default Details;




