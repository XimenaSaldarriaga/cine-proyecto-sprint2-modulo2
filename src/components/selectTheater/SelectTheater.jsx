import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_THEATERS } from '../../services/data';

const SelectTheater = ({ onTheaterSelect }) => {
  const getDataCine = async () => {
    try {
      const { data } = await axios.get(URL_THEATERS);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    getTheater();
  }, []);

  const getTheater = async () => {
    const data = await getDataCine();
    setTheaters(data);
  };

  const handleTheaterSelect = (event) => {
    const selectedTheater = theaters.find((theater) => theater.name === event.target.value);
    onTheaterSelect(selectedTheater);
  };

  return (
    <>
    <p className="hours__title">Selecciona un teatro</p>
    <select className="selectHeader__select" name="Cines cercanos" onChange={handleTheaterSelect}>
      <option>Cines cercanos</option>
      {theaters.map((theater, index) => (
        <option className="selectHeader__option" key={index} value={theater.name}>
          {theater.name}
        </option>
      ))}
    </select>
    </>
  );
};

export default SelectTheater;








