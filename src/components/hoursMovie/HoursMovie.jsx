import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './hoursMovie.scss';

const HoursMovie = ({ data}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleSelectBoletos = (id) => {
    if (selectedOption !== null && data && data.id) {
      navigate(`/quantity/${data.id}`);
    }
  };
  const hoursOptions = [
    { time: '18:00', index: 0 },
    { time: '19:30', index: 1 },
    { time: '21:00', index: 2 },
  ];

  return (
    <div className='hours'>
      <h1 className='hours__title'>Horarios disponibles - 07 de julio</h1>
      <p className='hours__paragraph'>Elige el horario que prefieras</p>
      <p className='hours__theater'>El Tesoro</p>
      <div className='hours__options'>
        {hoursOptions.map((option) => (
          <a
            key={option.index}
            className={`hours__option ${selectedOption === option.index ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option.index)}
          >
            {option.time}
          </a>
        ))}
      </div>
      <button
        className={`hours__button ${selectedOption !== null ? 'visible' : ''}`}
        onClick={handleSelectBoletos}
      >
        Seleccionar boletos
      </button>
    </div>
  );
};

export default HoursMovie;







