import React from 'react'
import './selectHeader.scss'

const SelectHeader = () => {
  return (
    <div className='selectHeader'>
        <select className='selectHeader__select' name="Cines cercanos" id=""></select>
        <select className='selectHeader__select' name="Fecha" id=""></select>
        <img className='selectHeader__icon' src= "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="" />
    </div>
  )
}

export default SelectHeader