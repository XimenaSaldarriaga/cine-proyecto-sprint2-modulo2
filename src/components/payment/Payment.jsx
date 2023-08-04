import React, { useState, useEffect } from 'react';
import HeaderNav from '../headerNav/HeaderNav'
import Summary from '../summary/Summary'
import { useParams, useLocation } from 'react-router-dom';

const Payment = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get('date');
  const hour = searchParams.get('hour');
  const theater = searchParams.get('theater');
  const sala = searchParams.get('sala');
  const value = searchParams.get('value');
  const selectedButtons = searchParams.get('selectedButtons');
  const getSeatLetterAndNumber = searchParams.get ('getSeatLetterAndNumber')
  const [movie, setMovie] = React.useState([]);
  const { id } = useParams();
  const ticketPrice = 15000;
  const totalRows = 8;
  const seatsPerRow = 20;
  const totalSeats = totalRows * seatsPerRow;
  const seatsArray = new Array(totalSeats).fill(null);
  const selecMovie = movie.find((movi) => movi.id === Number(id));
  const currentPrice = ticketPrice * value;

  return (
    <div>
      <HeaderNav />
      <div>
        <p>Información personal</p>
      </div>
      {selecMovie && (
            <Summary
              data={selecMovie}
              date={date}
              hour={hour}
              theater={theater}
              sala={sala}
              value={value}
              currentPrice={currentPrice}
              selectedButtons={selectedButtons}
              getSeatLetterAndNumber={getSeatLetterAndNumber}
            />
          )}
    </div>
  )
}

export default Payment