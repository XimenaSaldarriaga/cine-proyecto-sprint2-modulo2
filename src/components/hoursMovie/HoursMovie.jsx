import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './hoursMovie.scss';

const HoursMovie = ({ data, selectedTheater }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const navigate = useNavigate();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedHour(null);
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  const handleSelectBoletos = () => {
    if (selectedDate && selectedHour && data && data.id) {
      navigate(`/quantity/${data.id}`);
    }
  };

  const firstTheaterName = selectedTheater ? selectedTheater.name : '';
  const firstTheater = selectedTheater ? selectedTheater : null;

  return (
    <div className="hours">
      {firstTheater && (
        <p className="hours__title">{firstTheaterName}</p>
      )}
      {firstTheater && (
        <p className="hours__theater">Selecciona una fecha</p>
      )}
      <div className="hours__options">
        {firstTheater &&
          firstTheater.dates.map((date, index) => (
            <button
              key={index}
              className={`hours__option ${selectedDate === date.date ? 'selected' : ''}`}
              onClick={() => handleDateClick(date.date)}
            >
              {date.date}
            </button>
          ))}
      </div>
      {selectedDate && firstTheater && (
        <p className="hours__theater">Horarios disponibles {selectedDate}</p>
      )}
      {selectedDate && firstTheater && (
        <div className="hours__options">
          {firstTheater &&
            firstTheater.dates
              .find((date) => date.date === selectedDate)
              .hours.map((hour, index) => (
                <button
                  key={index}
                  className={`hours__option ${selectedHour === hour ? 'selected' : ''}`}
                  onClick={() => handleHourClick(hour)}
                >
                  {hour}
                </button>
              ))}
        </div>
      )}
      <button className={`hours__button ${selectedDate && selectedHour ? 'visible' : ''}`} onClick={handleSelectBoletos}>
        Seleccionar boletos
      </button>
    </div>
  );
};

export default HoursMovie;












