import './summary.scss';
import { URL_IMAGE } from '../../services/data';
import React  from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Summary = ({ data, theater, date, hour, sala, value, currentPrice, selectedButtons, getSeatLetterAndNumber, fromSeats, handleContinuar, seatSummary}) => {
  
  const navigate = useNavigate();

  let { id } = useParams();



  const handleContinue = () => {
    if (fromSeats && selectedButtons.length == value) {
      handleContinuar(`/payment?data=${data}&theater=${theater}&date=${date}&hour=${hour}&sala=${sala}&value=${value}&currentPrice=${currentPrice}&selectedButtons=${selectedButtons}&getSeatLetterAndNumber=${getSeatLetterAndNumber}&fromSeats=${fromSeats}&seatSummary=${seatSummary}`);
    } else if (!fromSeats && value >= 1) {
      handleContinuar(`/seats/${id}?data=${data}&theater=${theater}&date=${date}&hour=${hour}&sala=${sala}&value=${value}&currentPrice=${currentPrice}`);
    } else {
    }
  };


  return (
    <div className='summary__selectTickets'>
      <div className='summary'>
        <h2 className='summary__title'>Resumen de compra</h2>
        <div className='summary__details'>
          <div className='summary__image'>
            <img src={`${URL_IMAGE}${data.poster_path}`} alt='' />
          </div>
          <div className='summary__info'>
            <div>
              <span className='summary__subtitle'>Pelicula:</span>
              <span>{data.title}</span>
            </div>
            <div>
              <span className='summary__subtitle'>Cinema:</span>
              <span>{theater}</span>
            </div>
            <div>
              <span className='summary__subtitle'>Fecha:</span>
              <span>{date}</span>
            </div>
            <div>
              <span className='summary__subtitle'>Hora:</span>
              <span>{hour}</span>
            </div>
            <div>
              <span className='summary__subtitle'>Sala:</span>
              <span>{sala}</span>
              <div>
                <span className='summary__subtitle'>Cantidad de boletos:</span>
                <span>{value}</span>
              </div>
            </div>
            {selectedButtons && selectedButtons.length > 0 && (
            <div>
              <span className='summary__subtitle'>Asientos:</span>
              {seatSummary}
            </div>
          )}
          </div>
        </div>
        <p className='summary__paragraph'>Se realizará un cargo por servicio por cada boleto dentro de la orden</p>
        <div className='summary__total'>
          <span>Total (IVA incluido): </span>
          <span className='selectTickets__price'>
            {currentPrice.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}
          </span>
        </div>
        <button className='summary__button' onClick={handleContinue} style={{ opacity: value >= 1 ? 1 : 0.5 }}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Summary;











