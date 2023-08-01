import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { URL_THEATERS } from '../../services/data'
import './hoursMovie.scss';

const HoursMovie = ({ data}) => {

  const getDataCine = async () => {
    try {
      const { data } =
        await axios.get(URL_THEATERS);
      return data
    } catch (error) {
      return error
    }
  }

  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    getTheater();
  }, []);
  const getTheater = async () => {
    const data = await getDataCine();
    setTheaters(data)
    console.log(data);
  }

  const firstTheaterName = theaters.length > 0 ? theaters[0].name : '';
  const firstTheater = theaters.length > 0 ? theaters[0] : null;

  //////////////////////////////////////////////////////////////////
  
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

  return (
    <div className='hours'>
      <h1 className='hours__title'>Horarios disponibles - 07 de julio</h1>
      <p className='hours__paragraph'>Elige el horario que prefieras</p>
      <p className='hours__theater'>{firstTheaterName}</p>
      <div className='hours__options'>
        {firstTheater &&
          firstTheater.functions.map((func) => (
            <button
              key={func.id}
              className={`hours__option ${
                selectedOption === func.id ? 'selected' : ''
              }`}
              onClick={() => handleOptionClick(func.id)}
            >
              {func.hour}
            </button>
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







