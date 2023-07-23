import React, { useEffect, useState } from 'react'
import './selectHeader.scss'
import SelectTheater from '../selectTheater/SelectTheater'
import SelectDate from '../selectDate/SelectDate'
import SearchMovie from '../searchMovie/SearchMovie'


const SelectHeader = () => {


  return (

    <div className='selectHeader'>
      <SearchMovie />
      <SelectTheater />
      <SelectDate />
      <img className='selectHeader__icon' src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="" />
    </div>
  )
}

export default SelectHeader