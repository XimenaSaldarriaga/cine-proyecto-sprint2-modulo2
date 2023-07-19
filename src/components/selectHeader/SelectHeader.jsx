import React from 'react'
import './selectHeader.scss'

const SelectHeader = () => {
  return (
    <div className='selectHeader'>
      <form className='selectHeader__form'>
        <input className='selectHeader__input' type="text" placeholder='Buscar' />
      </form>
      <select className='selectHeader__select' name="Cines cercanos" id="">
        <option value="opcion1">Cines cercanos</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
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