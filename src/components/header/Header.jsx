import React from 'react'
import './header.scss'
import Navbar from '../navbar/Navbar'
import SelectHeader from '../selectHeader/SelectHeader'


const Header = () => {
  return (
    <div>
      <div className='header'>
        <img className='header__logo' src="https://archivos.cinecolombia.com/cineco-cms-frontend/1.0.100/dist/images/logo_cineco.svg" alt="" />
        < Navbar />
        < SelectHeader />
      </div>
    </div>
  )
}

export default Header