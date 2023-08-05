import React, { useState, useEffect } from 'react';
import HeaderNav from '../headerNav/HeaderNav'
import Summary from '../summary/Summary'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getDataMovies } from '../../services/data';
import { useForm } from 'react-hook-form';
import './payment.scss'

const Payment = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const form = (dataForm) => {
    console.log(dataForm)
  }
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get('date');
  const hour = searchParams.get('hour');
  const theater = searchParams.get('theater');
  const sala = searchParams.get('sala');
  const value = searchParams.get('value');
  const selectedButtons = searchParams.get('selectedButtons');
  const getSeatLetterAndNumber = searchParams.get('getSeatLetterAndNumber')
  const [movie, setMovie] = React.useState([]);
  const { id } = useParams();
  const ticketPrice = 15000;
  const selecMovie = movie.find((movi) => movi.id === Number(id));
  const currentPrice = ticketPrice * value;

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await getDataMovies();
      setMovie(data);
    };
    fetchMoviesData();
  }, []);

  console.log(date, hour, theater, sala, value, currentPrice, )


  return (
    <>
      <HeaderNav />
      <div className='payment'>
        <div className='payment__pay'>
          <h2 className='payment__subtitle'>Información Personal</h2>
          <p className='payment__paragraph'>Completa los datos del formulario para realizar el pago</p>

          <form className='payment__form' onSubmit={handleSubmit(form)}>
            <div className='payment__div'>
              <label className='payment__label'>Correo electrónico</label>
              <input className='payment__input' type="text" placeholder='Ingrese su correo electrónico' {...register('correo',
                {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })} />
                { errors.correo?.type ==='pattern' && <p className='payment__errors'>correo inválido</p>}
            </div>
            <div className='payment__div'>
              <label className='payment__label'>Nombre en la tarjeta</label>
              <input className='payment__input' type="text" placeholder='Ingrese nombre en la tarjeta' {...register('nombre',
                {
                  required: true
                })} />
            </div>
            <div className='payment__div'>
              <label className='payment__label'>Número de la tarjeta</label>
              <input className='payment__input payment__image' type="text" placeholder='1234 1234 1234 1234' {...register('numero', {
                required: true,
                maxLength: 16,
                minLength: 16,
              })} />
              { errors.numero?.type ==='minLength' && <p className='payment__errors'>La tarjeta debe tener 16 dígitos</p>}
            </div>
            <div className='payment__date'>
              <div className='payment__div'>
                <label className='payment__label'>Fecha de caducidad</label>
                <input className='payment__input' type="text" placeholder='MM/YY' {...register('fecha de caducidad', {
                  required: true
                })} />
              </div>
              <div className='payment__div'>
                <label className='payment__label'>CVV</label>
                <input className='payment__input payment__alert' type="text" placeholder='Enter CVV' {...register('cvv', {
                  required: true,
                  maxLength: 3,
                  minLength: 3,
                })} />
              </div>
            </div>
            <button type='submit'>Pagar ahora</button>
          </form>
        </div>
        <div className='payment__summary'>
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
      </div>
    </>
  )
}

export default Payment