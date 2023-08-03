import React, { useEffect } from 'react';
import './quantity.scss';
import HeaderNav from '../headerNav/HeaderNav';
import Summary from '../summary/Summary';
import { useParams, useLocation } from 'react-router-dom';
import { getDataMovies } from '../../services/data';

const Quantity = () => {
  const [movie, setMovie] = React.useState([]);
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedDate = searchParams.get('date');
  const selectedHour = searchParams.get('hour');
  const selectedTheater = searchParams.get('theater');

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await getDataMovies();
      setMovie(data);
    };
    fetchMoviesData();
  }, []);

  const selecMovie = movie.find((movi) => movi.id === Number(id));

  return (
    <>
      <HeaderNav />
      <div className='quantity'>
        <div className="quantity__selectTickets">
          {selecMovie && selectedDate && selectedHour && selectedTheater && (
            <Summary
              data={selecMovie}
              date={selectedDate}
              hour={selectedHour}
              theater={selectedTheater}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Quantity;




