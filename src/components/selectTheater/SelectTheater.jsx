import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { URL_THEATERS } from '../../services/data'

const SelectTheater = () => {

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
      return (
        <select className='selectHeader__select' name="Cines cercanos" id="">
          <option value="" disabled selected>
            Cines cercanos
          </option>
          {theaters.map((theater, index) => (
            <option className='selectHeader__option' key={index} data={theater}>
              {theater.name}
            </option>
          ))}
        </select>
      );
}

export default SelectTheater