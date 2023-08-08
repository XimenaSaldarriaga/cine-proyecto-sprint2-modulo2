import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderNav from '../headerNav/HeaderNav';
import Summary from '../summary/Summary';
import './payment.scss';

const Payment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (dataForm) => {
    console.log(dataForm);
    navigate(`/transaction?data=${encodeURIComponent(dataStr)}&theater=${theater}&date=${date}&hour=${hour}&sala=${sala}&value=${value}&currentPrice=${currentPrice}&selectedButtons=${selectedButtons}&seatSummary=${seatSummary}`);
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataStr = queryParams.get('data');
  const data = JSON.parse(decodeURIComponent(dataStr));
  const theater = queryParams.get('theater');
  const date = queryParams.get('date');
  const hour = queryParams.get('hour');
  const sala = queryParams.get('sala');
  const value = queryParams.get('value');
  const currentPrice = queryParams.get('currentPrice');
  const selectedButtons = queryParams.get('selectedButtons');
  const seatSummary = queryParams.get('seatSummary');

  return (
    <>
      <HeaderNav />
      <div className='payment'>
        <div className='payment__pay'>
          <h2 className='payment__subtitle'>Información Personal</h2>
          <p className='payment__paragraph'>Completa los datos del formulario para realizar el pago</p>

          <form className='payment__form' onSubmit={handleSubmit(onSubmit)}>
            <div className='payment__div'>
              <label className='payment__label'>Correo electrónico</label>
              <input
                className='payment__input'
                type="text"
                placeholder='Ingrese su correo electrónico'
                {...register('correo', {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
              {errors.correo?.type === 'pattern' && <p className='payment__errors'>correo inválido</p>}
            </div>
            <div className='payment__div'>
              <label className='payment__label'>Nombre en la tarjeta</label>
              <input
                className='payment__input'
                type="text"
                placeholder='Ingrese nombre en la tarjeta'
                {...register('nombre', { required: true })}
              />
            </div>
            <div className='payment__div'>
              <label className='payment__label'>Número de la tarjeta</label>
              <input
                className='payment__input payment__image'
                type="text"
                placeholder='1234 1234 1234 1234'
                {...register('numero', {
                  required: true,
                  maxLength: 16,
                  minLength: 16,
                  pattern: /^[0-9]*$/,
                })}
              />
              {errors.numero?.type === 'minLength' && <p className='payment__errors'>La tarjeta debe tener 16 dígitos</p>}
              {errors.numero?.type === 'pattern' && <p className='payment__errors'>Ingrese solo números</p>}
              {errors.numero?.type === 'maxLength' && <p className='payment__errors'>La tarjeta debe tener máximo 16 dígitos</p>}
            </div>
            <div className='payment__date'>
              <div className='payment__div'>
                <label className='payment__label'>Fecha de caducidad</label>
                <input
                  className='payment__input'
                  type="text"
                  placeholder='MM/YY'
                  {...register('fechaDeCaducidad', { required: true })}
                />
              </div>
              <div className='payment__div'>
                <label className='payment__label'>CVV</label>
                <input
                  className='payment__input payment__alert'
                  type="text"
                  placeholder='Enter CVV'
                  {...register('cvv', {
                    required: true,
                    maxLength: 3,
                    minLength: 3,
                  })}
                />
              </div>
            </div>
            <button type='submit'>Pagar ahora</button>
          </form>
        </div>
        <div className='payment__summary'>
          <Summary
            data={data}
            date={date}
            hour={hour}
            theater={theater}
            sala={sala}
            value={value}
            currentPrice={currentPrice}
            selectedButtons={selectedButtons}
            seatSummary={seatSummary}
            isPaymentPage={true}
          />
        </div>
      </div>
    </>
  );
};

export default Payment;
