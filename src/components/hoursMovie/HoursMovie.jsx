import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './hoursMovie.scss';

const HoursMovie = ({ data, selectedTheater }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleSelectBoletos = () => {
    if (selectedOption !== null && data && data.id) {
      navigate(`/quantity/${data.id}`);
    }
  };

  const firstTheaterName = selectedTheater ? selectedTheater.name : '';
  const firstTheater = selectedTheater ? selectedTheater : null;

  return (
    <div className="hours">
      <h1 className="hours__title">Horarios disponibles - 07 de julio</h1>
      <p className="hours__paragraph">Elige el horario que prefieras</p>
      <p className="hours__theater">{firstTheaterName}</p>
      <div className="hours__options">
        {firstTheater &&
          firstTheater.functions.map((func) => (
            <button
              key={func.id}
              className={`hours__option ${selectedOption === func.id ? 'selected' : ''}`}
              onClick={() => handleOptionClick(func.id)}
            >
              {func.hour}
            </button>
          ))}
      </div>
      <button className={`hours__button ${selectedOption !== null ? 'visible' : ''}`} onClick={handleSelectBoletos}>
        Seleccionar boletos
      </button>
    </div>
  );
};

export default HoursMovie;









