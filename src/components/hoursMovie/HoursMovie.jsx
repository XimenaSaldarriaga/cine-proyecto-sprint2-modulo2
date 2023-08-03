import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_THEATERS } from '../../services/data';
import './hoursMovie.scss';

const HoursMovie = ({ data}) => {

  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedSala, setSelectedSala] = useState(null);
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    getTheatersData();
  }, []);

  const getTheatersData = async () => {
    try {
      const { data } = await axios.get(URL_THEATERS);
      setTheaters(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTheaterSelect = (event) => {
    const selectedTheater = theaters.find((theater) => theater.name === event.target.value);
    setSelectedTheater(selectedTheater);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleHourClick = (hourWithSala) => {
    const [hourValue, sala] = hourWithSala.split(" - ");
    setSelectedHour(hourValue.trim());
    setSelectedSala(sala.trim());
  };

  const navigate = useNavigate();

  const handleSelectBoletos = () => {
    if (selectedDate && selectedHour && selectedTheater && data && data.id && selectedSala) {
      navigate(`/quantity/${data.id}?theater=${selectedTheater.name}&date=${selectedDate}&hour=${selectedHour}&sala=${selectedSala}`);
    }
  };

  return (
    <div className="hours">
      <p className="hours__title">Selecciona un teatro</p>
      <select className="selectHeader__select hours__select" name="Cines cercanos" onChange={handleTheaterSelect}>
        <option>Cines cercanos</option>
        {theaters.map((theater, index) => (
          <option className="selectHeader__option" key={index} value={theater.name}>
            {theater.name}
          </option>
        ))}
      </select>
      {selectedTheater && (
        <>
          <p className="hours__title">{selectedTheater.name}</p>
          <p className="hours__theater">Selecciona una fecha</p>
          <div className="hours__options">
            {selectedTheater.dates.map((date, index) => (
              <button
                key={index}
                className={`hours__option ${selectedDate === date.date ? 'selected' : ''}`}
                onClick={() => handleDateClick(date.date)}
              >
                {date.date}
              </button>
            ))}
          </div>
        </>
      )}
      {selectedDate && (
        <>
          <p className="hours__theater">Horarios disponibles {selectedDate}</p>
          <div className="hours__options">
            {selectedTheater.dates
              .find((date) => date.date === selectedDate)
              .hours.map((hour, index) => {
                const hourOnly = hour.split(" - ")[0];
                return (
                  <button
                    key={index}
                    className={`hours__option ${selectedHour === hourOnly ? 'selected' : ''}`}
                    onClick={() => handleHourClick(hour)}
                  >
                    {hourOnly}
                  </button>
                );
              })}
          </div>
        </>
      )}
      <button
        className={`hours__button ${selectedDate && selectedHour ? 'visible' : ''}`}
        onClick={handleSelectBoletos}
      >
        Seleccionar boletos
      </button>
    </div>
  );
};

export default HoursMovie;
















