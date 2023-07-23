import React, { useEffect, useState } from 'react'
import './selectHeader.scss'
import axios from 'axios'
import { URL_THEATERS } from '../../services/data'

const SelectHeader = () => {

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

    <div className='selectHeader'>
      <form className='selectHeader__form'>
        <input className='selectHeader__input' type="text" placeholder='Buscar' />
      </form>
      <select className='selectHeader__select' name="Cines cercanos" id="">
        {
          theaters.map((theater, index) => (
            <option className='selectHeader__option' key={index} data={theater} >{theater.name}</option>
          ))
        }
      </select>

      <select className='selectHeader__select' name="Fecha" id="">
        <option value="opcion1">Fecha</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
      </select>
      <img className='selectHeader__icon' src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="" />
    </div>
  )
}

export default SelectHeader