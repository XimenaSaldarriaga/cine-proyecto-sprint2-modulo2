import React, { useEffect, useState } from 'react';
import './quantity.scss';
import HeaderNav from '../headerNav/HeaderNav';
import Summary from '../summary/Summary';
import { useParams, useLocation, useNavigate  } from 'react-router-dom';
import { getDataMovies } from '../../services/data';

const Quantity = () => {

  const navigate = useNavigate()

  const handleContinuar = (destination) => {
    navigate(destination);
  };

  const [value, setValue] = useState(0);

  const handlePlus = () => {
    if (value < 10) {
      setValue(Math.min(value + 1, 10));
    }
  };

  const handleMinus = () => {
    if (value > 0) {
      setValue(Math.max(value - 1, 0));
    }
  };

  const [movie, setMovie] = React.useState([]);
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedDate = searchParams.get('date');
  const selectedHour = searchParams.get('hour');
  const selectedTheater = searchParams.get('theater');
  const selectedSala = searchParams.get('sala');
  const ticketPrice = 15000;
  const currentPrice = ticketPrice * value;

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
        <div className='selectTickets'>
          <h2 className='details__title'>Selecciona tus boletos</h2>
          <span className='selectTickets__span'>Puedes comprar 10 boletos máximo por transacción</span>
          <div className='selectTickets__info'>
            <span className='selectTickets__quantity'>CANTIDAD</span>
            <div className='selectTickets__numbers'>
              <div className='selectTickets__buttons'>
                <button className='selectTickets__button' onClick={handleMinus}>
                  -
                </button>
                <span className='selectTickets__number'>{value}</span>
                <button className='selectTickets__button' onClick={handlePlus}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='quantity__summary'>
          {selecMovie && (
            <Summary
              data={selecMovie}
              date={selectedDate}
              hour={selectedHour}
              theater={selectedTheater}
              sala={selectedSala}
              value={value}
              currentPrice={currentPrice}
              fromSeats={false}
              handleContinuar={handleContinuar}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Quantity;









